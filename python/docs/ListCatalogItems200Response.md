# ListCatalogItems200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ListCatalogItems200ResponseItemsInner]**](ListCatalogItems200ResponseItemsInner.md) |  | 

## Example

```python
from affinity_sdk.models.list_catalog_items200_response import ListCatalogItems200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListCatalogItems200Response from a JSON string
list_catalog_items200_response_instance = ListCatalogItems200Response.from_json(json)
# print the JSON string representation of the object
print(ListCatalogItems200Response.to_json())

# convert the object into a dict
list_catalog_items200_response_dict = list_catalog_items200_response_instance.to_dict()
# create an instance of ListCatalogItems200Response from a dict
list_catalog_items200_response_from_dict = ListCatalogItems200Response.from_dict(list_catalog_items200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


