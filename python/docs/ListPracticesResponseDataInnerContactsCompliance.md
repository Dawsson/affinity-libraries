# ListPracticesResponseDataInnerContactsCompliance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  |
**name** | **str** |  |
**phone** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices_response_data_inner_contacts_compliance import ListPracticesResponseDataInnerContactsCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of ListPracticesResponseDataInnerContactsCompliance from a JSON string
list_practices_response_data_inner_contacts_compliance_instance = ListPracticesResponseDataInnerContactsCompliance.from_json(json)
# print the JSON string representation of the object
print(ListPracticesResponseDataInnerContactsCompliance.to_json())

# convert the object into a dict
list_practices_response_data_inner_contacts_compliance_dict = list_practices_response_data_inner_contacts_compliance_instance.to_dict()
# create an instance of ListPracticesResponseDataInnerContactsCompliance from a dict
list_practices_response_data_inner_contacts_compliance_from_dict = ListPracticesResponseDataInnerContactsCompliance.from_dict(list_practices_response_data_inner_contacts_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


