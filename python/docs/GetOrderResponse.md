# GetOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reason** | **str** |  |
**carrier** | **str** |  |
**catalog_item_id** | **str** |  |
**practice_id** | **str** |  |
**compounder_id** | **str** |  |
**created_at** | **str** |  |
**currency** | **str** |  |
**directions** | **str** |  |
**dosage_form** | **str** |  |
**external_order_id** | **str** |  |
**external_submission_attempted** | **bool** |  |
**external_submission_blocked_reason** | **str** |  |
**id** | **str** |  |
**livemode** | **bool** |  |
**medication_name** | **str** |  |
**patient_external_id** | **str** |  |
**patient_name** | **str** |  |
**patient_state** | **str** |  |
**prescriber_name** | **str** |  |
**prescriber_npi** | **str** |  |
**quantity** | **float** |  |
**quote_cents** | **float** |  |
**object** | **str** |  |
**replaces_order_id** | **str** |  |
**routing** | [**ListOrdersResponseDataInnerRouting**](ListOrdersResponseDataInnerRouting.md) |  |
**status** | **str** |  |
**strength** | **str** |  |
**tracking_number** | **str** |  |
**shipped_at** | **str** |  |
**delivered_at** | **str** |  |
**updated_at** | **str** |  |

## Example

```python
from affinity_sdk.models.get_order_response import GetOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrderResponse from a JSON string
get_order_response_instance = GetOrderResponse.from_json(json)
# print the JSON string representation of the object
print(GetOrderResponse.to_json())

# convert the object into a dict
get_order_response_dict = get_order_response_instance.to_dict()
# create an instance of GetOrderResponse from a dict
get_order_response_from_dict = GetOrderResponse.from_dict(get_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


