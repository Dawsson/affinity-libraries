# CreateOrderRequestAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_item_id** | **str** |  | 
**practice_id** | **str** |  | 
**directions** | **str** |  | 
**external_order_id** | **str** |  | 
**patient** | [**CreateOrderRequestAnyOfPatient**](CreateOrderRequestAnyOfPatient.md) |  | 
**prescriber** | [**CreateOrderRequestAnyOfPrescriber**](CreateOrderRequestAnyOfPrescriber.md) |  | 
**prescription** | [**CreateOrderRequestAnyOfPrescription**](CreateOrderRequestAnyOfPrescription.md) |  | 
**quantity** | **int** |  | [optional] [default to 1]
**replaces_order_id** | **UUID** |  | [optional] 

## Example

```python
from affinity_sdk.models.create_order_request_any_of import CreateOrderRequestAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequestAnyOf from a JSON string
create_order_request_any_of_instance = CreateOrderRequestAnyOf.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequestAnyOf.to_json())

# convert the object into a dict
create_order_request_any_of_dict = create_order_request_any_of_instance.to_dict()
# create an instance of CreateOrderRequestAnyOf from a dict
create_order_request_any_of_from_dict = CreateOrderRequestAnyOf.from_dict(create_order_request_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


