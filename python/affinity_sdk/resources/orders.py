# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

from affinity_sdk.api.platform_orders_api import PlatformOrdersApi
class OrdersResource:
    def __init__(self, client): self._api = PlatformOrdersApi(client)
    def list(self, *, external_order_id=None, patient_external_id=None): return self._api.list_orders(external_order_id=external_order_id, patient_external_id=patient_external_id)
    def retrieve(self, order_id): return self._api.get_order(order_id=order_id)
    def create(self, params, *, idempotency_key): return self._api.create_order(idempotency_key=idempotency_key, create_order_request=params)
    def update(self, order_id, params, *, idempotency_key): return self._api.update_order(order_id=order_id, idempotency_key=idempotency_key, update_order_request=params)
    def submit(self, order_id, *, idempotency_key): return self._api.submit_order(order_id=order_id, idempotency_key=idempotency_key)
    def cancel(self, order_id, params, *, idempotency_key): return self._api.cancel_order(order_id=order_id, idempotency_key=idempotency_key, cancel_order_request=params)
    def list_events(self, order_id): return self._api.list_order_events(order_id=order_id)
