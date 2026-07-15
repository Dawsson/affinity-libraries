# CreatePracticeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CreatePracticeRequestAddress**](CreatePracticeRequestAddress.md) |  | 
**attestations** | [**CreatePracticeRequestAttestations**](CreatePracticeRequestAttestations.md) |  | 
**compliance_contact** | [**ListPractices200ResponseDataInnerContactsPrimary**](ListPractices200ResponseDataInnerContactsPrimary.md) |  | [optional] 
**external_id** | **str** |  | [optional] 
**legal_name** | **str** |  | [optional] 
**name** | **str** |  | 
**prescribers** | [**List[CreatePracticeRequestPrescribersInner]**](CreatePracticeRequestPrescribersInner.md) |  | [optional] 
**primary_contact** | [**ListPractices200ResponseDataInnerContactsPrimary**](ListPractices200ResponseDataInnerContactsPrimary.md) |  | [optional] 
**support_email** | **str** |  | [optional] 
**support_phone** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 

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


