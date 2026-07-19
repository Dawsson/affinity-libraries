import { Affinity } from "../../typescript";

const apiKey = process.env.AFFINITY_API_KEY;
if (!apiKey) throw new Error("Set AFFINITY_API_KEY to a test-mode service key");

const affinity = new Affinity(apiKey, {
  apiVersion: "2026-07-19",
  host: "api.joinaffinityai.com",
});

async function main() {
  // Start every integration by confirming which account and environment the key can access.
  const access = await affinity.account.retrieveAccess();
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
    affinity.account.retrieve(),
    affinity.catalog.list({ query: "semaglutide" }),
    affinity.practices.list(),
    affinity.orders.list(),
    affinity.webhooks.listEndpoints(),
  ]);

  console.log("Organization", organization.account);
  console.log(`Found ${catalog.data.length} matching sandbox catalog items`);
  for (const item of catalog.data.slice(0, 3)) console.log("Catalog item", item);

  console.log(`Found ${practices.data.length} practices`);
  for (const practice of practices.data) console.log("Practice", practice);

  console.log(`Found ${orders.data.length} sandbox orders`);
  for (const order of orders.data.slice(0, 5)) console.log("Order", order);

  console.log(`Found ${webhooks.data.length} test webhook endpoints`);
  console.log("The SDK is authenticated and ready for sandbox integration work.");
}

main().catch((error: unknown) => {
  console.error("Affinity quickstart failed", error);
  process.exitCode = 1;
});
