# ListWebhookEndpointsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]ListWebhookEndpointsResponseDataInner**](ListWebhookEndpointsResponseDataInner.md) |  |
**HasMore** | **bool** |  |
**Object** | **string** |  |
**Url** | **string** |  |

## Methods

### NewListWebhookEndpointsResponse

`func NewListWebhookEndpointsResponse(data []ListWebhookEndpointsResponseDataInner, hasMore bool, object string, url string, ) *ListWebhookEndpointsResponse`

NewListWebhookEndpointsResponse instantiates a new ListWebhookEndpointsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListWebhookEndpointsResponseWithDefaults

`func NewListWebhookEndpointsResponseWithDefaults() *ListWebhookEndpointsResponse`

NewListWebhookEndpointsResponseWithDefaults instantiates a new ListWebhookEndpointsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListWebhookEndpointsResponse) GetData() []ListWebhookEndpointsResponseDataInner`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListWebhookEndpointsResponse) GetDataOk() (*[]ListWebhookEndpointsResponseDataInner, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListWebhookEndpointsResponse) SetData(v []ListWebhookEndpointsResponseDataInner)`

SetData sets Data field to given value.


### GetHasMore

`func (o *ListWebhookEndpointsResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ListWebhookEndpointsResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ListWebhookEndpointsResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetObject

`func (o *ListWebhookEndpointsResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ListWebhookEndpointsResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ListWebhookEndpointsResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetUrl

`func (o *ListWebhookEndpointsResponse) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ListWebhookEndpointsResponse) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ListWebhookEndpointsResponse) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


