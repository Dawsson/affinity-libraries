# ListOrders200ResponseOrdersInner


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
**routing** | [**ListOrders200ResponseOrdersInnerRouting**](ListOrders200ResponseOrdersInnerRouting.md) |  | 
**shipped_at** | **str** |  | 
**strength** | **str** |  | 
**tracking_number** | **str** |  | 
**updated_at** | **str** |  | 

## Example

```python
from affinity_sdk.models.list_orders200_response_orders_inner import ListOrders200ResponseOrdersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrders200ResponseOrdersInner from a JSON string
list_orders200_response_orders_inner_instance = ListOrders200ResponseOrdersInner.from_json(json)
# print the JSON string representation of the object
print(ListOrders200ResponseOrdersInner.to_json())

# convert the object into a dict
list_orders200_response_orders_inner_dict = list_orders200_response_orders_inner_instance.to_dict()
# create an instance of ListOrders200ResponseOrdersInner from a dict
list_orders200_response_orders_inner_from_dict = ListOrders200ResponseOrdersInner.from_dict(list_orders200_response_orders_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


