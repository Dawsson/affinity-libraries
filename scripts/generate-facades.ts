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
  "deleteWebhookEndpoint", "getAccount", "getApiAccess", "getOrder",
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
  retrieve(organizationId?: string) { return this.platformsApi.getAccount({ orgId: organizationId }); }
}`,
  catalog: `import type { CatalogApi } from "../apis/CatalogApi";
export interface CatalogListParams { query?: string; }
export class CatalogResource {
  constructor(private readonly api: CatalogApi) {}
  list(params: CatalogListParams = {}) { return this.api.listCatalogItems(params); }
}`,
  practices: `import type { PracticesApi } from "../apis/PracticesApi";
import type { CreatePracticeRequest } from "../models/CreatePracticeRequest";
import type { UpdatePracticeRequest } from "../models/UpdatePracticeRequest";
import { idempotencyKey, type MutationOptions } from "./request-options";
export class PracticesResource {
  constructor(private readonly api: PracticesApi) {}
  list(params: { limit?: number; startingAfter?: string; endingBefore?: string } = {}) { return this.api.listPractices(params); }
  retrieve(practiceId: string) { return this.api.getPractice({ practiceId }); }
  create(params: CreatePracticeRequest, options: MutationOptions = {}) { return this.api.createPractice({ createPracticeRequest: params, idempotencyKey: idempotencyKey(options) }); }
  update(practiceId: string, params: UpdatePracticeRequest, options: MutationOptions = {}) { return this.api.updatePractice({ practiceId, updatePracticeRequest: params, idempotencyKey: idempotencyKey(options) }); }
}`,
  orders: `import type { ListOrdersStatusEnum, PlatformOrdersApi } from "../apis/PlatformOrdersApi";
import type { CancelOrderRequest } from "../models/CancelOrderRequest";
import type { CreateOrderRequest } from "../models/CreateOrderRequest";
import type { UpdateOrderRequest } from "../models/UpdateOrderRequest";
import type { CreateOrderRequestAnyOf } from "../models/CreateOrderRequestAnyOf";
import type { CreateOrderRequestAnyOf1 } from "../models/CreateOrderRequestAnyOf1";
import { idempotencyKey, type MutationOptions } from "./request-options";
export interface OrderListParams { externalOrderId?: string; patientExternalId?: string; practiceId?: string; status?: ListOrdersStatusEnum; limit?: number; startingAfter?: string; endingBefore?: string; }
export class OrdersResource {
  constructor(private readonly api: PlatformOrdersApi) {}
  list(params: OrderListParams = {}) { return this.api.listOrders(params); }
  retrieve(orderId: string) { return this.api.getOrder({ orderId }); }
  createTestDraft(params: CreateOrderRequestAnyOf, options: MutationOptions = {}) { return this.api.createOrder({ createOrderRequest: params as CreateOrderRequest, idempotencyKey: idempotencyKey(options) }); }
  releasePrescription(params: CreateOrderRequestAnyOf1, options: MutationOptions = {}) { return this.api.createOrder({ createOrderRequest: params as CreateOrderRequest, idempotencyKey: idempotencyKey(options) }); }
  update(orderId: string, params: UpdateOrderRequest, options: MutationOptions = {}) { return this.api.updateOrder({ orderId, updateOrderRequest: params, idempotencyKey: idempotencyKey(options) }); }
  submit(orderId: string, options: MutationOptions = {}) { return this.api.submitOrder({ orderId, idempotencyKey: idempotencyKey(options) }); }
  cancel(orderId: string, params: CancelOrderRequest, options: MutationOptions = {}) { return this.api.cancelOrder({ orderId, cancelOrderRequest: params, idempotencyKey: idempotencyKey(options) }); }
  listEvents(orderId: string) { return this.api.listOrderEvents({ orderId }); }
}`,
  webhooks: `import type { PlatformWebhooksApi } from "../apis/PlatformWebhooksApi";
