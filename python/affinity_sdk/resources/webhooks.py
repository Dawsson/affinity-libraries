# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

import hashlib, hmac, json, time
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
        return json.loads(payload)
