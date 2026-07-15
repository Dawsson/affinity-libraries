# First-client checklist

## Affinity provides

- A test-mode service key with only the required scopes.
- Access to this repository at a pinned commit.
- The current `Affinity-Version` value.
- A platform organization and test practice workflow.
- A webhook signing secret and a safe test event.
- A support contact and request-ID escalation path.

## Client verifies

- The key is stored only in a server-side secret manager.
- Every request pins `Affinity-Version`.
- Every mutation sends an `Idempotency-Key` and reuses it only for retries.
- Request logs redact credentials and clinical payloads.
- Webhooks are signature-verified before parsing or persistence.
- Webhook processing deduplicates by event ID and returns 2xx only after durable acceptance.
- Test and live data, keys, endpoints, and logs remain separate.

## Sandbox acceptance path

1. Call `getApiAccess` and confirm the expected organization, scopes, and test mode.
2. Create and update a synthetic practice.
3. List catalog items and select an orderable test item.
4. Create and update a synthetic draft order.
5. Submit or cancel the order and inspect its lifecycle events.
6. Create a test webhook endpoint, receive a signed event, inspect attempts, and test replay.

## Explicitly unavailable

- Billing and usage invoicing.
- Automatic production approval.
- Live ordering before organization, compliance, jurisdiction, and credential approval.
- Browser or mobile use of service keys.
