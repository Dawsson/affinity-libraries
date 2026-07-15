# ReplayWebhookEvent200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | [**List[ReplayWebhookEvent200ResponseAttemptsInner]**](ReplayWebhookEvent200ResponseAttemptsInner.md) |  |
**deliveries** | [**List[ReplayWebhookEvent200ResponseDeliveriesInner]**](ReplayWebhookEvent200ResponseDeliveriesInner.md) |  |
**event** | [**GetWebhookEvent200ResponseEvent**](GetWebhookEvent200ResponseEvent.md) |  |

## Example

```python
from affinity_sdk.models.replay_webhook_event200_response import ReplayWebhookEvent200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReplayWebhookEvent200Response from a JSON string
replay_webhook_event200_response_instance = ReplayWebhookEvent200Response.from_json(json)
# print the JSON string representation of the object
print(ReplayWebhookEvent200Response.to_json())

# convert the object into a dict
replay_webhook_event200_response_dict = replay_webhook_event200_response_instance.to_dict()
# create an instance of ReplayWebhookEvent200Response from a dict
replay_webhook_event200_response_from_dict = ReplayWebhookEvent200Response.from_dict(replay_webhook_event200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


