# ListOrderEvents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[ListOrderEvents200ResponseEventsInner]**](ListOrderEvents200ResponseEventsInner.md) |  | 

## Example

```python
from affinity_sdk.models.list_order_events200_response import ListOrderEvents200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrderEvents200Response from a JSON string
list_order_events200_response_instance = ListOrderEvents200Response.from_json(json)
# print the JSON string representation of the object
print(ListOrderEvents200Response.to_json())

# convert the object into a dict
list_order_events200_response_dict = list_order_events200_response_instance.to_dict()
# create an instance of ListOrderEvents200Response from a dict
list_order_events200_response_from_dict = ListOrderEvents200Response.from_dict(list_order_events200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


