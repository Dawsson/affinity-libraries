# UpdateOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reason** | **str** |  |
**carrier** | **str** |  |
**created_at** | **str** |  |
**currency** | **str** |  |
**delivered_at** | **str** |  |
**directions** | **str** |  |
**dosage_form** | **str** |  |
**external_order_id** | **str** |  |
**external_submission_attempted** | **bool** |  |
**external_submission_blocked_reason** | **str** |  |
**livemode** | **bool** |  |
**medication_name** | **str** |  |
**object** | **str** |  |
**patient_external_id** | **str** |  |
**patient_name** | **str** |  |
**patient_state** | **str** |  |
**prescriber_name** | **str** |  |
**prescriber_npi** | **str** |  |
**quantity** | **float** |  |
**quote_cents** | **float** |  |
**routing** | [**ListOrdersResponseDataInnerRouting**](ListOrdersResponseDataInnerRouting.md) |  |
**shipped_at** | **str** |  |
**strength** | **str** |  |
**tracking_number** | **str** |  |
**updated_at** | **str** |  |

## Example

```python
from affinity_sdk.models.update_order_response import UpdateOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrderResponse from a JSON string
update_order_response_instance = UpdateOrderResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateOrderResponse.to_json())

# convert the object into a dict
update_order_response_dict = update_order_response_instance.to_dict()
# create an instance of UpdateOrderResponse from a dict
update_order_response_from_dict = UpdateOrderResponse.from_dict(update_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


