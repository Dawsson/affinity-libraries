# CreateOrderRequestAnyOfPrescriber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **str** |  | [optional] 
**license_states** | **List[str]** |  | 
**name** | **str** |  | 
**npi** | **str** |  | 

## Example

```python
from affinity_sdk.models.create_order_request_any_of_prescriber import CreateOrderRequestAnyOfPrescriber

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequestAnyOfPrescriber from a JSON string
create_order_request_any_of_prescriber_instance = CreateOrderRequestAnyOfPrescriber.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequestAnyOfPrescriber.to_json())

# convert the object into a dict
create_order_request_any_of_prescriber_dict = create_order_request_any_of_prescriber_instance.to_dict()
# create an instance of CreateOrderRequestAnyOfPrescriber from a dict
create_order_request_any_of_prescriber_from_dict = CreateOrderRequestAnyOfPrescriber.from_dict(create_order_request_any_of_prescriber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


