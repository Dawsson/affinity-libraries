# ListOrders400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** |  |
**Data** | Pointer to **interface{}** |  | [optional]
**Detail** | Pointer to **string** |  | [optional]
**Instance** | Pointer to **string** |  | [optional]
**RequestId** | Pointer to **string** |  | [optional]
**Status** | **float32** |  |
**Title** | **string** |  |
**TraceId** | Pointer to **string** |  | [optional]
**Type** | **string** |  |

## Methods

### NewListOrders400Response

`func NewListOrders400Response(code string, status float32, title string, type_ string, ) *ListOrders400Response`

NewListOrders400Response instantiates a new ListOrders400Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListOrders400ResponseWithDefaults

`func NewListOrders400ResponseWithDefaults() *ListOrders400Response`

NewListOrders400ResponseWithDefaults instantiates a new ListOrders400Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ListOrders400Response) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ListOrders400Response) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ListOrders400Response) SetCode(v string)`

SetCode sets Code field to given value.


### GetData

`func (o *ListOrders400Response) GetData() interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListOrders400Response) GetDataOk() (*interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListOrders400Response) SetData(v interface{})`

SetData sets Data field to given value.

### HasData

`func (o *ListOrders400Response) HasData() bool`

HasData returns a boolean if a field has been set.

### SetDataNil

`func (o *ListOrders400Response) SetDataNil(b bool)`

 SetDataNil sets the value for Data to be an explicit nil

### UnsetData
`func (o *ListOrders400Response) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil
### GetDetail

`func (o *ListOrders400Response) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *ListOrders400Response) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *ListOrders400Response) SetDetail(v string)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *ListOrders400Response) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetInstance

`func (o *ListOrders400Response) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ListOrders400Response) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ListOrders400Response) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ListOrders400Response) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetRequestId

`func (o *ListOrders400Response) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *ListOrders400Response) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *ListOrders400Response) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *ListOrders400Response) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### GetStatus

`func (o *ListOrders400Response) GetStatus() float32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ListOrders400Response) GetStatusOk() (*float32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ListOrders400Response) SetStatus(v float32)`

SetStatus sets Status field to given value.


### GetTitle

`func (o *ListOrders400Response) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ListOrders400Response) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ListOrders400Response) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetTraceId

`func (o *ListOrders400Response) GetTraceId() string`

GetTraceId returns the TraceId field if non-nil, zero value otherwise.

### GetTraceIdOk

`func (o *ListOrders400Response) GetTraceIdOk() (*string, bool)`

GetTraceIdOk returns a tuple with the TraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceId

`func (o *ListOrders400Response) SetTraceId(v string)`

SetTraceId sets TraceId field to given value.

### HasTraceId

`func (o *ListOrders400Response) HasTraceId() bool`

HasTraceId returns a boolean if a field has been set.

### GetType

`func (o *ListOrders400Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ListOrders400Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ListOrders400Response) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


