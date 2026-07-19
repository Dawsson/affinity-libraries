# Problem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  |
**detail** | **str** |  |
**errors** | [**List[ProblemError]**](ProblemError.md) |  | [optional]
**instance** | **str** |  |
**request_id** | **str** |  |
**status** | **int** |  |
**title** | **str** |  |
**type** | **str** |  |

## Example

```python
from affinity_sdk.models.problem import Problem

# TODO update the JSON string below
json = "{}"
# create an instance of Problem from a JSON string
problem_instance = Problem.from_json(json)
# print the JSON string representation of the object
print(Problem.to_json())

# convert the object into a dict
problem_dict = problem_instance.to_dict()
# create an instance of Problem from a dict
problem_from_dict = Problem.from_dict(problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


