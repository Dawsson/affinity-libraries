# ListPracticesResponseDataInnerContacts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance** | [**ListPracticesResponseDataInnerContactsCompliance**](ListPracticesResponseDataInnerContactsCompliance.md) |  |
**primary** | [**ListPracticesResponseDataInnerContactsCompliance**](ListPracticesResponseDataInnerContactsCompliance.md) |  |

## Example

```python
from affinity_sdk.models.list_practices_response_data_inner_contacts import ListPracticesResponseDataInnerContacts

# TODO update the JSON string below
json = "{}"
# create an instance of ListPracticesResponseDataInnerContacts from a JSON string
list_practices_response_data_inner_contacts_instance = ListPracticesResponseDataInnerContacts.from_json(json)
# print the JSON string representation of the object
print(ListPracticesResponseDataInnerContacts.to_json())

# convert the object into a dict
list_practices_response_data_inner_contacts_dict = list_practices_response_data_inner_contacts_instance.to_dict()
# create an instance of ListPracticesResponseDataInnerContacts from a dict
list_practices_response_data_inner_contacts_from_dict = ListPracticesResponseDataInnerContacts.from_dict(list_practices_response_data_inner_contacts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


