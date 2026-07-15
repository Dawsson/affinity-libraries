# ListCatalogItems200ResponseItemsInner


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
**name** | **str** |  |
**patient_specific_required** | **bool** |  |
**restricted_states** | **List[str]** |  |
**route** | **str** |  |
**strength** | **str** |  |

## Example

```python
from affinity_sdk.models.list_catalog_items200_response_items_inner import ListCatalogItems200ResponseItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListCatalogItems200ResponseItemsInner from a JSON string
list_catalog_items200_response_items_inner_instance = ListCatalogItems200ResponseItemsInner.from_json(json)
# print the JSON string representation of the object
print(ListCatalogItems200ResponseItemsInner.to_json())

# convert the object into a dict
list_catalog_items200_response_items_inner_dict = list_catalog_items200_response_items_inner_instance.to_dict()
# create an instance of ListCatalogItems200ResponseItemsInner from a dict
list_catalog_items200_response_items_inner_from_dict = ListCatalogItems200ResponseItemsInner.from_dict(list_catalog_items200_response_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


