# CreateOrderRequestAnyOfPatient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | [**CreateOrderRequestAnyOfPatientAddress**](CreateOrderRequestAnyOfPatientAddress.md) |  | 
**DateOfBirth** | **string** |  | 
**Email** | Pointer to **string** |  | [optional] 
**ExternalPatientId** | **string** |  | 
**Name** | **string** |  | 
**Phone** | Pointer to **string** |  | [optional] 
**State** | **string** |  | 

## Methods

### NewCreateOrderRequestAnyOfPatient

`func NewCreateOrderRequestAnyOfPatient(address CreateOrderRequestAnyOfPatientAddress, dateOfBirth string, externalPatientId string, name string, state string, ) *CreateOrderRequestAnyOfPatient`

NewCreateOrderRequestAnyOfPatient instantiates a new CreateOrderRequestAnyOfPatient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestAnyOfPatientWithDefaults

`func NewCreateOrderRequestAnyOfPatientWithDefaults() *CreateOrderRequestAnyOfPatient`

NewCreateOrderRequestAnyOfPatientWithDefaults instantiates a new CreateOrderRequestAnyOfPatient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *CreateOrderRequestAnyOfPatient) GetAddress() CreateOrderRequestAnyOfPatientAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CreateOrderRequestAnyOfPatient) GetAddressOk() (*CreateOrderRequestAnyOfPatientAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CreateOrderRequestAnyOfPatient) SetAddress(v CreateOrderRequestAnyOfPatientAddress)`

SetAddress sets Address field to given value.


### GetDateOfBirth

`func (o *CreateOrderRequestAnyOfPatient) GetDateOfBirth() string`

GetDateOfBirth returns the DateOfBirth field if non-nil, zero value otherwise.

### GetDateOfBirthOk

`func (o *CreateOrderRequestAnyOfPatient) GetDateOfBirthOk() (*string, bool)`

GetDateOfBirthOk returns a tuple with the DateOfBirth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOfBirth

`func (o *CreateOrderRequestAnyOfPatient) SetDateOfBirth(v string)`

SetDateOfBirth sets DateOfBirth field to given value.


### GetEmail

`func (o *CreateOrderRequestAnyOfPatient) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CreateOrderRequestAnyOfPatient) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CreateOrderRequestAnyOfPatient) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *CreateOrderRequestAnyOfPatient) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetExternalPatientId

`func (o *CreateOrderRequestAnyOfPatient) GetExternalPatientId() string`

GetExternalPatientId returns the ExternalPatientId field if non-nil, zero value otherwise.

### GetExternalPatientIdOk

`func (o *CreateOrderRequestAnyOfPatient) GetExternalPatientIdOk() (*string, bool)`

GetExternalPatientIdOk returns a tuple with the ExternalPatientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalPatientId

`func (o *CreateOrderRequestAnyOfPatient) SetExternalPatientId(v string)`

SetExternalPatientId sets ExternalPatientId field to given value.


### GetName

`func (o *CreateOrderRequestAnyOfPatient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateOrderRequestAnyOfPatient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateOrderRequestAnyOfPatient) SetName(v string)`

SetName sets Name field to given value.


### GetPhone

`func (o *CreateOrderRequestAnyOfPatient) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *CreateOrderRequestAnyOfPatient) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *CreateOrderRequestAnyOfPatient) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *CreateOrderRequestAnyOfPatient) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetState

`func (o *CreateOrderRequestAnyOfPatient) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *CreateOrderRequestAnyOfPatient) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *CreateOrderRequestAnyOfPatient) SetState(v string)`

SetState sets State field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


