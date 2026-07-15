# CreateOrder200ResponseOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reason** | **str** |  | 
**carrier** | **str** |  | 
**catalog_item_id** | **str** |  | 
**compounder_id** | **str** |  | 
**created_at** | **str** |  | 
**currency** | **str** |  | 
**delivered_at** | **str** |  | 
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
**practice_id** | **str** |  | 
**prescriber_name** | **str** |  | 
**prescriber_npi** | **str** |  | 
**quantity** | **float** |  | 
**quote_cents** | **float** |  | 
**replaces_order_id** | **str** |  | 
**routing** | [**CreateOrder200ResponseOrderRouting**](CreateOrder200ResponseOrderRouting.md) |  | 
**shipped_at** | **str** |  | 
**strength** | **str** |  | 
**tracking_number** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from affinity_sdk.models.create_order200_response_order import CreateOrder200ResponseOrder

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrder200ResponseOrder from a JSON string
create_order200_response_order_instance = CreateOrder200ResponseOrder.from_json(json)
# print the JSON string representation of the object
print(CreateOrder200ResponseOrder.to_json())

# convert the object into a dict
create_order200_response_order_dict = create_order200_response_order_instance.to_dict()
# create an instance of CreateOrder200ResponseOrder from a dict
create_order200_response_order_from_dict = CreateOrder200ResponseOrder.from_dict(create_order200_response_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


