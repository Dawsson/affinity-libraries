# CreateOrderRequestAnyOfPatient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CreateOrderRequestAnyOfPatientAddress**](CreateOrderRequestAnyOfPatientAddress.md) |  | 
**date_of_birth** | **date** |  | 
**email** | **str** |  | [optional] 
**external_patient_id** | **str** |  | 
**name** | **str** |  | 
**phone** | **str** |  | [optional] 
**state** | **str** |  | 

## Example

```python
from affinity_sdk.models.create_order_request_any_of_patient import CreateOrderRequestAnyOfPatient

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequestAnyOfPatient from a JSON string
create_order_request_any_of_patient_instance = CreateOrderRequestAnyOfPatient.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequestAnyOfPatient.to_json())

# convert the object into a dict
create_order_request_any_of_patient_dict = create_order_request_any_of_patient_instance.to_dict()
# create an instance of CreateOrderRequestAnyOfPatient from a dict
create_order_request_any_of_patient_from_dict = CreateOrderRequestAnyOfPatient.from_dict(create_order_request_any_of_patient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


