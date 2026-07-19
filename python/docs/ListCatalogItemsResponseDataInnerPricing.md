# ListCatalogItemsResponseDataInnerPricing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  |
**medication_subtotal_cents** | **int** |  |
**order_total_cents** | **int** |  |
**service_fee_cents** | **int** |  |
**service_fee_percent** | **int** |  |

## Example

```python
from affinity_sdk.models.list_catalog_items_response_data_inner_pricing import ListCatalogItemsResponseDataInnerPricing

# TODO update the JSON string below
json = "{}"
# create an instance of ListCatalogItemsResponseDataInnerPricing from a JSON string
list_catalog_items_response_data_inner_pricing_instance = ListCatalogItemsResponseDataInnerPricing.from_json(json)
# print the JSON string representation of the object
print(ListCatalogItemsResponseDataInnerPricing.to_json())

# convert the object into a dict
list_catalog_items_response_data_inner_pricing_dict = list_catalog_items_response_data_inner_pricing_instance.to_dict()
# create an instance of ListCatalogItemsResponseDataInnerPricing from a dict
list_catalog_items_response_data_inner_pricing_from_dict = ListCatalogItemsResponseDataInnerPricing.from_dict(list_catalog_items_response_data_inner_pricing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


