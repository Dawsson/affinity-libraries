# CreateOrder200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**CreateOrder200ResponseOrder**](CreateOrder200ResponseOrder.md) |  |

## Example

```python
from affinity_sdk.models.create_order200_response import CreateOrder200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrder200Response from a JSON string
create_order200_response_instance = CreateOrder200Response.from_json(json)
# print the JSON string representation of the object
print(CreateOrder200Response.to_json())

# convert the object into a dict
create_order200_response_dict = create_order200_response_instance.to_dict()
# create an instance of CreateOrder200Response from a dict
create_order200_response_from_dict = CreateOrder200Response.from_dict(create_order200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


