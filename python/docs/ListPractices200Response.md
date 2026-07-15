# ListPractices200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListPractices200ResponseDataInner]**](ListPractices200ResponseDataInner.md) |  |
**has_more** | **bool** |  |
**object** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices200_response import ListPractices200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListPractices200Response from a JSON string
list_practices200_response_instance = ListPractices200Response.from_json(json)
# print the JSON string representation of the object
print(ListPractices200Response.to_json())

# convert the object into a dict
list_practices200_response_dict = list_practices200_response_instance.to_dict()
# create an instance of ListPractices200Response from a dict
list_practices200_response_from_dict = ListPractices200Response.from_dict(list_practices200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


