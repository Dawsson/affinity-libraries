# API versioning

Affinity uses immutable, date-pinned API contracts. The current contract is `2026-07-19`.

Official SDK clients send their pinned version automatically. You can select a supported version
when constructing a client during an upgrade:

```ts
const affinity = new Affinity(process.env.AFFINITY_API_KEY!, {
  apiVersion: "2026-07-19",
});
```

Raw HTTP clients may override the service account's pinned version on any request:

```http
Affinity-Version: 2026-07-19
```

When the header is omitted, Affinity uses the API version pinned to the authenticated service
account. An unknown or retired version returns `400 unsupported_api_version`. Successful responses
echo the effective `Affinity-Version`.

## Upgrading

New versions are additive deployments: Affinity adds the new dated implementation while retaining
each supported older implementation. Existing integrations continue sending their old version
until they deliberately upgrade.

To upgrade safely:

1. Update the SDK or configure the new version explicitly in a non-production environment.
2. Run your integration and webhook tests against the new version.
3. Review the dated changelog for response, validation, and behavior changes.
4. Promote the same version setting to production.

Each SDK release has a pinned default version. Pin `apiVersion` explicitly in production if an SDK
upgrade must not also adopt a newer contract. Removing an old version requires a separately
announced retirement window; until then, requests pinned to that version continue to use its
compatibility implementation.
