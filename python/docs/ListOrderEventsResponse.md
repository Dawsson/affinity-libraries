# ListOrderEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListOrderEventsResponseDataInner]**](ListOrderEventsResponseDataInner.md) |  |
**has_more** | **bool** |  |
**object** | **str** |  |
**url** | **str** |  |

## Example

```python
from affinity_sdk.models.list_order_events_response import ListOrderEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrderEventsResponse from a JSON string
list_order_events_response_instance = ListOrderEventsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOrderEventsResponse.to_json())

# convert the object into a dict
list_order_events_response_dict = list_order_events_response_instance.to_dict()
# create an instance of ListOrderEventsResponse from a dict
list_order_events_response_from_dict = ListOrderEventsResponse.from_dict(list_order_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


