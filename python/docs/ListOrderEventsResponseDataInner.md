# ListOrderEventsResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  |
**event_type** | **str** |  |
**message** | **str** |  |
**object** | **str** |  |

## Example

```python
from affinity_sdk.models.list_order_events_response_data_inner import ListOrderEventsResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrderEventsResponseDataInner from a JSON string
list_order_events_response_data_inner_instance = ListOrderEventsResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListOrderEventsResponseDataInner.to_json())

# convert the object into a dict
list_order_events_response_data_inner_dict = list_order_events_response_data_inner_instance.to_dict()
# create an instance of ListOrderEventsResponseDataInner from a dict
list_order_events_response_data_inner_from_dict = ListOrderEventsResponseDataInner.from_dict(list_order_events_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


