// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package ai.joinaffinity.sdk;
public final class MutationOptions {
  private final String idempotencyKey;
  public MutationOptions(String idempotencyKey) {
    if (idempotencyKey == null || idempotencyKey.isBlank()) throw new IllegalArgumentException("An idempotency key is required");
    this.idempotencyKey = idempotencyKey;
  }
  public String idempotencyKey() { return idempotencyKey; }
}
