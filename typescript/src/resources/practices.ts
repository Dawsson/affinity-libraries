// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

import type { PracticesApi } from "../apis/PracticesApi";
import type { CreatePracticeRequest } from "../models/CreatePracticeRequest";
import type { UpdatePracticeRequest } from "../models/UpdatePracticeRequest";
import { idempotencyKey, type MutationOptions } from "./request-options";
export class PracticesResource {
  constructor(private readonly api: PracticesApi) {}
  list(params: { limit?: number; startingAfter?: string; endingBefore?: string } = {}) {
    return this.api.listPractices(params);
  }
  retrieve(practiceId: string) {
    return this.api.getPractice({ practiceId });
  }
  create(params: CreatePracticeRequest, options: MutationOptions = {}) {
    return this.api.createPractice({
      createPracticeRequest: params,
      idempotencyKey: idempotencyKey(options),
    });
  }
  update(practiceId: string, params: UpdatePracticeRequest, options: MutationOptions = {}) {
    return this.api.updatePractice({
      practiceId,
      updatePracticeRequest: params,
      idempotencyKey: idempotencyKey(options),
    });
  }
}
