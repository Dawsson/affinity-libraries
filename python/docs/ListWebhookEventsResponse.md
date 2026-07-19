# ListWebhookEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListWebhookEventsResponseDataInner]**](ListWebhookEventsResponseDataInner.md) |  |
**has_more** | **bool** |  |
**object** | **str** |  |
**url** | **str** |  |

## Example

```python
from affinity_sdk.models.list_webhook_events_response import ListWebhookEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEventsResponse from a JSON string
list_webhook_events_response_instance = ListWebhookEventsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEventsResponse.to_json())

# convert the object into a dict
list_webhook_events_response_dict = list_webhook_events_response_instance.to_dict()
# create an instance of ListWebhookEventsResponse from a dict
list_webhook_events_response_from_dict = ListWebhookEventsResponse.from_dict(list_webhook_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


