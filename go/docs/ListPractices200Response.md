# ListPractices200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]ListPractices200ResponseDataInner**](ListPractices200ResponseDataInner.md) |  |
**HasMore** | **bool** |  |
**Object** | **string** |  |

## Methods

### NewListPractices200Response

`func NewListPractices200Response(data []ListPractices200ResponseDataInner, hasMore bool, object string, ) *ListPractices200Response`

NewListPractices200Response instantiates a new ListPractices200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPractices200ResponseWithDefaults

`func NewListPractices200ResponseWithDefaults() *ListPractices200Response`

NewListPractices200ResponseWithDefaults instantiates a new ListPractices200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListPractices200Response) GetData() []ListPractices200ResponseDataInner`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListPractices200Response) GetDataOk() (*[]ListPractices200ResponseDataInner, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListPractices200Response) SetData(v []ListPractices200ResponseDataInner)`

SetData sets Data field to given value.


### GetHasMore

`func (o *ListPractices200Response) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ListPractices200Response) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ListPractices200Response) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetObject

`func (o *ListPractices200Response) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ListPractices200Response) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ListPractices200Response) SetObject(v string)`

SetObject sets Object field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


