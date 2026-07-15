# CreateOrderRequestAnyOfPatientAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | 
**country** | **str** |  | [optional] [default to 'US']
**line1** | **str** |  | 
**line2** | **str** |  | [optional] 
**postal_code** | **str** |  | 
**state** | **str** |  | 

## Example

```python
from affinity_sdk.models.create_order_request_any_of_patient_address import CreateOrderRequestAnyOfPatientAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequestAnyOfPatientAddress from a JSON string
create_order_request_any_of_patient_address_instance = CreateOrderRequestAnyOfPatientAddress.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequestAnyOfPatientAddress.to_json())

# convert the object into a dict
create_order_request_any_of_patient_address_dict = create_order_request_any_of_patient_address_instance.to_dict()
# create an instance of CreateOrderRequestAnyOfPatientAddress from a dict
create_order_request_any_of_patient_address_from_dict = CreateOrderRequestAnyOfPatientAddress.from_dict(create_order_request_any_of_patient_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


