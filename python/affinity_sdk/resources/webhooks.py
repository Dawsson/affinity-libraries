# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

from affinity_sdk.api.platform_webhooks_api import PlatformWebhooksApi
class WebhooksResource:
    def __init__(self, client): self._api = PlatformWebhooksApi(client)
    def list_endpoints(self): return self._api.list_webhook_endpoints()
    def create_endpoint(self, params, *, idempotency_key): return self._api.create_webhook_endpoint(idempotency_key=idempotency_key, create_webhook_endpoint_request=params)
    def update_endpoint(self, endpoint_id, params, *, idempotency_key): return self._api.update_webhook_endpoint(endpoint_id=endpoint_id, idempotency_key=idempotency_key, update_webhook_endpoint_request=params)
    def delete_endpoint(self, endpoint_id, *, idempotency_key): return self._api.delete_webhook_endpoint(endpoint_id=endpoint_id, idempotency_key=idempotency_key)
    def rotate_secret(self, endpoint_id, *, idempotency_key): return self._api.rotate_webhook_endpoint_secret(endpoint_id=endpoint_id, idempotency_key=idempotency_key)
    def list_events(self): return self._api.list_webhook_events()
    def retrieve_event(self, event_id): return self._api.get_webhook_event(event_id=event_id)
    def replay_event(self, event_id, *, idempotency_key): return self._api.replay_webhook_event(event_id=event_id, idempotency_key=idempotency_key)
