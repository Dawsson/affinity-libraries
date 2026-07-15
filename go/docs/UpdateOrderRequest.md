# UpdateOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Quantity** | Pointer to **NullableFloat32** |  | [optional] 

## Methods

### NewUpdateOrderRequest

`func NewUpdateOrderRequest() *UpdateOrderRequest`

NewUpdateOrderRequest instantiates a new UpdateOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateOrderRequestWithDefaults

`func NewUpdateOrderRequestWithDefaults() *UpdateOrderRequest`

NewUpdateOrderRequestWithDefaults instantiates a new UpdateOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuantity

`func (o *UpdateOrderRequest) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *UpdateOrderRequest) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *UpdateOrderRequest) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *UpdateOrderRequest) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### SetQuantityNil

`func (o *UpdateOrderRequest) SetQuantityNil(b bool)`

 SetQuantityNil sets the value for Quantity to be an explicit nil

### UnsetQuantity
`func (o *UpdateOrderRequest) UnsetQuantity()`

UnsetQuantity ensures that no value is present for Quantity, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


