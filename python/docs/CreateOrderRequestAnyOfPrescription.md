# CreateOrderRequestAnyOfPrescription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized** | **bool** |  |
**signed_at** | **datetime** |  |

## Example

```python
from affinity_sdk.models.create_order_request_any_of_prescription import CreateOrderRequestAnyOfPrescription

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderRequestAnyOfPrescription from a JSON string
create_order_request_any_of_prescription_instance = CreateOrderRequestAnyOfPrescription.from_json(json)
# print the JSON string representation of the object
print(CreateOrderRequestAnyOfPrescription.to_json())

# convert the object into a dict
create_order_request_any_of_prescription_dict = create_order_request_any_of_prescription_instance.to_dict()
# create an instance of CreateOrderRequestAnyOfPrescription from a dict
create_order_request_any_of_prescription_from_dict = CreateOrderRequestAnyOfPrescription.from_dict(create_order_request_any_of_prescription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


