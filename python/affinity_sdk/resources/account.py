# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

from affinity_sdk.api.api_keys_api import APIKeysApi
from affinity_sdk.api.platforms_api import PlatformsApi
class AccountResource:
    def __init__(self, client): self._access, self._platforms = APIKeysApi(client), PlatformsApi(client)
    def retrieve_access(self): return self._access.get_api_access()
    def retrieve(self, organization_id=None): return self._platforms.get_platform_organization(org_id=organization_id)
