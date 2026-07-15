# GetApiAccess200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**GetApiAccess200ResponseApiKey**](GetApiAccess200ResponseApiKey.md) |  |
**livemode** | **bool** |  |
**object** | **str** |  |
**scopes** | **List[str]** |  |
**service_account** | [**GetApiAccess200ResponseServiceAccount**](GetApiAccess200ResponseServiceAccount.md) |  |

## Example

```python
from affinity_sdk.models.get_api_access200_response import GetApiAccess200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiAccess200Response from a JSON string
get_api_access200_response_instance = GetApiAccess200Response.from_json(json)
# print the JSON string representation of the object
print(GetApiAccess200Response.to_json())

# convert the object into a dict
get_api_access200_response_dict = get_api_access200_response_instance.to_dict()
# create an instance of GetApiAccess200Response from a dict
get_api_access200_response_from_dict = GetApiAccess200Response.from_dict(get_api_access200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


