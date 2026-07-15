# Security

Do not open a public issue for a suspected vulnerability or include credentials, patient data, or
clinical payloads in a report. Email `security@joinaffinityai.com` with a minimal reproduction and
the affected SDK version or commit.

Affinity service keys are server-side credentials. Examples in this repository read keys from the
`AFFINITY_API_KEY` environment variable and must be run with test-mode keys unless production use
has been separately approved.
