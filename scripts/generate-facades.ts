import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dir, "..");
const checkOnly = process.argv.includes("--check");
const drifted: string[] = [];
const spec = JSON.parse(await readFile(resolve(root, "spec/affinity.openapi.json"), "utf8"));
const apiVersion = spec.info.version as string;
const defaultHost = spec.servers?.[0]?.url as string;
if (!apiVersion || !defaultHost) throw new Error("The OpenAPI spec must define info.version and servers[0].url");
const operationIds = Object.values(spec.paths as Record<string, Record<string, { operationId?: string }>>)
  .flatMap((path) => Object.values(path))
  .map((operation) => operation.operationId)
  .filter(Boolean)
  .sort();

const supportedOperations = [
  "cancelOrder", "createOrder", "createPractice", "createWebhookEndpoint",
  "deleteWebhookEndpoint", "getApiAccess", "getOrder", "getPlatformOrganization",
  "getPractice", "getWebhookEvent", "listCatalogItems", "listOrderEvents", "listOrders",
  "listPractices", "listWebhookEndpoints", "listWebhookEvents", "replayWebhookEvent",
  "rotateWebhookEndpointSecret", "submitOrder", "updateOrder", "updatePractice",
  "updateWebhookEndpoint",
].sort();

if (JSON.stringify(operationIds) !== JSON.stringify(supportedOperations)) {
  throw new Error(
    `The facade map is out of date.\nSpec: ${operationIds.join(", ")}\nMapped: ${supportedOperations.join(", ")}`,
  );
}

const generated = (comment: string) => `${comment} Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.\n`;
async function output(path: string, contents: string) {
  const destination = resolve(root, path);
  if (checkOnly) {
    const current = await readFile(destination, "utf8").catch(() => "");
    if (current !== contents) drifted.push(path);
    return;
  }
  await mkdir(resolve(destination, ".."), { recursive: true });
  await writeFile(destination, contents);
}

