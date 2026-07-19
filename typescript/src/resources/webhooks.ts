// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

import type { PlatformWebhooksApi } from "../apis/PlatformWebhooksApi";
import type { CreateWebhookEndpointRequest } from "../models/CreateWebhookEndpointRequest";
import type { UpdateWebhookEndpointRequest } from "../models/UpdateWebhookEndpointRequest";
import { idempotencyKey, type MutationOptions } from "./request-options";
export class WebhooksResource {
  constructor(private readonly api: PlatformWebhooksApi) {}
  listEndpoints() {
    return this.api.listWebhookEndpoints();
  }
  createEndpoint(params: CreateWebhookEndpointRequest, options: MutationOptions = {}) {
    return this.api.createWebhookEndpoint({
      createWebhookEndpointRequest: params,
      idempotencyKey: idempotencyKey(options),
    });
  }
  updateEndpoint(
    endpointId: string,
    params: UpdateWebhookEndpointRequest,
    options: MutationOptions = {},
  ) {
    return this.api.updateWebhookEndpoint({
      endpointId,
      updateWebhookEndpointRequest: params,
      idempotencyKey: idempotencyKey(options),
    });
  }
  deleteEndpoint(endpointId: string, options: MutationOptions = {}) {
    return this.api.deleteWebhookEndpoint({ endpointId, idempotencyKey: idempotencyKey(options) });
  }
  rotateSecret(endpointId: string, options: MutationOptions = {}) {
    return this.api.rotateWebhookEndpointSecret({
      endpointId,
      idempotencyKey: idempotencyKey(options),
    });
  }
  listEvents() {
    return this.api.listWebhookEvents();
  }
  retrieveEvent(eventId: string) {
    return this.api.getWebhookEvent({ eventId });
  }
  replayEvent(eventId: string, options: MutationOptions = {}) {
    return this.api.replayWebhookEvent({ eventId, idempotencyKey: idempotencyKey(options) });
  }
  async constructEvent(payload: string, signature: string, secret: string, toleranceSeconds = 300) {
    const parts: Record<string, string> = {};
    for (const part of signature.split(",")) {
      const separator = part.indexOf("=");
      if (separator > 0) parts[part.slice(0, separator)] = part.slice(separator + 1);
    }
    const timestamp = Number(parts.t);
    if (!Number.isFinite(timestamp) || !parts.v1)
      throw new Error("Invalid Affinity-Signature header");
    if (Math.abs(Date.now() / 1000 - timestamp) > toleranceSeconds)
      throw new Error("Webhook signature timestamp is outside the tolerance window");
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );
    const digest = new Uint8Array(
      await crypto.subtle.sign(
        "HMAC",
        key,
        new TextEncoder().encode(String(timestamp) + "." + payload),
      ),
    );
    const expected = Array.from(digest, (byte) => (byte + 256).toString(16).slice(1)).join("");
    if (
      expected.length !== parts.v1.length ||
      !Array.from(expected).every((value, index) => value === parts.v1![index])
    )
      throw new Error("Webhook signature verification failed");
    return JSON.parse(payload) as unknown;
  }
}
