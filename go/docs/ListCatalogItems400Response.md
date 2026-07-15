# ListCatalogItems400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **NullableString** |  |
**Data** | Pointer to **interface{}** |  | [optional]
**Detail** | Pointer to **NullableString** |  | [optional]
**Instance** | Pointer to **NullableString** |  | [optional]
**RequestId** | Pointer to **NullableString** |  | [optional]
**Status** | **NullableFloat32** |  |
**Title** | **NullableString** |  |
**TraceId** | Pointer to **NullableString** |  | [optional]
**Type** | **NullableString** |  |

## Methods

### NewListCatalogItems400Response

`func NewListCatalogItems400Response(code NullableString, status NullableFloat32, title NullableString, type_ NullableString, ) *ListCatalogItems400Response`

NewListCatalogItems400Response instantiates a new ListCatalogItems400Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListCatalogItems400ResponseWithDefaults

`func NewListCatalogItems400ResponseWithDefaults() *ListCatalogItems400Response`

NewListCatalogItems400ResponseWithDefaults instantiates a new ListCatalogItems400Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ListCatalogItems400Response) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ListCatalogItems400Response) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ListCatalogItems400Response) SetCode(v string)`

SetCode sets Code field to given value.


### SetCodeNil

`func (o *ListCatalogItems400Response) SetCodeNil(b bool)`

 SetCodeNil sets the value for Code to be an explicit nil

### UnsetCode
`func (o *ListCatalogItems400Response) UnsetCode()`

UnsetCode ensures that no value is present for Code, not even an explicit nil
### GetData

`func (o *ListCatalogItems400Response) GetData() interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListCatalogItems400Response) GetDataOk() (*interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListCatalogItems400Response) SetData(v interface{})`

SetData sets Data field to given value.

### HasData

`func (o *ListCatalogItems400Response) HasData() bool`

HasData returns a boolean if a field has been set.

### SetDataNil

`func (o *ListCatalogItems400Response) SetDataNil(b bool)`

 SetDataNil sets the value for Data to be an explicit nil

### UnsetData
`func (o *ListCatalogItems400Response) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil
### GetDetail

`func (o *ListCatalogItems400Response) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *ListCatalogItems400Response) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *ListCatalogItems400Response) SetDetail(v string)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *ListCatalogItems400Response) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### SetDetailNil

`func (o *ListCatalogItems400Response) SetDetailNil(b bool)`

 SetDetailNil sets the value for Detail to be an explicit nil

### UnsetDetail
`func (o *ListCatalogItems400Response) UnsetDetail()`

UnsetDetail ensures that no value is present for Detail, not even an explicit nil
### GetInstance

`func (o *ListCatalogItems400Response) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ListCatalogItems400Response) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ListCatalogItems400Response) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ListCatalogItems400Response) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### SetInstanceNil

`func (o *ListCatalogItems400Response) SetInstanceNil(b bool)`

 SetInstanceNil sets the value for Instance to be an explicit nil

### UnsetInstance
`func (o *ListCatalogItems400Response) UnsetInstance()`

UnsetInstance ensures that no value is present for Instance, not even an explicit nil
### GetRequestId

`func (o *ListCatalogItems400Response) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *ListCatalogItems400Response) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *ListCatalogItems400Response) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *ListCatalogItems400Response) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *ListCatalogItems400Response) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *ListCatalogItems400Response) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetStatus

`func (o *ListCatalogItems400Response) GetStatus() float32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ListCatalogItems400Response) GetStatusOk() (*float32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ListCatalogItems400Response) SetStatus(v float32)`

SetStatus sets Status field to given value.


### SetStatusNil

`func (o *ListCatalogItems400Response) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *ListCatalogItems400Response) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetTitle

`func (o *ListCatalogItems400Response) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ListCatalogItems400Response) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ListCatalogItems400Response) SetTitle(v string)`

SetTitle sets Title field to given value.


### SetTitleNil

`func (o *ListCatalogItems400Response) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *ListCatalogItems400Response) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetTraceId

`func (o *ListCatalogItems400Response) GetTraceId() string`

GetTraceId returns the TraceId field if non-nil, zero value otherwise.

### GetTraceIdOk

`func (o *ListCatalogItems400Response) GetTraceIdOk() (*string, bool)`

GetTraceIdOk returns a tuple with the TraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceId

`func (o *ListCatalogItems400Response) SetTraceId(v string)`

SetTraceId sets TraceId field to given value.

### HasTraceId

`func (o *ListCatalogItems400Response) HasTraceId() bool`

HasTraceId returns a boolean if a field has been set.

### SetTraceIdNil

`func (o *ListCatalogItems400Response) SetTraceIdNil(b bool)`

 SetTraceIdNil sets the value for TraceId to be an explicit nil

### UnsetTraceId
`func (o *ListCatalogItems400Response) UnsetTraceId()`

UnsetTraceId ensures that no value is present for TraceId, not even an explicit nil
### GetType

`func (o *ListCatalogItems400Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ListCatalogItems400Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ListCatalogItems400Response) SetType(v string)`

SetType sets Type field to given value.


### SetTypeNil

`func (o *ListCatalogItems400Response) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *ListCatalogItems400Response) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


