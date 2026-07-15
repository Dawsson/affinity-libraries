import {
  APIKeysApi,
  CatalogApi,
  Configuration,
  PlatformOrdersApi,
  PlatformWebhooksApi,
  PlatformsApi,
  PracticesApi,
} from "../../typescript";

const apiKey = process.env.AFFINITY_API_KEY;
if (!apiKey) throw new Error("Set AFFINITY_API_KEY to a test-mode service key");

const configuration = new Configuration({
  accessToken: apiKey,
  headers: { "Affinity-Version": "2026-07-09" },
});

const accessApi = new APIKeysApi(configuration);
const catalogApi = new CatalogApi(configuration);
const ordersApi = new PlatformOrdersApi(configuration);
const platformApi = new PlatformsApi(configuration);
const practicesApi = new PracticesApi(configuration);
const webhooksApi = new PlatformWebhooksApi(configuration);

async function main() {
  // Start every integration by confirming which account and environment the key can access.
  const access = await accessApi.getApiAccess();
  console.log("Authenticated", {
    livemode: access.livemode,
    scopes: access.scopes,
    serviceAccount: access.serviceAccount,
  });

  if (access.livemode) {
    throw new Error("This quickstart only runs with a test-mode service key");
  }
  if (!access.scopes.includes("catalog:read")) {
    throw new Error("The service key needs the catalog:read scope");
  }

  const [organization, catalog, practices, orders, webhooks] = await Promise.all([
    platformApi.getPlatformOrganization(),
    catalogApi.listCatalogItems({ query: "semaglutide" }),
    practicesApi.listPractices(),
    ordersApi.listOrders(),
    webhooksApi.listWebhookEndpoints(),
  ]);

  console.log("Organization", organization.account);
  console.log(`Found ${catalog.items.length} matching sandbox catalog items`);
  for (const item of catalog.items.slice(0, 3)) console.log("Catalog item", item);

  console.log(`Found ${practices.data.length} practices`);
  for (const practice of practices.data) console.log("Practice", practice);

  console.log(`Found ${orders.orders.length} sandbox orders`);
  for (const order of orders.orders.slice(0, 5)) console.log("Order", order);

  console.log(`Found ${webhooks.endpoints.length} test webhook endpoints`);
  console.log("The SDK is authenticated and ready for sandbox integration work.");
}

main().catch((error: unknown) => {
  console.error("Affinity quickstart failed", error);
  process.exitCode = 1;
});
