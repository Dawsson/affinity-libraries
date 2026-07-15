# Affinity terminology

| Term | Meaning | Used in |
| --- | --- | --- |
| Provider | An individual clinician or prescriber | People, credentials, clinical authority |
| Practice | The customer organization and API tenant | `/v1/practices`, `practiceId`, authorization |
| Location | A physical practice site | Addresses, jurisdiction, fulfillment context |
| Affinity for Providers | The provider-facing product | Marketing and product navigation |

“Clinic” is not an Affinity API resource. Integrations should model the organization as a practice,
its clinicians as providers or prescribers, and its physical sites as locations.
