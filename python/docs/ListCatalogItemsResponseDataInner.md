# ListCatalogItemsResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_states** | **List[str]** |  |
**catalog_kind** | **str** |  |
**cold_ship** | **bool** |  |
**compounder_id** | **str** |  |
**compounder_name** | **str** |  |
**description** | **str** |  |
**dosage_form** | **str** |  |
**facility_type** | **str** |  |
**id** | **str** |  |
**is_orderable** | **bool** |  |
**livemode** | **bool** |  |
**name** | **str** |  |
**object** | **str** |  |
**patient_specific_required** | **bool** |  |
**pricing** | [**ListCatalogItemsResponseDataInnerPricing**](ListCatalogItemsResponseDataInnerPricing.md) |  |
**restricted_states** | **List[str]** |  |
**route** | **str** |  |
**strength** | **str** |  |

## Example

```python
from affinity_sdk.models.list_catalog_items_response_data_inner import ListCatalogItemsResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListCatalogItemsResponseDataInner from a JSON string
list_catalog_items_response_data_inner_instance = ListCatalogItemsResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListCatalogItemsResponseDataInner.to_json())

# convert the object into a dict
list_catalog_items_response_data_inner_dict = list_catalog_items_response_data_inner_instance.to_dict()
# create an instance of ListCatalogItemsResponseDataInner from a dict
list_catalog_items_response_data_inner_from_dict = ListCatalogItemsResponseDataInner.from_dict(list_catalog_items_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