async function patchExports(path: string, marker: string, exports: string) {
  const destination = resolve(root, path);
  const current = await readFile(destination, "utf8");
  const start = `${marker} affinity-facade:start`;
  const end = `${marker} affinity-facade:end`;
  const block = `${start}\n${exports.trim()}\n${end}`;
  const withoutExisting = current
    .replace(new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}\\n?`, "g"), "")
    .replace(/^export \* from ['"]\.\/affinity['"];?\n?/gm, "")
    .replace(/^export \* from ['"]\.\/resources\/[^'"]+['"];?\n?/gm, "")
    .replace(/^from affinity_sdk\.affinity import Affinity\n?/gm, "")
    .trimEnd();
  const expected = `${withoutExisting}\n\n${block}\n`;
  if (checkOnly) {
    if (current !== expected) drifted.push(path);
  } else {
    await writeFile(destination, expected);
  }
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatGo(source: string) {
  const result = Bun.spawnSync(["gofmt"], { stdin: Buffer.from(source) });
  if (result.exitCode !== 0) throw new Error(result.stderr.toString());
  return result.stdout.toString();
}

function formatTypeScript(source: string) {
  const result = Bun.spawnSync(["bunx", "oxfmt", "--stdin-filepath", "generated.ts"], {
    stdin: Buffer.from(source),
  });
  if (result.exitCode !== 0) throw new Error(result.stderr.toString());
  return result.stdout.toString();
}

await output("typescript/src/affinity.ts", formatTypeScript(`${generated("//")}
import { APIKeysApi } from "./apis/APIKeysApi";
import { CatalogApi } from "./apis/CatalogApi";
import { PlatformOrdersApi } from "./apis/PlatformOrdersApi";
import { PlatformWebhooksApi } from "./apis/PlatformWebhooksApi";
import { PlatformsApi } from "./apis/PlatformsApi";
import { PracticesApi } from "./apis/PracticesApi";
import { Configuration, type FetchAPI } from "./runtime";
import { AccountResource } from "./resources/account";
import { CatalogResource } from "./resources/catalog";
import { OrdersResource } from "./resources/orders";
import { PracticesResource } from "./resources/practices";
import { WebhooksResource } from "./resources/webhooks";

export interface AffinityOptions { apiVersion?: string; host?: string; fetch?: FetchAPI; }

export class Affinity {
  readonly account: AccountResource;
  readonly catalog: CatalogResource;
  readonly orders: OrdersResource;
  readonly practices: PracticesResource;
  readonly webhooks: WebhooksResource;

  constructor(apiKey: string, options: AffinityOptions = {}) {
    if (!apiKey.trim()) throw new Error("Affinity requires a service API key");
    const host = options.host ?? "${defaultHost}";
    const configuration = new Configuration({
      accessToken: apiKey,
      basePath: (host.includes("://") ? host : \`https://\${host}\`).replace(/\\/+$/, ""),
      fetchApi: options.fetch,
      headers: { "Affinity-Version": options.apiVersion ?? "${apiVersion}" },
    });
    this.account = new AccountResource(new APIKeysApi(configuration), new PlatformsApi(configuration));
    this.catalog = new CatalogResource(new CatalogApi(configuration));
    this.orders = new OrdersResource(new PlatformOrdersApi(configuration));
    this.practices = new PracticesResource(new PracticesApi(configuration));
    this.webhooks = new WebhooksResource(new PlatformWebhooksApi(configuration));
  }
}
`));

const tsResources: Record<string, string> = {
  account: `import type { APIKeysApi } from "../apis/APIKeysApi";
import type { PlatformsApi } from "../apis/PlatformsApi";
export class AccountResource {
  constructor(private readonly accessApi: APIKeysApi, private readonly platformsApi: PlatformsApi) {}
  retrieveAccess() { return this.accessApi.getApiAccess(); }
  retrieve(organizationId?: string) { return this.platformsApi.getPlatformOrganization({ orgId: organizationId }); }
}`,
  catalog: `import type { CatalogApi } from "../apis/CatalogApi";
export interface CatalogListParams { query?: string; }
export class CatalogResource {
  constructor(private readonly api: CatalogApi) {}
  list(params: CatalogListParams = {}) { return this.api.listCatalogItems(params); }
}`,
  practices: `import type { PracticesApi } from "../apis/PracticesApi";
import type { CreatePracticeRequest } from "../models/CreatePracticeRequest";
import type { MutationOptions } from "./request-options";
export class PracticesResource {
  constructor(private readonly api: PracticesApi) {}
  list() { return this.api.listPractices(); }
  retrieve(practiceId: string) { return this.api.getPractice({ practiceId }); }
  create(params: CreatePracticeRequest, options: MutationOptions) { return this.api.createPractice({ createPracticeRequest: params, idempotencyKey: options.idempotencyKey }); }
  update(practiceId: string, options: MutationOptions) { return this.api.updatePractice({ practiceId, idempotencyKey: options.idempotencyKey }); }
}`,
  orders: `import type { PlatformOrdersApi } from "../apis/PlatformOrdersApi";
import type { CancelOrderRequest } from "../models/CancelOrderRequest";
import type { CreateOrderRequest } from "../models/CreateOrderRequest";
import type { UpdateOrderRequest } from "../models/UpdateOrderRequest";
import type { MutationOptions } from "./request-options";
export interface OrderListParams { externalOrderId?: string; patientExternalId?: string; }
export class OrdersResource {
  constructor(private readonly api: PlatformOrdersApi) {}
  list(params: OrderListParams = {}) { return this.api.listOrders(params); }
  retrieve(orderId: string) { return this.api.getOrder({ orderId }); }
  create(params: CreateOrderRequest, options: MutationOptions) { return this.api.createOrder({ createOrderRequest: params, idempotencyKey: options.idempotencyKey }); }
  update(orderId: string, params: UpdateOrderRequest, options: MutationOptions) { return this.api.updateOrder({ orderId, updateOrderRequest: params, idempotencyKey: options.idempotencyKey }); }
  submit(orderId: string, options: MutationOptions) { return this.api.submitOrder({ orderId, idempotencyKey: options.idempotencyKey }); }
  cancel(orderId: string, params: CancelOrderRequest, options: MutationOptions) { return this.api.cancelOrder({ orderId, cancelOrderRequest: params, idempotencyKey: options.idempotencyKey }); }
  listEvents(orderId: string) { return this.api.listOrderEvents({ orderId }); }
}`,
  webhooks: `import type { PlatformWebhooksApi } from "../apis/PlatformWebhooksApi";
import type { CreateWebhookEndpointRequest } from "../models/CreateWebhookEndpointRequest";
import type { UpdateWebhookEndpointRequest } from "../models/UpdateWebhookEndpointRequest";
import type { MutationOptions } from "./request-options";
export class WebhooksResource {
  constructor(private readonly api: PlatformWebhooksApi) {}
  listEndpoints() { return this.api.listWebhookEndpoints(); }
  createEndpoint(params: CreateWebhookEndpointRequest, options: MutationOptions) { return this.api.createWebhookEndpoint({ createWebhookEndpointRequest: params, idempotencyKey: options.idempotencyKey }); }
  updateEndpoint(endpointId: string, params: UpdateWebhookEndpointRequest, options: MutationOptions) { return this.api.updateWebhookEndpoint({ endpointId, updateWebhookEndpointRequest: params, idempotencyKey: options.idempotencyKey }); }
  deleteEndpoint(endpointId: string, options: MutationOptions) { return this.api.deleteWebhookEndpoint({ endpointId, idempotencyKey: options.idempotencyKey }); }
  rotateSecret(endpointId: string, options: MutationOptions) { return this.api.rotateWebhookEndpointSecret({ endpointId, idempotencyKey: options.idempotencyKey }); }
  listEvents() { return this.api.listWebhookEvents(); }
  retrieveEvent(eventId: string) { return this.api.getWebhookEvent({ eventId }); }
  replayEvent(eventId: string, options: MutationOptions) { return this.api.replayWebhookEvent({ eventId, idempotencyKey: options.idempotencyKey }); }
}`,
  "request-options": `export interface MutationOptions { idempotencyKey: string; }`,
};
for (const [name, source] of Object.entries(tsResources)) {
  await output(`typescript/src/resources/${name}.ts`, formatTypeScript(`${generated("//")}\n${source}\n`));
}
await patchExports("typescript/src/index.ts", "//", `
export * from "./affinity";
export * from "./resources/account";
export * from "./resources/catalog";
export * from "./resources/orders";
export * from "./resources/practices";
export * from "./resources/request-options";
export * from "./resources/webhooks";
`);

await output("python/affinity_sdk/affinity.py", `${generated("#")}
from typing import Optional
from affinity_sdk.api_client import ApiClient
from affinity_sdk.configuration import Configuration
from affinity_sdk.resources.account import AccountResource
from affinity_sdk.resources.catalog import CatalogResource
from affinity_sdk.resources.orders import OrdersResource
from affinity_sdk.resources.practices import PracticesResource
from affinity_sdk.resources.webhooks import WebhooksResource

class Affinity:
    def __init__(self, api_key: str, *, api_version: str = "${apiVersion}", host: str = "${defaultHost}") -> None:
        if not api_key.strip(): raise ValueError("Affinity requires a service API key")
        if "://" not in host: host = f"https://{host}"
        configuration = Configuration(host=host.rstrip("/"), access_token=api_key)
        self._client = ApiClient(configuration)
        self._client.add_default_header("Affinity-Version", api_version)
        self.account = AccountResource(self._client)
        self.catalog = CatalogResource(self._client)
        self.orders = OrdersResource(self._client)
        self.practices = PracticesResource(self._client)
        self.webhooks = WebhooksResource(self._client)
    def close(self) -> None: self._client.close()
    def __enter__(self): return self
    def __exit__(self, exc_type, exc_value, traceback): self.close()
`);

const pyResources: Record<string, string> = {
  account: `from affinity_sdk.api.api_keys_api import APIKeysApi
from affinity_sdk.api.platforms_api import PlatformsApi
class AccountResource:
    def __init__(self, client): self._access, self._platforms = APIKeysApi(client), PlatformsApi(client)
    def retrieve_access(self): return self._access.get_api_access()
    def retrieve(self, organization_id=None): return self._platforms.get_platform_organization(org_id=organization_id)`,
  catalog: `from affinity_sdk.api.catalog_api import CatalogApi
class CatalogResource:
    def __init__(self, client): self._api = CatalogApi(client)
    def list(self, *, query=None): return self._api.list_catalog_items(query=query)`,
  practices: `from affinity_sdk.api.practices_api import PracticesApi
class PracticesResource:
    def __init__(self, client): self._api = PracticesApi(client)
    def list(self): return self._api.list_practices()
    def retrieve(self, practice_id): return self._api.get_practice(practice_id=practice_id)
    def create(self, params, *, idempotency_key): return self._api.create_practice(idempotency_key=idempotency_key, create_practice_request=params)
    def update(self, practice_id, *, idempotency_key): return self._api.update_practice(practice_id=practice_id, idempotency_key=idempotency_key)`,
  orders: `from affinity_sdk.api.platform_orders_api import PlatformOrdersApi
class OrdersResource:
    def __init__(self, client): self._api = PlatformOrdersApi(client)
    def list(self, *, external_order_id=None, patient_external_id=None): return self._api.list_orders(external_order_id=external_order_id, patient_external_id=patient_external_id)
    def retrieve(self, order_id): return self._api.get_order(order_id=order_id)
    def create(self, params, *, idempotency_key): return self._api.create_order(idempotency_key=idempotency_key, create_order_request=params)
    def update(self, order_id, params, *, idempotency_key): return self._api.update_order(order_id=order_id, idempotency_key=idempotency_key, update_order_request=params)
    def submit(self, order_id, *, idempotency_key): return self._api.submit_order(order_id=order_id, idempotency_key=idempotency_key)
    def cancel(self, order_id, params, *, idempotency_key): return self._api.cancel_order(order_id=order_id, idempotency_key=idempotency_key, cancel_order_request=params)
    def list_events(self, order_id): return self._api.list_order_events(order_id=order_id)`,
  webhooks: `from affinity_sdk.api.platform_webhooks_api import PlatformWebhooksApi
class WebhooksResource:
    def __init__(self, client): self._api = PlatformWebhooksApi(client)
    def list_endpoints(self): return self._api.list_webhook_endpoints()
    def create_endpoint(self, params, *, idempotency_key): return self._api.create_webhook_endpoint(idempotency_key=idempotency_key, create_webhook_endpoint_request=params)
    def update_endpoint(self, endpoint_id, params, *, idempotency_key): return self._api.update_webhook_endpoint(endpoint_id=endpoint_id, idempotency_key=idempotency_key, update_webhook_endpoint_request=params)
    def delete_endpoint(self, endpoint_id, *, idempotency_key): return self._api.delete_webhook_endpoint(endpoint_id=endpoint_id, idempotency_key=idempotency_key)
    def rotate_secret(self, endpoint_id, *, idempotency_key): return self._api.rotate_webhook_endpoint_secret(endpoint_id=endpoint_id, idempotency_key=idempotency_key)
    def list_events(self): return self._api.list_webhook_events()
    def retrieve_event(self, event_id): return self._api.get_webhook_event(event_id=event_id)
    def replay_event(self, event_id, *, idempotency_key): return self._api.replay_webhook_event(event_id=event_id, idempotency_key=idempotency_key)`,
};
await output("python/affinity_sdk/resources/__init__.py", `${generated("#")}\n`);
for (const [name, source] of Object.entries(pyResources)) {
  await output(`python/affinity_sdk/resources/${name}.py`, `${generated("#")}\n${source}\n`);
}
await patchExports("python/affinity_sdk/__init__.py", "#", `from affinity_sdk.affinity import Affinity`);

await output("go/affinity.go", formatGo(`${generated("//")}
package affinity
import ("net/http"; "strings")
type ClientOptions struct { APIVersion string; Host string; HTTPClient *http.Client }
type MutationOptions struct { IdempotencyKey string }
type Client struct { Account *AccountResource; Catalog *CatalogResource; Orders *OrdersResource; Practices *PracticesResource; Webhooks *WebhooksResource }
func NewClient(apiKey string, options ...ClientOptions) *Client {
  if apiKey == "" { panic("affinity: service API key is required") }
  option := ClientOptions{}; if len(options) > 0 { option = options[0] }
  if option.APIVersion == "" { option.APIVersion = "${apiVersion}" }; if option.Host == "" { option.Host = "${defaultHost}" }
  if !strings.Contains(option.Host, "://") { option.Host = "https://" + option.Host }; option.Host = strings.TrimRight(option.Host, "/")
  cfg := NewConfiguration(); cfg.Servers[0].URL = option.Host; if option.HTTPClient != nil { cfg.HTTPClient = option.HTTPClient }
  cfg.AddDefaultHeader("Authorization", "Bearer " + apiKey); cfg.AddDefaultHeader("Affinity-Version", option.APIVersion)
  raw := NewAPIClient(cfg)
  return &Client{Account: &AccountResource{raw}, Catalog: &CatalogResource{raw}, Orders: &OrdersResource{raw}, Practices: &PracticesResource{raw}, Webhooks: &WebhooksResource{raw}}
}
`));
const goResources: Record<string, string> = {
 account: `package affinity
import "context"
type AccountResource struct { client *APIClient }
func (r *AccountResource) RetrieveAccess(ctx context.Context) (*GetApiAccess200Response, error) { v, _, e := r.client.APIKeysAPI.GetApiAccess(ctx).Execute(); return v, e }
func (r *AccountResource) Retrieve(ctx context.Context, organizationID ...string) (*GetPlatformOrganization200Response, error) { q := r.client.PlatformsAPI.GetPlatformOrganization(ctx); if len(organizationID)>0 { q=q.OrgId(organizationID[0]) }; v,_,e:=q.Execute(); return v,e }`,
 catalog: `package affinity
import "context"
type CatalogResource struct { client *APIClient }
type CatalogListParams struct { Query string }
func (r *CatalogResource) List(ctx context.Context, params ...CatalogListParams) (*ListCatalogItems200Response,error) { q:=r.client.CatalogAPI.ListCatalogItems(ctx); if len(params)>0 && params[0].Query!="" { q=q.Query(params[0].Query) }; v,_,e:=q.Execute(); return v,e }`,
 practices: `package affinity
import "context"
type PracticesResource struct { client *APIClient }
func (r *PracticesResource) List(ctx context.Context)(*ListPractices200Response,error){v,_,e:=r.client.PracticesAPI.ListPractices(ctx).Execute();return v,e}
func (r *PracticesResource) Retrieve(ctx context.Context,id string)(*CreatePractice200Response,error){v,_,e:=r.client.PracticesAPI.GetPractice(ctx,id).Execute();return v,e}
func (r *PracticesResource) Create(ctx context.Context,p CreatePracticeRequest,o MutationOptions)(*CreatePractice200Response,error){v,_,e:=r.client.PracticesAPI.CreatePractice(ctx).IdempotencyKey(o.IdempotencyKey).CreatePracticeRequest(p).Execute();return v,e}
func (r *PracticesResource) Update(ctx context.Context,id string,o MutationOptions)(*CreatePractice200Response,error){v,_,e:=r.client.PracticesAPI.UpdatePractice(ctx,id).IdempotencyKey(o.IdempotencyKey).Execute();return v,e}`,
 orders: `package affinity
import "context"
type OrdersResource struct { client *APIClient }
type OrderListParams struct { ExternalOrderID string; PatientExternalID string }
func (r *OrdersResource) List(ctx context.Context,p ...OrderListParams)(*ListOrders200Response,error){q:=r.client.PlatformOrdersAPI.ListOrders(ctx);if len(p)>0 {if p[0].ExternalOrderID!=""{q=q.ExternalOrderId(p[0].ExternalOrderID)};if p[0].PatientExternalID!=""{q=q.PatientExternalId(p[0].PatientExternalID)}};v,_,e:=q.Execute();return v,e}
func (r *OrdersResource) Retrieve(ctx context.Context,id string)(*CreateOrder200Response,error){v,_,e:=r.client.PlatformOrdersAPI.GetOrder(ctx,id).Execute();return v,e}
func (r *OrdersResource) Create(ctx context.Context,p CreateOrderRequest,o MutationOptions)(*CreateOrder200Response,error){v,_,e:=r.client.PlatformOrdersAPI.CreateOrder(ctx).IdempotencyKey(o.IdempotencyKey).CreateOrderRequest(p).Execute();return v,e}
func (r *OrdersResource) Update(ctx context.Context,id string,p UpdateOrderRequest,o MutationOptions)(*CreateOrder200Response,error){v,_,e:=r.client.PlatformOrdersAPI.UpdateOrder(ctx,id).IdempotencyKey(o.IdempotencyKey).UpdateOrderRequest(p).Execute();return v,e}
func (r *OrdersResource) Submit(ctx context.Context,id string,o MutationOptions)(*CreateOrder200Response,error){v,_,e:=r.client.PlatformOrdersAPI.SubmitOrder(ctx,id).IdempotencyKey(o.IdempotencyKey).Execute();return v,e}
func (r *OrdersResource) Cancel(ctx context.Context,id string,p CancelOrderRequest,o MutationOptions)(*CreateOrder200Response,error){v,_,e:=r.client.PlatformOrdersAPI.CancelOrder(ctx,id).IdempotencyKey(o.IdempotencyKey).CancelOrderRequest(p).Execute();return v,e}
func (r *OrdersResource) ListEvents(ctx context.Context,id string)(*ListOrderEvents200Response,error){v,_,e:=r.client.PlatformOrdersAPI.ListOrderEvents(ctx,id).Execute();return v,e}`,
 webhooks: `package affinity
import "context"
type WebhooksResource struct { client *APIClient }
func (r *WebhooksResource) ListEndpoints(ctx context.Context)(*ListWebhookEndpoints200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.ListWebhookEndpoints(ctx).Execute();return v,e}
func (r *WebhooksResource) CreateEndpoint(ctx context.Context,p CreateWebhookEndpointRequest,o MutationOptions)(*CreateWebhookEndpoint200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.CreateWebhookEndpoint(ctx).IdempotencyKey(o.IdempotencyKey).CreateWebhookEndpointRequest(p).Execute();return v,e}
func (r *WebhooksResource) UpdateEndpoint(ctx context.Context,id string,p UpdateWebhookEndpointRequest,o MutationOptions)(*DeleteWebhookEndpoint200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.UpdateWebhookEndpoint(ctx,id).IdempotencyKey(o.IdempotencyKey).UpdateWebhookEndpointRequest(p).Execute();return v,e}
func (r *WebhooksResource) DeleteEndpoint(ctx context.Context,id string,o MutationOptions)(*DeleteWebhookEndpoint200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.DeleteWebhookEndpoint(ctx,id).IdempotencyKey(o.IdempotencyKey).Execute();return v,e}
func (r *WebhooksResource) RotateSecret(ctx context.Context,id string,o MutationOptions)(*CreateWebhookEndpoint200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.RotateWebhookEndpointSecret(ctx,id).IdempotencyKey(o.IdempotencyKey).Execute();return v,e}
func (r *WebhooksResource) ListEvents(ctx context.Context)(*ListWebhookEvents200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.ListWebhookEvents(ctx).Execute();return v,e}
func (r *WebhooksResource) RetrieveEvent(ctx context.Context,id string)(*GetWebhookEvent200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.GetWebhookEvent(ctx,id).Execute();return v,e}
func (r *WebhooksResource) ReplayEvent(ctx context.Context,id string,o MutationOptions)(*ReplayWebhookEvent200Response,error){v,_,e:=r.client.PlatformWebhooksAPI.ReplayWebhookEvent(ctx,id).IdempotencyKey(o.IdempotencyKey).Execute();return v,e}`,
};
for (const [name, source] of Object.entries(goResources)) await output(`go/resource_${name}.go`, formatGo(`${generated("//")}\n${source}\n`));

await output("java/src/main/java/ai/joinaffinity/sdk/Affinity.java", `${generated("//")}
package ai.joinaffinity.sdk;
import ai.joinaffinity.sdk.resources.*;
import java.net.URI;
public final class Affinity {
  private final AccountResource account; private final CatalogResource catalog; private final OrdersResource orders; private final PracticesResource practices; private final WebhooksResource webhooks;
  public Affinity(String apiKey) { this(apiKey, new Options()); }
  public Affinity(String apiKey, Options options) {
    if (apiKey == null || apiKey.isBlank()) throw new IllegalArgumentException("Affinity requires a service API key");
    URI uri = URI.create(normalizeHost(options.host));
    String path = uri.getPath().isEmpty() ? "/" : uri.getPath();
    ApiClient client = new ApiClient().setScheme(uri.getScheme()).setHost(uri.getHost()).setPort(uri.getPort()).setBasePath(path);
    client.setRequestInterceptor(builder -> { builder.header("Authorization", "Bearer " + apiKey); builder.header("Affinity-Version", options.apiVersion); });
    account = new AccountResource(client); catalog = new CatalogResource(client); orders = new OrdersResource(client); practices = new PracticesResource(client); webhooks = new WebhooksResource(client);
  }
  public AccountResource account() { return account; } public CatalogResource catalog() { return catalog; } public OrdersResource orders() { return orders; } public PracticesResource practices() { return practices; } public WebhooksResource webhooks() { return webhooks; }
  private static String normalizeHost(String host) { String value = host.contains("://") ? host : "https://" + host; return value.replaceAll("/+$", ""); }
  public static final class Options { private String apiVersion = "${apiVersion}"; private String host = "${defaultHost}"; public Options apiVersion(String value) { apiVersion=value; return this; } public Options host(String value) { host=value; return this; } }
}
`);
await output("java/src/main/java/ai/joinaffinity/sdk/MutationOptions.java", `${generated("//")}
package ai.joinaffinity.sdk;
public final class MutationOptions {
  private final String idempotencyKey;
  public MutationOptions(String idempotencyKey) {
    if (idempotencyKey == null || idempotencyKey.isBlank()) throw new IllegalArgumentException("An idempotency key is required");
    this.idempotencyKey = idempotencyKey;
  }
  public String idempotencyKey() { return idempotencyKey; }
}
`);
const javaResources: Record<string, string> = {
 account: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class AccountResource { private final ApiKeysApi access; private final PlatformsApi platforms; public AccountResource(ApiClient c){access=new ApiKeysApi(c);platforms=new PlatformsApi(c);} public GetApiAccess200Response retrieveAccess() throws ApiException{return access.getApiAccess();} public GetPlatformOrganization200Response retrieve() throws ApiException{return platforms.getPlatformOrganization(null);} public GetPlatformOrganization200Response retrieve(String id)throws ApiException{return platforms.getPlatformOrganization(id);} }`,
 catalog: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class CatalogResource { private final CatalogApi api; public CatalogResource(ApiClient c){api=new CatalogApi(c);} public ListCatalogItems200Response list()throws ApiException{return api.listCatalogItems(null);} public ListCatalogItems200Response list(String query)throws ApiException{return api.listCatalogItems(query);} }`,
 practices: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class PracticesResource { private final PracticesApi api; public PracticesResource(ApiClient c){api=new PracticesApi(c);} public ListPractices200Response list()throws ApiException{return api.listPractices();} public CreatePractice200Response retrieve(String id)throws ApiException{return api.getPractice(id);} public CreatePractice200Response create(CreatePracticeRequest p,MutationOptions o)throws ApiException{return api.createPractice(o.idempotencyKey(),p);} public CreatePractice200Response update(String id,MutationOptions o)throws ApiException{return api.updatePractice(id,o.idempotencyKey());} }`,
 orders: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class OrdersResource { private final PlatformOrdersApi api; public OrdersResource(ApiClient c){api=new PlatformOrdersApi(c);} public ListOrders200Response list()throws ApiException{return api.listOrders(null,null);} public ListOrders200Response list(String externalId,String patientId)throws ApiException{return api.listOrders(externalId,patientId);} public CreateOrder200Response retrieve(String id)throws ApiException{return api.getOrder(id);} public CreateOrder200Response create(CreateOrderRequest p,MutationOptions o)throws ApiException{return api.createOrder(o.idempotencyKey(),p);} public CreateOrder200Response update(String id,UpdateOrderRequest p,MutationOptions o)throws ApiException{return api.updateOrder(id,o.idempotencyKey(),p);} public CreateOrder200Response submit(String id,MutationOptions o)throws ApiException{return api.submitOrder(id,o.idempotencyKey());} public CreateOrder200Response cancel(String id,CancelOrderRequest p,MutationOptions o)throws ApiException{return api.cancelOrder(id,o.idempotencyKey(),p);} public ListOrderEvents200Response listEvents(String id)throws ApiException{return api.listOrderEvents(id);} }`,
 webhooks: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class WebhooksResource { private final PlatformWebhooksApi api; public WebhooksResource(ApiClient c){api=new PlatformWebhooksApi(c);} public ListWebhookEndpoints200Response listEndpoints()throws ApiException{return api.listWebhookEndpoints();} public CreateWebhookEndpoint200Response createEndpoint(CreateWebhookEndpointRequest p,MutationOptions o)throws ApiException{return api.createWebhookEndpoint(o.idempotencyKey(),p);} public DeleteWebhookEndpoint200Response updateEndpoint(String id,UpdateWebhookEndpointRequest p,MutationOptions o)throws ApiException{return api.updateWebhookEndpoint(id,o.idempotencyKey(),p);} public DeleteWebhookEndpoint200Response deleteEndpoint(String id,MutationOptions o)throws ApiException{return api.deleteWebhookEndpoint(id,o.idempotencyKey());} public CreateWebhookEndpoint200Response rotateSecret(String id,MutationOptions o)throws ApiException{return api.rotateWebhookEndpointSecret(id,o.idempotencyKey());} public ListWebhookEvents200Response listEvents()throws ApiException{return api.listWebhookEvents();} public GetWebhookEvent200Response retrieveEvent(String id)throws ApiException{return api.getWebhookEvent(id);} public ReplayWebhookEvent200Response replayEvent(String id,MutationOptions o)throws ApiException{return api.replayWebhookEvent(id,o.idempotencyKey());} }`,
};
for (const [name, source] of Object.entries(javaResources)) await output(`java/src/main/java/ai/joinaffinity/sdk/resources/${name[0]!.toUpperCase()}${name.slice(1)}Resource.java`, `${generated("//")}\n${source}\n`);

const resourceMethods: Record<string, string[]> = {
  account: ["retrieveAccess", "retrieve"],
  catalog: ["list"],
  practices: ["list", "retrieve", "create", "update"],
  orders: ["list", "retrieve", "create", "update", "submit", "cancel", "listEvents"],
  webhooks: ["listEndpoints", "createEndpoint", "updateEndpoint", "deleteEndpoint", "rotateSecret", "listEvents", "retrieveEvent", "replayEvent"],
};
for (const [resource, methods] of Object.entries(resourceMethods)) {
  const title = `${resource[0]!.toUpperCase()}${resource.slice(1)}`;
  await output(`docs/resources/${resource}.md`, `<!-- Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT. -->
# ${title}

Access this product through the shared authenticated client. The facade delegates to the generated
OpenAPI transport while keeping transport-class names out of application code.

## Methods

${methods.map((method) => `- \`${method}()\``).join("\n")}

## Examples

\`\`\`ts
const result = await affinity.${resource}.${methods[0]}();
\`\`\`

\`\`\`python
result = affinity.${resource}.${camelToSnake(methods[0]!)}()
\`\`\`

\`\`\`go
result, err := affinityClient.${title}.${methods[0]![0]!.toUpperCase()}${methods[0]!.slice(1)}(ctx)
\`\`\`

\`\`\`java
var result = affinity.${resource}().${methods[0]}();
\`\`\`

Mutation methods additionally require an idempotency key. Consult the generated model types for the
request and response fields accepted by the current dated API contract.
`);
}

function camelToSnake(value: string) {
  return value.replace(/[A-Z]/g, (character) => `_${character.toLowerCase()}`);
}

if (drifted.length) throw new Error(`Generated facades are stale:\n${drifted.join("\n")}`);
console.log(`${checkOnly ? "Verified" : "Generated"} Affinity facades for ${operationIds.length} OpenAPI operations.`);
