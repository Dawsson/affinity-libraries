# CreateOrderRequestAnyOfPrescription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Authorized** | **bool** |  | 
**SignedAt** | **time.Time** |  | 

## Methods

### NewCreateOrderRequestAnyOfPrescription

`func NewCreateOrderRequestAnyOfPrescription(authorized bool, signedAt time.Time, ) *CreateOrderRequestAnyOfPrescription`

NewCreateOrderRequestAnyOfPrescription instantiates a new CreateOrderRequestAnyOfPrescription object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestAnyOfPrescriptionWithDefaults

`func NewCreateOrderRequestAnyOfPrescriptionWithDefaults() *CreateOrderRequestAnyOfPrescription`

NewCreateOrderRequestAnyOfPrescriptionWithDefaults instantiates a new CreateOrderRequestAnyOfPrescription object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorized

`func (o *CreateOrderRequestAnyOfPrescription) GetAuthorized() bool`

GetAuthorized returns the Authorized field if non-nil, zero value otherwise.

### GetAuthorizedOk

`func (o *CreateOrderRequestAnyOfPrescription) GetAuthorizedOk() (*bool, bool)`

GetAuthorizedOk returns a tuple with the Authorized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorized

`func (o *CreateOrderRequestAnyOfPrescription) SetAuthorized(v bool)`

SetAuthorized sets Authorized field to given value.


### GetSignedAt

`func (o *CreateOrderRequestAnyOfPrescription) GetSignedAt() time.Time`

GetSignedAt returns the SignedAt field if non-nil, zero value otherwise.

### GetSignedAtOk

`func (o *CreateOrderRequestAnyOfPrescription) GetSignedAtOk() (*time.Time, bool)`

GetSignedAtOk returns a tuple with the SignedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedAt

`func (o *CreateOrderRequestAnyOfPrescription) SetSignedAt(v time.Time)`

SetSignedAt sets SignedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


