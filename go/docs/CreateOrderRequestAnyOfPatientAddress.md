# CreateOrderRequestAnyOfPatientAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**City** | **string** |  |
**Country** | Pointer to **string** |  | [optional] [default to "US"]
**Line1** | **string** |  |
**Line2** | Pointer to **NullableString** |  | [optional]
**PostalCode** | **string** |  |
**State** | **string** |  |

## Methods

### NewCreateOrderRequestAnyOfPatientAddress

`func NewCreateOrderRequestAnyOfPatientAddress(city string, line1 string, postalCode string, state string, ) *CreateOrderRequestAnyOfPatientAddress`

NewCreateOrderRequestAnyOfPatientAddress instantiates a new CreateOrderRequestAnyOfPatientAddress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestAnyOfPatientAddressWithDefaults

`func NewCreateOrderRequestAnyOfPatientAddressWithDefaults() *CreateOrderRequestAnyOfPatientAddress`

NewCreateOrderRequestAnyOfPatientAddressWithDefaults instantiates a new CreateOrderRequestAnyOfPatientAddress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCity

`func (o *CreateOrderRequestAnyOfPatientAddress) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *CreateOrderRequestAnyOfPatientAddress) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *CreateOrderRequestAnyOfPatientAddress) SetCity(v string)`

SetCity sets City field to given value.


### GetCountry

`func (o *CreateOrderRequestAnyOfPatientAddress) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *CreateOrderRequestAnyOfPatientAddress) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *CreateOrderRequestAnyOfPatientAddress) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *CreateOrderRequestAnyOfPatientAddress) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetLine1

`func (o *CreateOrderRequestAnyOfPatientAddress) GetLine1() string`

GetLine1 returns the Line1 field if non-nil, zero value otherwise.

### GetLine1Ok

`func (o *CreateOrderRequestAnyOfPatientAddress) GetLine1Ok() (*string, bool)`

GetLine1Ok returns a tuple with the Line1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine1

`func (o *CreateOrderRequestAnyOfPatientAddress) SetLine1(v string)`

SetLine1 sets Line1 field to given value.


### GetLine2

`func (o *CreateOrderRequestAnyOfPatientAddress) GetLine2() string`

GetLine2 returns the Line2 field if non-nil, zero value otherwise.

### GetLine2Ok

`func (o *CreateOrderRequestAnyOfPatientAddress) GetLine2Ok() (*string, bool)`

GetLine2Ok returns a tuple with the Line2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine2

`func (o *CreateOrderRequestAnyOfPatientAddress) SetLine2(v string)`

SetLine2 sets Line2 field to given value.

### HasLine2

`func (o *CreateOrderRequestAnyOfPatientAddress) HasLine2() bool`

HasLine2 returns a boolean if a field has been set.

### SetLine2Nil

`func (o *CreateOrderRequestAnyOfPatientAddress) SetLine2Nil(b bool)`

 SetLine2Nil sets the value for Line2 to be an explicit nil

### UnsetLine2
`func (o *CreateOrderRequestAnyOfPatientAddress) UnsetLine2()`

UnsetLine2 ensures that no value is present for Line2, not even an explicit nil
### GetPostalCode

`func (o *CreateOrderRequestAnyOfPatientAddress) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *CreateOrderRequestAnyOfPatientAddress) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *CreateOrderRequestAnyOfPatientAddress) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.


### GetState

`func (o *CreateOrderRequestAnyOfPatientAddress) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *CreateOrderRequestAnyOfPatientAddress) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *CreateOrderRequestAnyOfPatientAddress) SetState(v string)`

SetState sets State field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


