# ListOrders200ResponseOrdersInnerRouting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_reasons** | **List[str]** |  | 
**candidate_compounder_ids** | **List[str]** |  | 
**cold_ship** | **bool** |  | 
**selected_compounder_id** | **str** |  | 

## Example

```python
from affinity_sdk.models.list_orders200_response_orders_inner_routing import ListOrders200ResponseOrdersInnerRouting

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrders200ResponseOrdersInnerRouting from a JSON string
list_orders200_response_orders_inner_routing_instance = ListOrders200ResponseOrdersInnerRouting.from_json(json)
# print the JSON string representation of the object
print(ListOrders200ResponseOrdersInnerRouting.to_json())

# convert the object into a dict
list_orders200_response_orders_inner_routing_dict = list_orders200_response_orders_inner_routing_instance.to_dict()
# create an instance of ListOrders200ResponseOrdersInnerRouting from a dict
list_orders200_response_orders_inner_routing_from_dict = ListOrders200ResponseOrdersInnerRouting.from_dict(list_orders200_response_orders_inner_routing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


