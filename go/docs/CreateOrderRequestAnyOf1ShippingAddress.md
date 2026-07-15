# CreateOrderRequestAnyOf1ShippingAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**City** | **string** |  | 
**Country** | Pointer to **string** |  | [optional] [default to "US"]
**Line1** | **NullableString** |  | 
**Line2** | Pointer to **NullableString** |  | [optional] 
**PostalCode** | **string** |  | 
**State** | **string** |  | 

## Methods

### NewCreateOrderRequestAnyOf1ShippingAddress

`func NewCreateOrderRequestAnyOf1ShippingAddress(city string, line1 NullableString, postalCode string, state string, ) *CreateOrderRequestAnyOf1ShippingAddress`

NewCreateOrderRequestAnyOf1ShippingAddress instantiates a new CreateOrderRequestAnyOf1ShippingAddress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestAnyOf1ShippingAddressWithDefaults

`func NewCreateOrderRequestAnyOf1ShippingAddressWithDefaults() *CreateOrderRequestAnyOf1ShippingAddress`

NewCreateOrderRequestAnyOf1ShippingAddressWithDefaults instantiates a new CreateOrderRequestAnyOf1ShippingAddress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCity

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetCity(v string)`

SetCity sets City field to given value.


### GetCountry

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *CreateOrderRequestAnyOf1ShippingAddress) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetLine1

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetLine1() string`

GetLine1 returns the Line1 field if non-nil, zero value otherwise.

### GetLine1Ok

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetLine1Ok() (*string, bool)`

GetLine1Ok returns a tuple with the Line1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine1

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetLine1(v string)`

SetLine1 sets Line1 field to given value.


### SetLine1Nil

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetLine1Nil(b bool)`

 SetLine1Nil sets the value for Line1 to be an explicit nil

### UnsetLine1
`func (o *CreateOrderRequestAnyOf1ShippingAddress) UnsetLine1()`

UnsetLine1 ensures that no value is present for Line1, not even an explicit nil
### GetLine2

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetLine2() string`

GetLine2 returns the Line2 field if non-nil, zero value otherwise.

### GetLine2Ok

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetLine2Ok() (*string, bool)`

GetLine2Ok returns a tuple with the Line2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine2

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetLine2(v string)`

SetLine2 sets Line2 field to given value.

### HasLine2

`func (o *CreateOrderRequestAnyOf1ShippingAddress) HasLine2() bool`

HasLine2 returns a boolean if a field has been set.

### SetLine2Nil

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetLine2Nil(b bool)`

 SetLine2Nil sets the value for Line2 to be an explicit nil

### UnsetLine2
`func (o *CreateOrderRequestAnyOf1ShippingAddress) UnsetLine2()`

UnsetLine2 ensures that no value is present for Line2, not even an explicit nil
### GetPostalCode

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.


### GetState

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *CreateOrderRequestAnyOf1ShippingAddress) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *CreateOrderRequestAnyOf1ShippingAddress) SetState(v string)`

SetState sets State field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


