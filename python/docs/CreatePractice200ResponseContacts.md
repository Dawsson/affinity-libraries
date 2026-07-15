# CreatePractice200ResponseContacts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance** | [**ListPractices200ResponseDataInnerContactsPrimary**](ListPractices200ResponseDataInnerContactsPrimary.md) |  |
**primary** | [**ListPractices200ResponseDataInnerContactsPrimary**](ListPractices200ResponseDataInnerContactsPrimary.md) |  |

## Example

```python
from affinity_sdk.models.create_practice200_response_contacts import CreatePractice200ResponseContacts

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePractice200ResponseContacts from a JSON string
create_practice200_response_contacts_instance = CreatePractice200ResponseContacts.from_json(json)
# print the JSON string representation of the object
print(CreatePractice200ResponseContacts.to_json())

# convert the object into a dict
create_practice200_response_contacts_dict = create_practice200_response_contacts_instance.to_dict()
# create an instance of CreatePractice200ResponseContacts from a dict
create_practice200_response_contacts_from_dict = CreatePractice200ResponseContacts.from_dict(create_practice200_response_contacts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


