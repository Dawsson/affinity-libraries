# ProblemError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  |
**detail** | **str** |  |
**location** | **str** |  |
**pointer** | **str** |  |

## Example

```python
from affinity_sdk.models.problem_error import ProblemError

# TODO update the JSON string below
json = "{}"
# create an instance of ProblemError from a JSON string
problem_error_instance = ProblemError.from_json(json)
# print the JSON string representation of the object
print(ProblemError.to_json())

# convert the object into a dict
problem_error_dict = problem_error_instance.to_dict()
# create an instance of ProblemError from a dict
problem_error_from_dict = ProblemError.from_dict(problem_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


