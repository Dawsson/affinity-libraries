# CreateOrder200ResponseOrderRouting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_reasons** | **List[str]** |  |
**candidate_compounder_ids** | **List[str]** |  |
**cold_ship** | **bool** |  |
**selected_compounder_id** | **str** |  |

## Example

```python
from affinity_sdk.models.create_order200_response_order_routing import CreateOrder200ResponseOrderRouting

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrder200ResponseOrderRouting from a JSON string
create_order200_response_order_routing_instance = CreateOrder200ResponseOrderRouting.from_json(json)
# print the JSON string representation of the object
print(CreateOrder200ResponseOrderRouting.to_json())

# convert the object into a dict
create_order200_response_order_routing_dict = create_order200_response_order_routing_instance.to_dict()
# create an instance of CreateOrder200ResponseOrderRouting from a dict
create_order200_response_order_routing_from_dict = CreateOrder200ResponseOrderRouting.from_dict(create_order200_response_order_routing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


