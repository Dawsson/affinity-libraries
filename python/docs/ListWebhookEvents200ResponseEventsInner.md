# ListWebhookEvents200ResponseEventsInner


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
from affinity_sdk.models.list_webhook_events200_response_events_inner import ListWebhookEvents200ResponseEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEvents200ResponseEventsInner from a JSON string
list_webhook_events200_response_events_inner_instance = ListWebhookEvents200ResponseEventsInner.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEvents200ResponseEventsInner.to_json())

# convert the object into a dict
list_webhook_events200_response_events_inner_dict = list_webhook_events200_response_events_inner_instance.to_dict()
# create an instance of ListWebhookEvents200ResponseEventsInner from a dict
list_webhook_events200_response_events_inner_from_dict = ListWebhookEvents200ResponseEventsInner.from_dict(list_webhook_events200_response_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


