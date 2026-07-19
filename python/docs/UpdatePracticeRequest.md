# UpdatePracticeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CreateOrderRequestAnyOfPatientAddress**](CreateOrderRequestAnyOfPatientAddress.md) |  | [optional]
**attestations** | [**CreatePracticeRequestAttestations**](CreatePracticeRequestAttestations.md) |  | [optional]
**compliance_contact** | [**CreatePracticeRequestComplianceContact**](CreatePracticeRequestComplianceContact.md) |  | [optional]
**external_id** | **str** |  | [optional]
**legal_name** | **str** |  | [optional]
**metadata** | **Dict[str, object]** |  | [optional]
**name** | **str** |  | [optional]
**prescribers** | [**List[CreatePracticeRequestPrescribersInner]**](CreatePracticeRequestPrescribersInner.md) |  | [optional]
**primary_contact** | [**CreatePracticeRequestComplianceContact**](CreatePracticeRequestComplianceContact.md) |  | [optional]
**support_email** | **str** |  | [optional]
**support_phone** | **str** |  | [optional]
**timezone** | **str** |  | [optional]

## Example

```python
from affinity_sdk.models.update_practice_request import UpdatePracticeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePracticeRequest from a JSON string
update_practice_request_instance = UpdatePracticeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePracticeRequest.to_json())

# convert the object into a dict
update_practice_request_dict = update_practice_request_instance.to_dict()
# create an instance of UpdatePracticeRequest from a dict
update_practice_request_from_dict = UpdatePracticeRequest.from_dict(update_practice_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


