# GetAccountResponseMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_name** | **str** |  |

## Example

```python
from affinity_sdk.models.get_account_response_membership import GetAccountResponseMembership

# TODO update the JSON string below
json = "{}"
# create an instance of GetAccountResponseMembership from a JSON string
get_account_response_membership_instance = GetAccountResponseMembership.from_json(json)
# print the JSON string representation of the object
print(GetAccountResponseMembership.to_json())

# convert the object into a dict
get_account_response_membership_dict = get_account_response_membership_instance.to_dict()
# create an instance of GetAccountResponseMembership from a dict
get_account_response_membership_from_dict = GetAccountResponseMembership.from_dict(get_account_response_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


