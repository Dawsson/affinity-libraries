# GetWebhookEvent200ResponseEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | 
**event_type** | **str** |  | 
**id** | **str** |  | 
**livemode** | **bool** |  | 
**object_id** | **str** |  | 
**object_type** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from affinity_sdk.models.get_webhook_event200_response_event import GetWebhookEvent200ResponseEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEvent200ResponseEvent from a JSON string
get_webhook_event200_response_event_instance = GetWebhookEvent200ResponseEvent.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEvent200ResponseEvent.to_json())

# convert the object into a dict
get_webhook_event200_response_event_dict = get_webhook_event200_response_event_instance.to_dict()
# create an instance of GetWebhookEvent200ResponseEvent from a dict
get_webhook_event200_response_event_from_dict = GetWebhookEvent200ResponseEvent.from_dict(get_webhook_event200_response_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


