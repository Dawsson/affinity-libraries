# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

from typing import Optional
from affinity_sdk.api_client import ApiClient
from affinity_sdk.configuration import Configuration
from affinity_sdk.resources.account import AccountResource
from affinity_sdk.resources.catalog import CatalogResource
from affinity_sdk.resources.orders import OrdersResource
from affinity_sdk.resources.practices import PracticesResource
from affinity_sdk.resources.webhooks import WebhooksResource

class Affinity:
    def __init__(self, api_key: str, *, api_version: str = "2026-07-09", host: str = "https://api.joinaffinityai.com") -> None:
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
