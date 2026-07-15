// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

import type { PracticesApi } from "../apis/PracticesApi";
import type { CreatePracticeRequest } from "../models/CreatePracticeRequest";
import type { MutationOptions } from "./request-options";
export class PracticesResource {
  constructor(private readonly api: PracticesApi) {}
  list() {
    return this.api.listPractices();
  }
  retrieve(practiceId: string) {
    return this.api.getPractice({ practiceId });
  }
  create(params: CreatePracticeRequest, options: MutationOptions) {
    return this.api.createPractice({
      createPracticeRequest: params,
      idempotencyKey: options.idempotencyKey,
    });
  }
  update(practiceId: string, options: MutationOptions) {
    return this.api.updatePractice({ practiceId, idempotencyKey: options.idempotencyKey });
  }
}
