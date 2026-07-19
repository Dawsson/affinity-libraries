# CreatePracticeRequestAttestations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_practice_relationship** | **bool** |  |
**authorized_phi_transfer** | **bool** |  |
**minimum_necessary_phi** | **bool** |  |
**provider_data_accuracy** | **bool** |  |

## Example

```python
from affinity_sdk.models.create_practice_request_attestations import CreatePracticeRequestAttestations

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePracticeRequestAttestations from a JSON string
create_practice_request_attestations_instance = CreatePracticeRequestAttestations.from_json(json)
# print the JSON string representation of the object
print(CreatePracticeRequestAttestations.to_json())

# convert the object into a dict
create_practice_request_attestations_dict = create_practice_request_attestations_instance.to_dict()
# create an instance of CreatePracticeRequestAttestations from a dict
create_practice_request_attestations_from_dict = CreatePracticeRequestAttestations.from_dict(create_practice_request_attestations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


