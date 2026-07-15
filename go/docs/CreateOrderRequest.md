# CreateOrderRequest

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
**PharmacyOrganizationId** | **string** |  |
**PrescriptionId** | **string** |  |
**PrescriptionVersionId** | **string** |  |
**RegisteredLocationId** | **string** |  |
**ShippingAddress** | [**CreateOrderRequestAnyOf1ShippingAddress**](CreateOrderRequestAnyOf1ShippingAddress.md) |  |

## Methods

### NewCreateOrderRequest

`func NewCreateOrderRequest(catalogItemId string, practiceId string, directions string, externalOrderId string, patient CreateOrderRequestAnyOfPatient, prescriber CreateOrderRequestAnyOfPrescriber, prescription CreateOrderRequestAnyOfPrescription, pharmacyOrganizationId string, prescriptionId string, prescriptionVersionId string, registeredLocationId string, shippingAddress CreateOrderRequestAnyOf1ShippingAddress, ) *CreateOrderRequest`

NewCreateOrderRequest instantiates a new CreateOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestWithDefaults

`func NewCreateOrderRequestWithDefaults() *CreateOrderRequest`

NewCreateOrderRequestWithDefaults instantiates a new CreateOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCatalogItemId

`func (o *CreateOrderRequest) GetCatalogItemId() string`

GetCatalogItemId returns the CatalogItemId field if non-nil, zero value otherwise.

### GetCatalogItemIdOk

`func (o *CreateOrderRequest) GetCatalogItemIdOk() (*string, bool)`

GetCatalogItemIdOk returns a tuple with the CatalogItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogItemId

`func (o *CreateOrderRequest) SetCatalogItemId(v string)`

SetCatalogItemId sets CatalogItemId field to given value.


### GetPracticeId

`func (o *CreateOrderRequest) GetPracticeId() string`

GetPracticeId returns the PracticeId field if non-nil, zero value otherwise.

### GetPracticeIdOk

`func (o *CreateOrderRequest) GetPracticeIdOk() (*string, bool)`

GetPracticeIdOk returns a tuple with the PracticeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPracticeId

`func (o *CreateOrderRequest) SetPracticeId(v string)`

SetPracticeId sets PracticeId field to given value.


### GetDirections

`func (o *CreateOrderRequest) GetDirections() string`

GetDirections returns the Directions field if non-nil, zero value otherwise.

### GetDirectionsOk

`func (o *CreateOrderRequest) GetDirectionsOk() (*string, bool)`

GetDirectionsOk returns a tuple with the Directions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirections

`func (o *CreateOrderRequest) SetDirections(v string)`

SetDirections sets Directions field to given value.


### GetExternalOrderId

`func (o *CreateOrderRequest) GetExternalOrderId() string`

GetExternalOrderId returns the ExternalOrderId field if non-nil, zero value otherwise.

### GetExternalOrderIdOk

`func (o *CreateOrderRequest) GetExternalOrderIdOk() (*string, bool)`

GetExternalOrderIdOk returns a tuple with the ExternalOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrderId

`func (o *CreateOrderRequest) SetExternalOrderId(v string)`

SetExternalOrderId sets ExternalOrderId field to given value.


### GetPatient

`func (o *CreateOrderRequest) GetPatient() CreateOrderRequestAnyOfPatient`

GetPatient returns the Patient field if non-nil, zero value otherwise.

### GetPatientOk

`func (o *CreateOrderRequest) GetPatientOk() (*CreateOrderRequestAnyOfPatient, bool)`

GetPatientOk returns a tuple with the Patient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatient

`func (o *CreateOrderRequest) SetPatient(v CreateOrderRequestAnyOfPatient)`

SetPatient sets Patient field to given value.


### GetPrescriber

`func (o *CreateOrderRequest) GetPrescriber() CreateOrderRequestAnyOfPrescriber`

GetPrescriber returns the Prescriber field if non-nil, zero value otherwise.

### GetPrescriberOk

`func (o *CreateOrderRequest) GetPrescriberOk() (*CreateOrderRequestAnyOfPrescriber, bool)`

GetPrescriberOk returns a tuple with the Prescriber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriber

`func (o *CreateOrderRequest) SetPrescriber(v CreateOrderRequestAnyOfPrescriber)`

SetPrescriber sets Prescriber field to given value.


### GetPrescription

`func (o *CreateOrderRequest) GetPrescription() CreateOrderRequestAnyOfPrescription`

