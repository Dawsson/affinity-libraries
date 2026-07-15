# GetApiAccess400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  |
**data** | **object** |  | [optional]
**detail** | **str** |  | [optional]
**instance** | **str** |  | [optional]
**request_id** | **str** |  | [optional]
**status** | **float** |  |
**title** | **str** |  |
**trace_id** | **str** |  | [optional]
**type** | **str** |  |

## Example

```python
from affinity_sdk.models.get_api_access400_response import GetApiAccess400Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiAccess400Response from a JSON string
get_api_access400_response_instance = GetApiAccess400Response.from_json(json)
# print the JSON string representation of the object
print(GetApiAccess400Response.to_json())

# convert the object into a dict
get_api_access400_response_dict = get_api_access400_response_instance.to_dict()
# create an instance of GetApiAccess400Response from a dict
get_api_access400_response_from_dict = GetApiAccess400Response.from_dict(get_api_access400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


