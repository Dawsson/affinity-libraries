# ListOrderEventsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]ListOrderEventsResponseDataInner**](ListOrderEventsResponseDataInner.md) |  |
**HasMore** | **bool** |  |
**Object** | **string** |  |
**Url** | **string** |  |

## Methods

### NewListOrderEventsResponse

`func NewListOrderEventsResponse(data []ListOrderEventsResponseDataInner, hasMore bool, object string, url string, ) *ListOrderEventsResponse`

NewListOrderEventsResponse instantiates a new ListOrderEventsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListOrderEventsResponseWithDefaults

`func NewListOrderEventsResponseWithDefaults() *ListOrderEventsResponse`

NewListOrderEventsResponseWithDefaults instantiates a new ListOrderEventsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListOrderEventsResponse) GetData() []ListOrderEventsResponseDataInner`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListOrderEventsResponse) GetDataOk() (*[]ListOrderEventsResponseDataInner, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListOrderEventsResponse) SetData(v []ListOrderEventsResponseDataInner)`

SetData sets Data field to given value.


### GetHasMore

`func (o *ListOrderEventsResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ListOrderEventsResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ListOrderEventsResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetObject

`func (o *ListOrderEventsResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ListOrderEventsResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ListOrderEventsResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetUrl

`func (o *ListOrderEventsResponse) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ListOrderEventsResponse) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ListOrderEventsResponse) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


