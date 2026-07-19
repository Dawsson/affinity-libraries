# ListPracticesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListPracticesResponseDataInner]**](ListPracticesResponseDataInner.md) |  |
**has_more** | **bool** |  |
**object** | **str** |  |
**url** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices_response import ListPracticesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPracticesResponse from a JSON string
list_practices_response_instance = ListPracticesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPracticesResponse.to_json())

# convert the object into a dict
list_practices_response_dict = list_practices_response_instance.to_dict()
# create an instance of ListPracticesResponse from a dict
list_practices_response_from_dict = ListPracticesResponse.from_dict(list_practices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


