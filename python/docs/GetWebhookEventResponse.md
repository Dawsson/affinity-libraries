# GetWebhookEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  |
**event_type** | **str** |  |
**id** | **str** |  |
**livemode** | **bool** |  |
**object** | **str** |  |
**object_id** | **str** |  |
**object_type** | **str** |  |
**status** | **str** |  |
**updated_at** | **str** |  |
**attempts** | [**List[GetWebhookEventResponseAttemptsInner]**](GetWebhookEventResponseAttemptsInner.md) |  |
**deliveries** | [**List[GetWebhookEventResponseDeliveriesInner]**](GetWebhookEventResponseDeliveriesInner.md) |  |

## Example

```python
from affinity_sdk.models.get_webhook_event_response import GetWebhookEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEventResponse from a JSON string
get_webhook_event_response_instance = GetWebhookEventResponse.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEventResponse.to_json())

# convert the object into a dict
get_webhook_event_response_dict = get_webhook_event_response_instance.to_dict()
# create an instance of GetWebhookEventResponse from a dict
get_webhook_event_response_from_dict = GetWebhookEventResponse.from_dict(get_webhook_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