import type { CreateWebhookEndpointRequest } from "../models/CreateWebhookEndpointRequest";
import type { UpdateWebhookEndpointRequest } from "../models/UpdateWebhookEndpointRequest";
import { idempotencyKey, type MutationOptions } from "./request-options";
export class WebhooksResource {
  constructor(private readonly api: PlatformWebhooksApi) {}
  listEndpoints() { return this.api.listWebhookEndpoints(); }
  createEndpoint(params: CreateWebhookEndpointRequest, options: MutationOptions = {}) { return this.api.createWebhookEndpoint({ createWebhookEndpointRequest: params, idempotencyKey: idempotencyKey(options) }); }
  updateEndpoint(endpointId: string, params: UpdateWebhookEndpointRequest, options: MutationOptions = {}) { return this.api.updateWebhookEndpoint({ endpointId, updateWebhookEndpointRequest: params, idempotencyKey: idempotencyKey(options) }); }
  deleteEndpoint(endpointId: string, options: MutationOptions = {}) { return this.api.deleteWebhookEndpoint({ endpointId, idempotencyKey: idempotencyKey(options) }); }
  rotateSecret(endpointId: string, options: MutationOptions = {}) { return this.api.rotateWebhookEndpointSecret({ endpointId, idempotencyKey: idempotencyKey(options) }); }
  listEvents() { return this.api.listWebhookEvents(); }
  retrieveEvent(eventId: string) { return this.api.getWebhookEvent({ eventId }); }
  replayEvent(eventId: string, options: MutationOptions = {}) { return this.api.replayWebhookEvent({ eventId, idempotencyKey: idempotencyKey(options) }); }
  async constructEvent(payload: string, signature: string, secret: string, toleranceSeconds = 300) {
    const parts: Record<string, string> = {};
    for (const part of signature.split(",")) { const separator = part.indexOf("="); if (separator > 0) parts[part.slice(0, separator)] = part.slice(separator + 1); }
    const timestamp = Number(parts.t);
    if (!Number.isFinite(timestamp) || !parts.v1) throw new Error("Invalid Affinity-Signature header");
    if (Math.abs(Date.now() / 1000 - timestamp) > toleranceSeconds) throw new Error("Webhook signature timestamp is outside the tolerance window");
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const digest = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(String(timestamp) + "." + payload)));
    const expected = Array.from(digest, (byte) => (byte + 256).toString(16).slice(1)).join("");
    if (expected.length !== parts.v1.length || !Array.from(expected).every((value, index) => value === parts.v1![index])) throw new Error("Webhook signature verification failed");
    return JSON.parse(payload) as unknown;
  }
}`,
  "request-options": `export interface MutationOptions { idempotencyKey?: string; }
