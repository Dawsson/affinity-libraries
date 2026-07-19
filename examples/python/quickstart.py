import os
import sys

import affinity_sdk


def main() -> None:
    api_key = os.environ.get("AFFINITY_API_KEY")
    if not api_key:
        raise RuntimeError("Set AFFINITY_API_KEY to a test-mode service key")

    with affinity_sdk.Affinity(
        api_key,
        api_version="2026-07-19",
        host="api.joinaffinityai.com",
    ) as affinity:

        # Confirm the key's account, environment, and scopes before reading resources.
        access = affinity.account.retrieve_access()
        print("Authenticated", {
            "livemode": access.livemode,
            "scopes": access.scopes,
            "service_account": access.service_account,
        })

        if access.livemode:
            raise RuntimeError("This quickstart only runs with a test-mode service key")
        if "catalog:read" not in access.scopes:
            raise RuntimeError("The service key needs the catalog:read scope")

        organization = affinity.account.retrieve()
        catalog = affinity.catalog.list(query="semaglutide")
        practices = affinity.practices.list()
        orders = affinity.orders.list()
        webhooks = affinity.webhooks.list_endpoints()

        print("Organization", organization.account)
        print(f"Found {len(catalog.data)} matching sandbox catalog items")
        for item in catalog.data[:3]:
            print("Catalog item", item)

        print(f"Found {len(practices.data)} practices")
        for practice in practices.data:
            print("Practice", practice)

        print(f"Found {len(orders.data)} sandbox orders")
        for order in orders.data[:5]:
            print("Order", order)

        print(f"Found {len(webhooks.data)} test webhook endpoints")
        print("The SDK is authenticated and ready for sandbox integration work.")


if __name__ == "__main__":
    try:
        main()
    except affinity_sdk.ApiException as error:
        print(f"Affinity API request failed: {error}", file=sys.stderr)
        raise SystemExit(1) from error
