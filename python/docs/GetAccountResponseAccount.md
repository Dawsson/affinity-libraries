# GetAccountResponseAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_emails** | **List[str]** |  |
**alert_integration_issues** | **bool** |  |
**alert_new_orders** | **bool** |  |
**alert_status_changes** | **bool** |  |
**display_name** | **str** |  |
**object** | **str** |  |
**slug** | **str** |  |
**support_email** | **str** |  |
**website_url** | **str** |  |

## Example

```python
from affinity_sdk.models.get_account_response_account import GetAccountResponseAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GetAccountResponseAccount from a JSON string
get_account_response_account_instance = GetAccountResponseAccount.from_json(json)
# print the JSON string representation of the object
print(GetAccountResponseAccount.to_json())

# convert the object into a dict
get_account_response_account_dict = get_account_response_account_instance.to_dict()
# create an instance of GetAccountResponseAccount from a dict
get_account_response_account_from_dict = GetAccountResponseAccount.from_dict(get_account_response_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