export function idempotencyKey(options: MutationOptions = {}) { return options.idempotencyKey ?? crypto.randomUUID(); }`,
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
    def retrieve(self, organization_id=None): return self._platforms.get_account(org_id=organization_id)`,
  catalog: `from affinity_sdk.api.catalog_api import CatalogApi
class CatalogResource:
    def __init__(self, client): self._api = CatalogApi(client)
    def list(self, *, query=None): return self._api.list_catalog_items(query=query)`,
  practices: `from uuid import uuid4
from affinity_sdk.api.practices_api import PracticesApi
class PracticesResource:
    def __init__(self, client): self._api = PracticesApi(client)
    def list(self): return self._api.list_practices()
    def retrieve(self, practice_id): return self._api.get_practice(practice_id=practice_id)
    def create(self, params, *, idempotency_key=None): return self._api.create_practice(idempotency_key=idempotency_key or str(uuid4()), create_practice_request=params)
    def update(self, practice_id, params, *, idempotency_key=None): return self._api.update_practice(practice_id=practice_id, idempotency_key=idempotency_key or str(uuid4()), update_practice_request=params)`,
  orders: `from uuid import uuid4
from affinity_sdk.api.platform_orders_api import PlatformOrdersApi
class OrdersResource:
    def __init__(self, client): self._api = PlatformOrdersApi(client)
    def list(self, *, external_order_id=None, patient_external_id=None): return self._api.list_orders(external_order_id=external_order_id, patient_external_id=patient_external_id)
    def retrieve(self, order_id): return self._api.get_order(order_id=order_id)
    def create_test_draft(self, params, *, idempotency_key=None): return self._api.create_order(idempotency_key=idempotency_key or str(uuid4()), create_order_request=params)
    def release_prescription(self, params, *, idempotency_key=None): return self._api.create_order(idempotency_key=idempotency_key or str(uuid4()), create_order_request=params)
    def update(self, order_id, params, *, idempotency_key=None): return self._api.update_order(order_id=order_id, idempotency_key=idempotency_key or str(uuid4()), update_order_request=params)
    def submit(self, order_id, *, idempotency_key=None): return self._api.submit_order(order_id=order_id, idempotency_key=idempotency_key or str(uuid4()))
    def cancel(self, order_id, params, *, idempotency_key=None): return self._api.cancel_order(order_id=order_id, idempotency_key=idempotency_key or str(uuid4()), cancel_order_request=params)
    def list_events(self, order_id): return self._api.list_order_events(order_id=order_id)`,
  webhooks: `import hashlib, hmac, json, time
from uuid import uuid4
from affinity_sdk.api.platform_webhooks_api import PlatformWebhooksApi
class WebhooksResource:
    def __init__(self, client): self._api = PlatformWebhooksApi(client)
    def list_endpoints(self): return self._api.list_webhook_endpoints()
    def create_endpoint(self, params, *, idempotency_key=None): return self._api.create_webhook_endpoint(idempotency_key=idempotency_key or str(uuid4()), create_webhook_endpoint_request=params)
    def update_endpoint(self, endpoint_id, params, *, idempotency_key=None): return self._api.update_webhook_endpoint(endpoint_id=endpoint_id, idempotency_key=idempotency_key or str(uuid4()), update_webhook_endpoint_request=params)
    def delete_endpoint(self, endpoint_id, *, idempotency_key=None): return self._api.delete_webhook_endpoint(endpoint_id=endpoint_id, idempotency_key=idempotency_key or str(uuid4()))
    def rotate_secret(self, endpoint_id, *, idempotency_key=None): return self._api.rotate_webhook_endpoint_secret(endpoint_id=endpoint_id, idempotency_key=idempotency_key or str(uuid4()))
    def list_events(self): return self._api.list_webhook_events()
    def retrieve_event(self, event_id): return self._api.get_webhook_event(event_id=event_id)
    def replay_event(self, event_id, *, idempotency_key=None): return self._api.replay_webhook_event(event_id=event_id, idempotency_key=idempotency_key or str(uuid4()))
    def construct_event(self, payload, signature, secret, tolerance_seconds=300):
        parts = dict(part.split("=", 1) for part in signature.split(","))
        timestamp = int(parts["t"])
        if abs(time.time() - timestamp) > tolerance_seconds: raise ValueError("Webhook signature timestamp is outside the tolerance window")
        expected = hmac.new(secret.encode(), f"{timestamp}.{payload}".encode(), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(expected, parts["v1"]): raise ValueError("Webhook signature verification failed")
        return json.loads(payload)`,
};
await output("python/affinity_sdk/resources/__init__.py", `${generated("#")}\n`);
for (const [name, source] of Object.entries(pyResources)) {
  await output(`python/affinity_sdk/resources/${name}.py`, `${generated("#")}\n${source}\n`);
}
await patchExports("python/affinity_sdk/__init__.py", "#", `from affinity_sdk.affinity import Affinity`);

