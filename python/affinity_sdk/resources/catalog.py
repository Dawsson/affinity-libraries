# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

from affinity_sdk.api.catalog_api import CatalogApi
class CatalogResource:
    def __init__(self, client): self._api = CatalogApi(client)
    def list(self, *, query=None): return self._api.list_catalog_items(query=query)
