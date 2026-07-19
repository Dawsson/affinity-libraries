# GetAccountResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  |
**email_verified** | **bool** |  | [optional]
**image** | **str** |  |
**name** | **str** |  |
**two_factor_enabled** | **bool** |  | [optional]
**user_id** | **str** |  |

## Example

```python
from affinity_sdk.models.get_account_response_user import GetAccountResponseUser

# TODO update the JSON string below
json = "{}"
# create an instance of GetAccountResponseUser from a JSON string
get_account_response_user_instance = GetAccountResponseUser.from_json(json)
# print the JSON string representation of the object
print(GetAccountResponseUser.to_json())

# convert the object into a dict
get_account_response_user_dict = get_account_response_user_instance.to_dict()
# create an instance of GetAccountResponseUser from a dict
get_account_response_user_from_dict = GetAccountResponseUser.from_dict(get_account_response_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


