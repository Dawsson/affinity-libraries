# GetPracticeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ListPracticesResponseDataInnerAddress**](ListPracticesResponseDataInnerAddress.md) |  |
**contacts** | [**ListPracticesResponseDataInnerContacts**](ListPracticesResponseDataInnerContacts.md) |  |
**created_at** | **str** |  |
**external_id** | **str** |  |
**legal_name** | **str** |  |
**livemode** | **bool** |  |
**name** | **str** |  |
**object** | **str** |  |
**prescribers** | [**List[ListPracticesResponseDataInnerPrescribersInner]**](ListPracticesResponseDataInnerPrescribersInner.md) |  |
**support_email** | **str** |  |
**support_phone** | **str** |  |
**timezone** | **str** |  |

## Example

```python
from affinity_sdk.models.get_practice_response import GetPracticeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPracticeResponse from a JSON string
get_practice_response_instance = GetPracticeResponse.from_json(json)
# print the JSON string representation of the object
print(GetPracticeResponse.to_json())

# convert the object into a dict
get_practice_response_dict = get_practice_response_instance.to_dict()
# create an instance of GetPracticeResponse from a dict
get_practice_response_from_dict = GetPracticeResponse.from_dict(get_practice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


