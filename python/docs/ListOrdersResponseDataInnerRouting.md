# ListOrdersResponseDataInnerRouting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_reasons** | **List[str]** |  |
**candidate_compounder_ids** | **List[str]** |  |
**cold_ship** | **bool** |  |
**selected_compounder_id** | **str** |  |

## Example

```python
from affinity_sdk.models.list_orders_response_data_inner_routing import ListOrdersResponseDataInnerRouting

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrdersResponseDataInnerRouting from a JSON string
list_orders_response_data_inner_routing_instance = ListOrdersResponseDataInnerRouting.from_json(json)
# print the JSON string representation of the object
print(ListOrdersResponseDataInnerRouting.to_json())

# convert the object into a dict
list_orders_response_data_inner_routing_dict = list_orders_response_data_inner_routing_instance.to_dict()
# create an instance of ListOrdersResponseDataInnerRouting from a dict
list_orders_response_data_inner_routing_from_dict = ListOrdersResponseDataInnerRouting.from_dict(list_orders_response_data_inner_routing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


