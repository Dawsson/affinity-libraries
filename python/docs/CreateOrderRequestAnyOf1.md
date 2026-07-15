# CreateOrderRequestAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**practice_id** | **str** |  | 
**external_order_id** | **str** |  | 
**pharmacy_organization_id** | **UUID** |  | 
**prescription_id** | **UUID** |  | 
**prescription_version_id** | **UUID** |  | 
**registered_location_id** | **UUID** |  | 
**shipping_address** | [**CreateOrderRequestAnyOf1ShippingAddress**](CreateOrderRequestAnyOf1ShippingAddress.md) |  | 

## Example

```python
from affinity_sdk.models.create_order_request_any_of1 import CreateOrderRequestAnyOf1

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequestAnyOf1 from a JSON string
create_order_request_any_of1_instance = CreateOrderRequestAnyOf1.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequestAnyOf1.to_json())

# convert the object into a dict
create_order_request_any_of1_dict = create_order_request_any_of1_instance.to_dict()
# create an instance of CreateOrderRequestAnyOf1 from a dict
create_order_request_any_of1_from_dict = CreateOrderRequestAnyOf1.from_dict(create_order_request_any_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


