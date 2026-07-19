# CreatePracticeRequestComplianceContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  |
**name** | **str** |  |
**phone** | **str** |  | [optional]

## Example

```python
from affinity_sdk.models.create_practice_request_compliance_contact import CreatePracticeRequestComplianceContact

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePracticeRequestComplianceContact from a JSON string
create_practice_request_compliance_contact_instance = CreatePracticeRequestComplianceContact.from_json(json)
# print the JSON string representation of the object
print(CreatePracticeRequestComplianceContact.to_json())

# convert the object into a dict
create_practice_request_compliance_contact_dict = create_practice_request_compliance_contact_instance.to_dict()
# create an instance of CreatePracticeRequestComplianceContact from a dict
create_practice_request_compliance_contact_from_dict = CreatePracticeRequestComplianceContact.from_dict(create_practice_request_compliance_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


