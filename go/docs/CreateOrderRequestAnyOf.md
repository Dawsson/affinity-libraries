# CreateOrderRequestAnyOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CatalogItemId** | **string** |  |
**PracticeId** | **string** |  |
**Directions** | **string** |  |
**ExternalOrderId** | **string** |  |
**Patient** | [**CreateOrderRequestAnyOfPatient**](CreateOrderRequestAnyOfPatient.md) |  |
**Prescriber** | [**CreateOrderRequestAnyOfPrescriber**](CreateOrderRequestAnyOfPrescriber.md) |  |
**Prescription** | [**CreateOrderRequestAnyOfPrescription**](CreateOrderRequestAnyOfPrescription.md) |  |
**Quantity** | Pointer to **int32** |  | [optional] [default to 1]
**ReplacesOrderId** | Pointer to **string** |  | [optional]

## Methods

### NewCreateOrderRequestAnyOf

`func NewCreateOrderRequestAnyOf(catalogItemId string, practiceId string, directions string, externalOrderId string, patient CreateOrderRequestAnyOfPatient, prescriber CreateOrderRequestAnyOfPrescriber, prescription CreateOrderRequestAnyOfPrescription, ) *CreateOrderRequestAnyOf`

NewCreateOrderRequestAnyOf instantiates a new CreateOrderRequestAnyOf object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestAnyOfWithDefaults

`func NewCreateOrderRequestAnyOfWithDefaults() *CreateOrderRequestAnyOf`

NewCreateOrderRequestAnyOfWithDefaults instantiates a new CreateOrderRequestAnyOf object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCatalogItemId

`func (o *CreateOrderRequestAnyOf) GetCatalogItemId() string`

GetCatalogItemId returns the CatalogItemId field if non-nil, zero value otherwise.

### GetCatalogItemIdOk

`func (o *CreateOrderRequestAnyOf) GetCatalogItemIdOk() (*string, bool)`

GetCatalogItemIdOk returns a tuple with the CatalogItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogItemId

`func (o *CreateOrderRequestAnyOf) SetCatalogItemId(v string)`

SetCatalogItemId sets CatalogItemId field to given value.


### GetPracticeId

`func (o *CreateOrderRequestAnyOf) GetPracticeId() string`

GetPracticeId returns the PracticeId field if non-nil, zero value otherwise.

### GetPracticeIdOk

`func (o *CreateOrderRequestAnyOf) GetPracticeIdOk() (*string, bool)`

GetPracticeIdOk returns a tuple with the PracticeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPracticeId

`func (o *CreateOrderRequestAnyOf) SetPracticeId(v string)`

SetPracticeId sets PracticeId field to given value.


### GetDirections

`func (o *CreateOrderRequestAnyOf) GetDirections() string`

GetDirections returns the Directions field if non-nil, zero value otherwise.

### GetDirectionsOk

`func (o *CreateOrderRequestAnyOf) GetDirectionsOk() (*string, bool)`

GetDirectionsOk returns a tuple with the Directions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirections

`func (o *CreateOrderRequestAnyOf) SetDirections(v string)`

SetDirections sets Directions field to given value.


### GetExternalOrderId

`func (o *CreateOrderRequestAnyOf) GetExternalOrderId() string`

GetExternalOrderId returns the ExternalOrderId field if non-nil, zero value otherwise.

### GetExternalOrderIdOk

`func (o *CreateOrderRequestAnyOf) GetExternalOrderIdOk() (*string, bool)`

GetExternalOrderIdOk returns a tuple with the ExternalOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrderId

`func (o *CreateOrderRequestAnyOf) SetExternalOrderId(v string)`

SetExternalOrderId sets ExternalOrderId field to given value.


### GetPatient

`func (o *CreateOrderRequestAnyOf) GetPatient() CreateOrderRequestAnyOfPatient`

GetPatient returns the Patient field if non-nil, zero value otherwise.

### GetPatientOk

`func (o *CreateOrderRequestAnyOf) GetPatientOk() (*CreateOrderRequestAnyOfPatient, bool)`

GetPatientOk returns a tuple with the Patient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatient

`func (o *CreateOrderRequestAnyOf) SetPatient(v CreateOrderRequestAnyOfPatient)`

SetPatient sets Patient field to given value.


### GetPrescriber

`func (o *CreateOrderRequestAnyOf) GetPrescriber() CreateOrderRequestAnyOfPrescriber`

GetPrescriber returns the Prescriber field if non-nil, zero value otherwise.

### GetPrescriberOk

`func (o *CreateOrderRequestAnyOf) GetPrescriberOk() (*CreateOrderRequestAnyOfPrescriber, bool)`

GetPrescriberOk returns a tuple with the Prescriber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriber

`func (o *CreateOrderRequestAnyOf) SetPrescriber(v CreateOrderRequestAnyOfPrescriber)`

SetPrescriber sets Prescriber field to given value.


### GetPrescription

`func (o *CreateOrderRequestAnyOf) GetPrescription() CreateOrderRequestAnyOfPrescription`

GetPrescription returns the Prescription field if non-nil, zero value otherwise.

### GetPrescriptionOk

`func (o *CreateOrderRequestAnyOf) GetPrescriptionOk() (*CreateOrderRequestAnyOfPrescription, bool)`

GetPrescriptionOk returns a tuple with the Prescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescription

`func (o *CreateOrderRequestAnyOf) SetPrescription(v CreateOrderRequestAnyOfPrescription)`

SetPrescription sets Prescription field to given value.


### GetQuantity

`func (o *CreateOrderRequestAnyOf) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CreateOrderRequestAnyOf) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CreateOrderRequestAnyOf) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *CreateOrderRequestAnyOf) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetReplacesOrderId

`func (o *CreateOrderRequestAnyOf) GetReplacesOrderId() string`

GetReplacesOrderId returns the ReplacesOrderId field if non-nil, zero value otherwise.

### GetReplacesOrderIdOk

`func (o *CreateOrderRequestAnyOf) GetReplacesOrderIdOk() (*string, bool)`

GetReplacesOrderIdOk returns a tuple with the ReplacesOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacesOrderId

`func (o *CreateOrderRequestAnyOf) SetReplacesOrderId(v string)`

SetReplacesOrderId sets ReplacesOrderId field to given value.

### HasReplacesOrderId

`func (o *CreateOrderRequestAnyOf) HasReplacesOrderId() bool`

HasReplacesOrderId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


