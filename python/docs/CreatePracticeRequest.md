# CreatePracticeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CreateOrderRequestAnyOfPatientAddress**](CreateOrderRequestAnyOfPatientAddress.md) |  |
**attestations** | [**CreatePracticeRequestAttestations**](CreatePracticeRequestAttestations.md) |  |
**compliance_contact** | [**CreatePracticeRequestComplianceContact**](CreatePracticeRequestComplianceContact.md) |  | [optional]
**external_id** | **str** |  | [optional]
**legal_name** | **str** |  | [optional]
**metadata** | **Dict[str, object]** |  | [optional]
**name** | **str** |  |
**prescribers** | [**List[CreatePracticeRequestPrescribersInner]**](CreatePracticeRequestPrescribersInner.md) |  | [optional] [default to []]
**primary_contact** | [**CreatePracticeRequestComplianceContact**](CreatePracticeRequestComplianceContact.md) |  | [optional]
**support_email** | **str** |  | [optional]
**support_phone** | **str** |  | [optional]
**timezone** | **str** |  | [optional] [default to 'America/Detroit']

## Example

```python
from affinity_sdk.models.create_practice_request import CreatePracticeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePracticeRequest from a JSON string
create_practice_request_instance = CreatePracticeRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePracticeRequest.to_json())

# convert the object into a dict
create_practice_request_dict = create_practice_request_instance.to_dict()
# create an instance of CreatePracticeRequest from a dict
create_practice_request_from_dict = CreatePracticeRequest.from_dict(create_practice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


