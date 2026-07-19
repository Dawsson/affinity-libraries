# Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

from uuid import uuid4
from affinity_sdk.api.practices_api import PracticesApi
class PracticesResource:
    def __init__(self, client): self._api = PracticesApi(client)
    def list(self): return self._api.list_practices()
    def retrieve(self, practice_id): return self._api.get_practice(practice_id=practice_id)
    def create(self, params, *, idempotency_key=None): return self._api.create_practice(idempotency_key=idempotency_key or str(uuid4()), create_practice_request=params)
    def update(self, practice_id, params, *, idempotency_key=None): return self._api.update_practice(practice_id=practice_id, idempotency_key=idempotency_key or str(uuid4()), update_practice_request=params)