await output("go/affinity.go", formatGo(`${generated("//")}
package affinity
import ("crypto/rand"; "encoding/hex"; "net/http"; "strings")
type ClientOptions struct { APIVersion string; Host string; HTTPClient *http.Client }
type MutationOptions struct { IdempotencyKey string }
func idempotencyKey(options ...MutationOptions) string { if len(options)>0 && options[0].IdempotencyKey!="" { return options[0].IdempotencyKey }; value:=make([]byte,16); if _,err:=rand.Read(value);err!=nil{panic("affinity: could not generate idempotency key")}; return hex.EncodeToString(value) }
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
func (r *AccountResource) RetrieveAccess(ctx context.Context) (*GetApiAccessResponse, error) { v, _, e := r.client.APIKeysAPI.GetApiAccess(ctx).Execute(); return v, e }
func (r *AccountResource) Retrieve(ctx context.Context, organizationID ...string) (*GetAccountResponse, error) { q := r.client.PlatformsAPI.GetAccount(ctx); if len(organizationID)>0 { q=q.OrgId(organizationID[0]) }; v,_,e:=q.Execute(); return v,e }`,
 catalog: `package affinity
import "context"
type CatalogResource struct { client *APIClient }
type CatalogListParams struct { Query string }
func (r *CatalogResource) List(ctx context.Context, params ...CatalogListParams) (*ListCatalogItemsResponse,error) { q:=r.client.CatalogAPI.ListCatalogItems(ctx); if len(params)>0 && params[0].Query!="" { q=q.Query(params[0].Query) }; v,_,e:=q.Execute(); return v,e }`,
 practices: `package affinity
import "context"
type PracticesResource struct { client *APIClient }
func (r *PracticesResource) List(ctx context.Context)(*ListPracticesResponse,error){v,_,e:=r.client.PracticesAPI.ListPractices(ctx).Execute();return v,e}
func (r *PracticesResource) Retrieve(ctx context.Context,id string)(*GetPracticeResponse,error){v,_,e:=r.client.PracticesAPI.GetPractice(ctx,id).Execute();return v,e}
func (r *PracticesResource) Create(ctx context.Context,p CreatePracticeRequest,o ...MutationOptions)(*CreatePracticeResponse,error){v,_,e:=r.client.PracticesAPI.CreatePractice(ctx).IdempotencyKey(idempotencyKey(o...)).CreatePracticeRequest(p).Execute();return v,e}
func (r *PracticesResource) Update(ctx context.Context,id string,p UpdatePracticeRequest,o ...MutationOptions)(*UpdatePracticeResponse,error){v,_,e:=r.client.PracticesAPI.UpdatePractice(ctx,id).IdempotencyKey(idempotencyKey(o...)).UpdatePracticeRequest(p).Execute();return v,e}`,
 orders: `package affinity
import "context"
type OrdersResource struct { client *APIClient }
type OrderListParams struct { ExternalOrderID string; PatientExternalID string }
func (r *OrdersResource) List(ctx context.Context,p ...OrderListParams)(*ListOrdersResponse,error){q:=r.client.PlatformOrdersAPI.ListOrders(ctx);if len(p)>0 {if p[0].ExternalOrderID!=""{q=q.ExternalOrderId(p[0].ExternalOrderID)};if p[0].PatientExternalID!=""{q=q.PatientExternalId(p[0].PatientExternalID)}};v,_,e:=q.Execute();return v,e}
func (r *OrdersResource) Retrieve(ctx context.Context,id string)(*GetOrderResponse,error){v,_,e:=r.client.PlatformOrdersAPI.GetOrder(ctx,id).Execute();return v,e}
func (r *OrdersResource) CreateTestDraft(ctx context.Context,p CreateOrderRequestAnyOf,o ...MutationOptions)(*CreateOrderResponse,error){body:=CreateOrderRequest{CreateOrderRequestAnyOf:&p};v,_,e:=r.client.PlatformOrdersAPI.CreateOrder(ctx).IdempotencyKey(idempotencyKey(o...)).CreateOrderRequest(body).Execute();return v,e}
func (r *OrdersResource) ReleasePrescription(ctx context.Context,p CreateOrderRequestAnyOf1,o ...MutationOptions)(*CreateOrderResponse,error){body:=CreateOrderRequest{CreateOrderRequestAnyOf1:&p};v,_,e:=r.client.PlatformOrdersAPI.CreateOrder(ctx).IdempotencyKey(idempotencyKey(o...)).CreateOrderRequest(body).Execute();return v,e}
func (r *OrdersResource) Update(ctx context.Context,id string,p UpdateOrderRequest,o ...MutationOptions)(*UpdateOrderResponse,error){v,_,e:=r.client.PlatformOrdersAPI.UpdateOrder(ctx,id).IdempotencyKey(idempotencyKey(o...)).UpdateOrderRequest(p).Execute();return v,e}
func (r *OrdersResource) Submit(ctx context.Context,id string,o ...MutationOptions)(*SubmitOrderResponse,error){v,_,e:=r.client.PlatformOrdersAPI.SubmitOrder(ctx,id).IdempotencyKey(idempotencyKey(o...)).Execute();return v,e}
func (r *OrdersResource) Cancel(ctx context.Context,id string,p CancelOrderRequest,o ...MutationOptions)(*CancelOrderResponse,error){v,_,e:=r.client.PlatformOrdersAPI.CancelOrder(ctx,id).IdempotencyKey(idempotencyKey(o...)).CancelOrderRequest(p).Execute();return v,e}
func (r *OrdersResource) ListEvents(ctx context.Context,id string)(*ListOrderEventsResponse,error){v,_,e:=r.client.PlatformOrdersAPI.ListOrderEvents(ctx,id).Execute();return v,e}`,
 webhooks: `package affinity
import ("context"; "crypto/hmac"; "crypto/sha256"; "encoding/hex"; "encoding/json"; "errors"; "strconv"; "strings"; "time")
type WebhooksResource struct { client *APIClient }
func (r *WebhooksResource) ListEndpoints(ctx context.Context)(*ListWebhookEndpointsResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.ListWebhookEndpoints(ctx).Execute();return v,e}
func (r *WebhooksResource) CreateEndpoint(ctx context.Context,p CreateWebhookEndpointRequest,o ...MutationOptions)(*CreateWebhookEndpointResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.CreateWebhookEndpoint(ctx).IdempotencyKey(idempotencyKey(o...)).CreateWebhookEndpointRequest(p).Execute();return v,e}
func (r *WebhooksResource) UpdateEndpoint(ctx context.Context,id string,p UpdateWebhookEndpointRequest,o ...MutationOptions)(*UpdateWebhookEndpointResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.UpdateWebhookEndpoint(ctx,id).IdempotencyKey(idempotencyKey(o...)).UpdateWebhookEndpointRequest(p).Execute();return v,e}
func (r *WebhooksResource) DeleteEndpoint(ctx context.Context,id string,o ...MutationOptions)(*DeleteWebhookEndpointResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.DeleteWebhookEndpoint(ctx,id).IdempotencyKey(idempotencyKey(o...)).Execute();return v,e}
func (r *WebhooksResource) RotateSecret(ctx context.Context,id string,o ...MutationOptions)(*RotateWebhookEndpointSecretResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.RotateWebhookEndpointSecret(ctx,id).IdempotencyKey(idempotencyKey(o...)).Execute();return v,e}
func (r *WebhooksResource) ListEvents(ctx context.Context)(*ListWebhookEventsResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.ListWebhookEvents(ctx).Execute();return v,e}
func (r *WebhooksResource) RetrieveEvent(ctx context.Context,id string)(*GetWebhookEventResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.GetWebhookEvent(ctx,id).Execute();return v,e}
func (r *WebhooksResource) ReplayEvent(ctx context.Context,id string,o ...MutationOptions)(*ReplayWebhookEventResponse,error){v,_,e:=r.client.PlatformWebhooksAPI.ReplayWebhookEvent(ctx,id).IdempotencyKey(idempotencyKey(o...)).Execute();return v,e}
func (r *WebhooksResource) ConstructEvent(payload []byte,signature,secret string,tolerance time.Duration)(map[string]any,error){parts:=map[string]string{};for _,part:=range strings.Split(signature,","){pair:=strings.SplitN(part,"=",2);if len(pair)==2{parts[pair[0]]=pair[1]}};timestamp,err:=strconv.ParseInt(parts["t"],10,64);if err!=nil{return nil,errors.New("invalid Affinity-Signature header")};if tolerance==0{tolerance=5*time.Minute};age:=time.Since(time.Unix(timestamp,0));if age < -tolerance || age > tolerance{return nil,errors.New("webhook signature timestamp is outside the tolerance window")};mac:=hmac.New(sha256.New,[]byte(secret));mac.Write([]byte(strconv.FormatInt(timestamp,10)+"."));mac.Write(payload);supplied,err:=hex.DecodeString(parts["v1"]);if err!=nil || !hmac.Equal(mac.Sum(nil),supplied){return nil,errors.New("webhook signature verification failed")};event:=map[string]any{};if err:=json.Unmarshal(payload,&event);err!=nil{return nil,err};return event,nil}`,
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
import java.util.UUID;
public final class MutationOptions {
  private final String idempotencyKey;
  public MutationOptions() { this(UUID.randomUUID().toString()); }
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
public final class AccountResource { private final ApiKeysApi access; private final PlatformsApi platforms; public AccountResource(ApiClient c){access=new ApiKeysApi(c);platforms=new PlatformsApi(c);} public GetApiAccessResponse retrieveAccess() throws ApiException{return access.getApiAccess();} public GetAccountResponse retrieve() throws ApiException{return platforms.getAccount(null);} public GetAccountResponse retrieve(String id)throws ApiException{return platforms.getAccount(id);} }`,
 catalog: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class CatalogResource { private final CatalogApi api; public CatalogResource(ApiClient c){api=new CatalogApi(c);} public ListCatalogItemsResponse list()throws ApiException{return api.listCatalogItems(null,null,null,null,null);} public ListCatalogItemsResponse list(String query)throws ApiException{return api.listCatalogItems(query,null,null,null,null);} }`,
 practices: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class PracticesResource { private final PracticesApi api; public PracticesResource(ApiClient c){api=new PracticesApi(c);} public ListPracticesResponse list()throws ApiException{return api.listPractices(null,null,null);} public GetPracticeResponse retrieve(String id)throws ApiException{return api.getPractice(id);} public CreatePracticeResponse create(CreatePracticeRequest p)throws ApiException{return create(p,new MutationOptions());} public CreatePracticeResponse create(CreatePracticeRequest p,MutationOptions o)throws ApiException{return api.createPractice(p,o.idempotencyKey());} public UpdatePracticeResponse update(String id,UpdatePracticeRequest p)throws ApiException{return update(id,p,new MutationOptions());} public UpdatePracticeResponse update(String id,UpdatePracticeRequest p,MutationOptions o)throws ApiException{return api.updatePractice(id,p,o.idempotencyKey());} }`,
 orders: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class OrdersResource { private final PlatformOrdersApi api; public OrdersResource(ApiClient c){api=new PlatformOrdersApi(c);} public ListOrdersResponse list()throws ApiException{return api.listOrders(null,null,null,null,null,null,null);} public GetOrderResponse retrieve(String id)throws ApiException{return api.getOrder(id);} public CreateOrderResponse createTestDraft(CreateOrderRequestAnyOf p)throws ApiException{return api.createOrder(new CreateOrderRequest(p),new MutationOptions().idempotencyKey());} public CreateOrderResponse releasePrescription(CreateOrderRequestAnyOf1 p)throws ApiException{return api.createOrder(new CreateOrderRequest(p),new MutationOptions().idempotencyKey());} public UpdateOrderResponse update(String id,UpdateOrderRequest p)throws ApiException{return api.updateOrder(id,p,new MutationOptions().idempotencyKey());} public SubmitOrderResponse submit(String id)throws ApiException{return api.submitOrder(id,new MutationOptions().idempotencyKey());} public CancelOrderResponse cancel(String id,CancelOrderRequest p)throws ApiException{return api.cancelOrder(id,p,new MutationOptions().idempotencyKey());} public ListOrderEventsResponse listEvents(String id)throws ApiException{return api.listOrderEvents(id,null,null,null);} }`,
 webhooks: `package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*; import java.nio.charset.StandardCharsets; import java.security.MessageDigest; import java.time.Instant; import java.util.*; import javax.crypto.Mac; import javax.crypto.spec.SecretKeySpec;
public final class WebhooksResource { private final PlatformWebhooksApi api; public WebhooksResource(ApiClient c){api=new PlatformWebhooksApi(c);} public ListWebhookEndpointsResponse listEndpoints()throws ApiException{return api.listWebhookEndpoints(null,null,null);} public CreateWebhookEndpointResponse createEndpoint(CreateWebhookEndpointRequest p)throws ApiException{return api.createWebhookEndpoint(p,new MutationOptions().idempotencyKey());} public UpdateWebhookEndpointResponse updateEndpoint(String id,UpdateWebhookEndpointRequest p)throws ApiException{return api.updateWebhookEndpoint(id,p,new MutationOptions().idempotencyKey());} public DeleteWebhookEndpointResponse deleteEndpoint(String id)throws ApiException{return api.deleteWebhookEndpoint(id,new MutationOptions().idempotencyKey());} public RotateWebhookEndpointSecretResponse rotateSecret(String id)throws ApiException{return api.rotateWebhookEndpointSecret(id,new MutationOptions().idempotencyKey());} public ListWebhookEventsResponse listEvents()throws ApiException{return api.listWebhookEvents(null,null,null,null);} public GetWebhookEventResponse retrieveEvent(String id)throws ApiException{return api.getWebhookEvent(id);} public ReplayWebhookEventResponse replayEvent(String id)throws ApiException{return api.replayWebhookEvent(id,new MutationOptions().idempotencyKey());} public String constructEvent(String payload,String signature,String secret)throws Exception{return constructEvent(payload,signature,secret,300);} public String constructEvent(String payload,String signature,String secret,long toleranceSeconds)throws Exception{Map<String,String> parts=new HashMap<>();for(String part:signature.split(",")){String[] pair=part.split("=",2);if(pair.length==2)parts.put(pair[0],pair[1]);}long timestamp=Long.parseLong(parts.get("t"));if(Math.abs(Instant.now().getEpochSecond()-timestamp)>toleranceSeconds)throw new SecurityException("Webhook signature timestamp is outside the tolerance window");Mac mac=Mac.getInstance("HmacSHA256");mac.init(new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8),"HmacSHA256"));byte[] expected=mac.doFinal((timestamp+"."+payload).getBytes(StandardCharsets.UTF_8));String hex=parts.get("v1");byte[] supplied=new byte[hex.length()/2];for(int i=0;i<supplied.length;i++)supplied[i]=(byte)((Character.digit(hex.charAt(i*2),16)<<4)+Character.digit(hex.charAt(i*2+1),16));if(!MessageDigest.isEqual(expected,supplied))throw new SecurityException("Webhook signature verification failed");return payload;} }`,
};
for (const [name, source] of Object.entries(javaResources)) await output(`java/src/main/java/ai/joinaffinity/sdk/resources/${name[0]!.toUpperCase()}${name.slice(1)}Resource.java`, `${generated("//")}\n${source}\n`);

const resourceMethods: Record<string, string[]> = {
  account: ["retrieveAccess", "retrieve"],
  catalog: ["list"],
  practices: ["list", "retrieve", "create", "update"],
  orders: ["list", "retrieve", "createTestDraft", "releasePrescription", "update", "submit", "cancel", "listEvents"],
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

Mutation methods generate an idempotency key automatically. Pass one through mutation options only
when retrying the same logical request. Consult the generated model types for current fields.
`);
}

function camelToSnake(value: string) {
  return value.replace(/[A-Z]/g, (character) => `_${character.toLowerCase()}`);
}

if (drifted.length) throw new Error(`Generated facades are stale:\n${drifted.join("\n")}`);
console.log(`${checkOnly ? "Verified" : "Generated"} Affinity facades for ${operationIds.length} OpenAPI operations.`);
