# ListPracticesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]ListPracticesResponseDataInner**](ListPracticesResponseDataInner.md) |  |
**HasMore** | **bool** |  |
**Object** | **string** |  |
**Url** | **string** |  |

## Methods

### NewListPracticesResponse

`func NewListPracticesResponse(data []ListPracticesResponseDataInner, hasMore bool, object string, url string, ) *ListPracticesResponse`

NewListPracticesResponse instantiates a new ListPracticesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPracticesResponseWithDefaults

`func NewListPracticesResponseWithDefaults() *ListPracticesResponse`

NewListPracticesResponseWithDefaults instantiates a new ListPracticesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListPracticesResponse) GetData() []ListPracticesResponseDataInner`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListPracticesResponse) GetDataOk() (*[]ListPracticesResponseDataInner, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListPracticesResponse) SetData(v []ListPracticesResponseDataInner)`

SetData sets Data field to given value.


### GetHasMore

`func (o *ListPracticesResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ListPracticesResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ListPracticesResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetObject

`func (o *ListPracticesResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ListPracticesResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ListPracticesResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetUrl

`func (o *ListPracticesResponse) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ListPracticesResponse) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ListPracticesResponse) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


