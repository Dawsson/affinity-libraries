# CreatePractice200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CreatePractice200ResponseAddress**](CreatePractice200ResponseAddress.md) |  | 
**contacts** | [**CreatePractice200ResponseContacts**](CreatePractice200ResponseContacts.md) |  | 
**created** | **float** |  | 
**external_id** | **str** |  | 
**id** | **str** |  | 
**legal_name** | **str** |  | 
**name** | **str** |  | 
**object** | **str** |  | 
**prescribers** | [**List[CreatePracticeRequestPrescribersInner]**](CreatePracticeRequestPrescribersInner.md) |  | 
**support_email** | **str** |  | 
**support_phone** | **str** |  | 
**timezone** | **str** |  | 

## Example

```python
from affinity_sdk.models.create_practice200_response import CreatePractice200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePractice200Response from a JSON string
create_practice200_response_instance = CreatePractice200Response.from_json(json)
# print the JSON string representation of the object
print(CreatePractice200Response.to_json())

# convert the object into a dict
create_practice200_response_dict = create_practice200_response_instance.to_dict()
# create an instance of CreatePractice200Response from a dict
create_practice200_response_from_dict = CreatePractice200Response.from_dict(create_practice200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


