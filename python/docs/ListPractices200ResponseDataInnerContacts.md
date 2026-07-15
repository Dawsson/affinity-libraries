# ListPractices200ResponseDataInnerContacts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance** | [**ListPractices200ResponseDataInnerContactsCompliance**](ListPractices200ResponseDataInnerContactsCompliance.md) |  |
**primary** | [**ListPractices200ResponseDataInnerContactsPrimary**](ListPractices200ResponseDataInnerContactsPrimary.md) |  |

## Example

```python
from affinity_sdk.models.list_practices200_response_data_inner_contacts import ListPractices200ResponseDataInnerContacts

# TODO update the JSON string below
json = "{}"
# create an instance of ListPractices200ResponseDataInnerContacts from a JSON string
list_practices200_response_data_inner_contacts_instance = ListPractices200ResponseDataInnerContacts.from_json(json)
# print the JSON string representation of the object
print(ListPractices200ResponseDataInnerContacts.to_json())

# convert the object into a dict
list_practices200_response_data_inner_contacts_dict = list_practices200_response_data_inner_contacts_instance.to_dict()
# create an instance of ListPractices200ResponseDataInnerContacts from a dict
list_practices200_response_data_inner_contacts_from_dict = ListPractices200ResponseDataInnerContacts.from_dict(list_practices200_response_data_inner_contacts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


