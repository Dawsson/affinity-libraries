# GetApiAccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**GetApiAccessResponseApiKey**](GetApiAccessResponseApiKey.md) |  |
**livemode** | **bool** |  |
**object** | **str** |  |
**scopes** | **List[str]** |  |
**service_account** | [**GetApiAccessResponseServiceAccount**](GetApiAccessResponseServiceAccount.md) |  |

## Example

```python
from affinity_sdk.models.get_api_access_response import GetApiAccessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiAccessResponse from a JSON string
get_api_access_response_instance = GetApiAccessResponse.from_json(json)
# print the JSON string representation of the object
print(GetApiAccessResponse.to_json())

# convert the object into a dict
get_api_access_response_dict = get_api_access_response_instance.to_dict()
# create an instance of GetApiAccessResponse from a dict
get_api_access_response_from_dict = GetApiAccessResponse.from_dict(get_api_access_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


