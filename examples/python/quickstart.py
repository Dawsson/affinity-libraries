import os

import affinity_sdk

api_key = os.environ["AFFINITY_API_KEY"]
configuration = affinity_sdk.Configuration(access_token=api_key)

with affinity_sdk.ApiClient(configuration) as client:
    client.add_default_header("Affinity-Version", "2026-07-09")
    print(affinity_sdk.APIKeysApi(client).get_api_access())
