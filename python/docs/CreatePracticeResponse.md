# CreatePracticeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ListPracticesResponseDataInnerAddress**](ListPracticesResponseDataInnerAddress.md) |  |
**contacts** | [**ListPracticesResponseDataInnerContacts**](ListPracticesResponseDataInnerContacts.md) |  |
**created_at** | **datetime** |  |
**external_id** | **str** |  |
**id** | **str** |  |
**legal_name** | **str** |  |
**livemode** | **bool** |  |
**metadata** | **Dict[str, object]** |  |
**name** | **str** |  |
**object** | **str** |  |
**prescribers** | [**List[ListPracticesResponseDataInnerPrescribersInner]**](ListPracticesResponseDataInnerPrescribersInner.md) |  |
**production_access** | **str** |  |
**support_email** | **str** |  |
**support_phone** | **str** |  |
**timezone** | **str** |  |

## Example

```python
from affinity_sdk.models.create_practice_response import CreatePracticeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePracticeResponse from a JSON string
create_practice_response_instance = CreatePracticeResponse.from_json(json)
# print the JSON string representation of the object
print(CreatePracticeResponse.to_json())

# convert the object into a dict
create_practice_response_dict = create_practice_response_instance.to_dict()
# create an instance of CreatePracticeResponse from a dict
create_practice_response_from_dict = CreatePracticeResponse.from_dict(create_practice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


