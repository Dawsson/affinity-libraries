# ListWebhookEventsResponseDataInner


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
from affinity_sdk.models.list_webhook_events_response_data_inner import ListWebhookEventsResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEventsResponseDataInner from a JSON string
list_webhook_events_response_data_inner_instance = ListWebhookEventsResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEventsResponseDataInner.to_json())

# convert the object into a dict
list_webhook_events_response_data_inner_dict = list_webhook_events_response_data_inner_instance.to_dict()
# create an instance of ListWebhookEventsResponseDataInner from a dict
list_webhook_events_response_data_inner_from_dict = ListWebhookEventsResponseDataInner.from_dict(list_webhook_events_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


