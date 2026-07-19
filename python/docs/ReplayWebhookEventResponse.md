# ReplayWebhookEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  |
**event_type** | **str** |  |
**livemode** | **bool** |  |
**object** | **str** |  |
**object_id** | **str** |  |
**object_type** | **str** |  |
**updated_at** | **str** |  |

## Example

```python
from affinity_sdk.models.replay_webhook_event_response import ReplayWebhookEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplayWebhookEventResponse from a JSON string
replay_webhook_event_response_instance = ReplayWebhookEventResponse.from_json(json)
# print the JSON string representation of the object
print(ReplayWebhookEventResponse.to_json())

# convert the object into a dict
replay_webhook_event_response_dict = replay_webhook_event_response_instance.to_dict()
# create an instance of ReplayWebhookEventResponse from a dict
replay_webhook_event_response_from_dict = ReplayWebhookEventResponse.from_dict(replay_webhook_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


