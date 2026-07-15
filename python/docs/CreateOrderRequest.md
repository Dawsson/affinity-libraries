# CreateOrderRequest


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
**pharmacy_organization_id** | **UUID** |  | 
**prescription_id** | **UUID** |  | 
**prescription_version_id** | **UUID** |  | 
**registered_location_id** | **UUID** |  | 
**shipping_address** | [**CreateOrderRequestAnyOf1ShippingAddress**](CreateOrderRequestAnyOf1ShippingAddress.md) |  | 

## Example

```python
from affinity_sdk.models.create_order_request import CreateOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequest from a JSON string
create_order_request_instance = CreateOrderRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequest.to_json())

# convert the object into a dict
create_order_request_dict = create_order_request_instance.to_dict()
# create an instance of CreateOrderRequest from a dict
create_order_request_from_dict = CreateOrderRequest.from_dict(create_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


