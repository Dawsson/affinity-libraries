# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

from affinity_sdk.api.practices_api import PracticesApi
class PracticesResource:
    def __init__(self, client): self._api = PracticesApi(client)
    def list(self): return self._api.list_practices()
    def retrieve(self, practice_id): return self._api.get_practice(practice_id=practice_id)
    def create(self, params, *, idempotency_key): return self._api.create_practice(idempotency_key=idempotency_key, create_practice_request=params)
    def update(self, practice_id, *, idempotency_key): return self._api.update_practice(practice_id=practice_id, idempotency_key=idempotency_key)
