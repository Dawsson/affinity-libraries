import os
import sys

import affinity_sdk


def main() -> None:
    api_key = os.environ.get("AFFINITY_API_KEY")
    if not api_key:
        raise RuntimeError("Set AFFINITY_API_KEY to a test-mode service key")

    configuration = affinity_sdk.Configuration(access_token=api_key)

    with affinity_sdk.ApiClient(configuration) as client:
        client.add_default_header("Affinity-Version", "2026-07-09")

        access_api = affinity_sdk.APIKeysApi(client)
        catalog_api = affinity_sdk.CatalogApi(client)
        orders_api = affinity_sdk.PlatformOrdersApi(client)
        platform_api = affinity_sdk.PlatformsApi(client)
        practices_api = affinity_sdk.PracticesApi(client)
        webhooks_api = affinity_sdk.PlatformWebhooksApi(client)

        # Confirm the key's account, environment, and scopes before reading resources.
        access = access_api.get_api_access()
        print("Authenticated", {
            "livemode": access.livemode,
            "scopes": access.scopes,
            "service_account": access.service_account,
        })

        if access.livemode:
            raise RuntimeError("This quickstart only runs with a test-mode service key")
        if "catalog:read" not in access.scopes:
            raise RuntimeError("The service key needs the catalog:read scope")

        organization = platform_api.get_platform_organization()
        catalog = catalog_api.list_catalog_items(query="semaglutide")
        practices = practices_api.list_practices()
        orders = orders_api.list_orders()
        webhooks = webhooks_api.list_webhook_endpoints()

        print("Organization", organization.account)
        print(f"Found {len(catalog.items)} matching sandbox catalog items")
        for item in catalog.items[:3]:
            print("Catalog item", item)

        print(f"Found {len(practices.data)} practices")
        for practice in practices.data:
            print("Practice", practice)

        print(f"Found {len(orders.orders)} sandbox orders")
        for order in orders.orders[:5]:
            print("Order", order)

        print(f"Found {len(webhooks.endpoints)} test webhook endpoints")
        print("The SDK is authenticated and ready for sandbox integration work.")


if __name__ == "__main__":
    try:
        main()
    except affinity_sdk.ApiException as error:
        print(f"Affinity API request failed: {error}", file=sys.stderr)
        raise SystemExit(1) from error