GetPrescription returns the Prescription field if non-nil, zero value otherwise.

### GetPrescriptionOk

`func (o *CreateOrderRequest) GetPrescriptionOk() (*CreateOrderRequestAnyOfPrescription, bool)`

GetPrescriptionOk returns a tuple with the Prescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescription

`func (o *CreateOrderRequest) SetPrescription(v CreateOrderRequestAnyOfPrescription)`

SetPrescription sets Prescription field to given value.


### GetQuantity

`func (o *CreateOrderRequest) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CreateOrderRequest) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CreateOrderRequest) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *CreateOrderRequest) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetReplacesOrderId

`func (o *CreateOrderRequest) GetReplacesOrderId() string`

GetReplacesOrderId returns the ReplacesOrderId field if non-nil, zero value otherwise.

### GetReplacesOrderIdOk

`func (o *CreateOrderRequest) GetReplacesOrderIdOk() (*string, bool)`

GetReplacesOrderIdOk returns a tuple with the ReplacesOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacesOrderId

`func (o *CreateOrderRequest) SetReplacesOrderId(v string)`

SetReplacesOrderId sets ReplacesOrderId field to given value.

### HasReplacesOrderId

`func (o *CreateOrderRequest) HasReplacesOrderId() bool`

HasReplacesOrderId returns a boolean if a field has been set.

### GetPharmacyOrganizationId

`func (o *CreateOrderRequest) GetPharmacyOrganizationId() string`

GetPharmacyOrganizationId returns the PharmacyOrganizationId field if non-nil, zero value otherwise.

### GetPharmacyOrganizationIdOk

`func (o *CreateOrderRequest) GetPharmacyOrganizationIdOk() (*string, bool)`

GetPharmacyOrganizationIdOk returns a tuple with the PharmacyOrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPharmacyOrganizationId

`func (o *CreateOrderRequest) SetPharmacyOrganizationId(v string)`

SetPharmacyOrganizationId sets PharmacyOrganizationId field to given value.


### GetPrescriptionId

`func (o *CreateOrderRequest) GetPrescriptionId() string`

GetPrescriptionId returns the PrescriptionId field if non-nil, zero value otherwise.

### GetPrescriptionIdOk

`func (o *CreateOrderRequest) GetPrescriptionIdOk() (*string, bool)`

GetPrescriptionIdOk returns a tuple with the PrescriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriptionId

`func (o *CreateOrderRequest) SetPrescriptionId(v string)`

SetPrescriptionId sets PrescriptionId field to given value.


### GetPrescriptionVersionId

`func (o *CreateOrderRequest) GetPrescriptionVersionId() string`

GetPrescriptionVersionId returns the PrescriptionVersionId field if non-nil, zero value otherwise.

### GetPrescriptionVersionIdOk

`func (o *CreateOrderRequest) GetPrescriptionVersionIdOk() (*string, bool)`

GetPrescriptionVersionIdOk returns a tuple with the PrescriptionVersionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriptionVersionId

`func (o *CreateOrderRequest) SetPrescriptionVersionId(v string)`

SetPrescriptionVersionId sets PrescriptionVersionId field to given value.


### GetRegisteredLocationId

`func (o *CreateOrderRequest) GetRegisteredLocationId() string`

GetRegisteredLocationId returns the RegisteredLocationId field if non-nil, zero value otherwise.

### GetRegisteredLocationIdOk

`func (o *CreateOrderRequest) GetRegisteredLocationIdOk() (*string, bool)`

GetRegisteredLocationIdOk returns a tuple with the RegisteredLocationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredLocationId

`func (o *CreateOrderRequest) SetRegisteredLocationId(v string)`

SetRegisteredLocationId sets RegisteredLocationId field to given value.


### GetShippingAddress

`func (o *CreateOrderRequest) GetShippingAddress() CreateOrderRequestAnyOf1ShippingAddress`

GetShippingAddress returns the ShippingAddress field if non-nil, zero value otherwise.

### GetShippingAddressOk

`func (o *CreateOrderRequest) GetShippingAddressOk() (*CreateOrderRequestAnyOf1ShippingAddress, bool)`

GetShippingAddressOk returns a tuple with the ShippingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingAddress

`func (o *CreateOrderRequest) SetShippingAddress(v CreateOrderRequestAnyOf1ShippingAddress)`

SetShippingAddress sets ShippingAddress field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


