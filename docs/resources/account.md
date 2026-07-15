<!-- Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT. -->
# Account

Access this product through the shared authenticated client. The facade delegates to the generated
OpenAPI transport while keeping transport-class names out of application code.

## Methods

- `retrieveAccess()`
- `retrieve()`

## Examples

```ts
const result = await affinity.account.retrieveAccess();
```

```python
result = affinity.account.retrieve_access()
```

```go
result, err := affinityClient.Account.RetrieveAccess(ctx)
```

```java
var result = affinity.account().retrieveAccess();
```

Mutation methods additionally require an idempotency key. Consult the generated model types for the
request and response fields accepted by the current dated API contract.
