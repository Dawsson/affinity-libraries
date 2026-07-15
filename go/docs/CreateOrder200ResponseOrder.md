# CreateOrder200ResponseOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationReason** | **NullableString** |  | 
**Carrier** | **NullableString** |  | 
**CatalogItemId** | **NullableString** |  | 
**CompounderId** | **NullableString** |  | 
**CreatedAt** | **string** |  | 
**Currency** | **string** |  | 
**DeliveredAt** | **NullableString** |  | 
**Directions** | **string** |  | 
**DosageForm** | **NullableString** |  | 
**ExternalOrderId** | **string** |  | 
**ExternalSubmissionAttempted** | **bool** |  | 
**ExternalSubmissionBlockedReason** | **NullableString** |  | 
**Id** | **string** |  | 
**Livemode** | **bool** |  | 
**MedicationName** | **string** |  | 
**PatientExternalId** | **string** |  | 
**PatientName** | **string** |  | 
**PatientState** | **string** |  | 
**PracticeId** | **NullableString** |  | 
**PrescriberName** | **NullableString** |  | 
**PrescriberNpi** | **NullableString** |  | 
**Quantity** | **float32** |  | 
**QuoteCents** | **NullableFloat32** |  | 
**ReplacesOrderId** | **NullableString** |  | 
**Routing** | [**NullableCreateOrder200ResponseOrderRouting**](CreateOrder200ResponseOrderRouting.md) |  | 
**ShippedAt** | **NullableString** |  | 
**Strength** | **NullableString** |  | 
**TrackingNumber** | **NullableString** |  | 
**UpdatedAt** | **string** |  | 

## Methods

### NewCreateOrder200ResponseOrder

`func NewCreateOrder200ResponseOrder(cancellationReason NullableString, carrier NullableString, catalogItemId NullableString, compounderId NullableString, createdAt string, currency string, deliveredAt NullableString, directions string, dosageForm NullableString, externalOrderId string, externalSubmissionAttempted bool, externalSubmissionBlockedReason NullableString, id string, livemode bool, medicationName string, patientExternalId string, patientName string, patientState string, practiceId NullableString, prescriberName NullableString, prescriberNpi NullableString, quantity float32, quoteCents NullableFloat32, replacesOrderId NullableString, routing NullableCreateOrder200ResponseOrderRouting, shippedAt NullableString, strength NullableString, trackingNumber NullableString, updatedAt string, ) *CreateOrder200ResponseOrder`

NewCreateOrder200ResponseOrder instantiates a new CreateOrder200ResponseOrder object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrder200ResponseOrderWithDefaults

`func NewCreateOrder200ResponseOrderWithDefaults() *CreateOrder200ResponseOrder`

NewCreateOrder200ResponseOrderWithDefaults instantiates a new CreateOrder200ResponseOrder object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationReason

`func (o *CreateOrder200ResponseOrder) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *CreateOrder200ResponseOrder) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *CreateOrder200ResponseOrder) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.


### SetCancellationReasonNil

`func (o *CreateOrder200ResponseOrder) SetCancellationReasonNil(b bool)`

 SetCancellationReasonNil sets the value for CancellationReason to be an explicit nil

### UnsetCancellationReason
`func (o *CreateOrder200ResponseOrder) UnsetCancellationReason()`

UnsetCancellationReason ensures that no value is present for CancellationReason, not even an explicit nil
### GetCarrier

`func (o *CreateOrder200ResponseOrder) GetCarrier() string`

GetCarrier returns the Carrier field if non-nil, zero value otherwise.

### GetCarrierOk

`func (o *CreateOrder200ResponseOrder) GetCarrierOk() (*string, bool)`

GetCarrierOk returns a tuple with the Carrier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrier

`func (o *CreateOrder200ResponseOrder) SetCarrier(v string)`

SetCarrier sets Carrier field to given value.


### SetCarrierNil

`func (o *CreateOrder200ResponseOrder) SetCarrierNil(b bool)`

 SetCarrierNil sets the value for Carrier to be an explicit nil

### UnsetCarrier
`func (o *CreateOrder200ResponseOrder) UnsetCarrier()`

UnsetCarrier ensures that no value is present for Carrier, not even an explicit nil
### GetCatalogItemId

`func (o *CreateOrder200ResponseOrder) GetCatalogItemId() string`

GetCatalogItemId returns the CatalogItemId field if non-nil, zero value otherwise.

### GetCatalogItemIdOk

`func (o *CreateOrder200ResponseOrder) GetCatalogItemIdOk() (*string, bool)`

GetCatalogItemIdOk returns a tuple with the CatalogItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogItemId

`func (o *CreateOrder200ResponseOrder) SetCatalogItemId(v string)`

SetCatalogItemId sets CatalogItemId field to given value.


### SetCatalogItemIdNil

`func (o *CreateOrder200ResponseOrder) SetCatalogItemIdNil(b bool)`

 SetCatalogItemIdNil sets the value for CatalogItemId to be an explicit nil

### UnsetCatalogItemId
`func (o *CreateOrder200ResponseOrder) UnsetCatalogItemId()`

UnsetCatalogItemId ensures that no value is present for CatalogItemId, not even an explicit nil
### GetCompounderId

`func (o *CreateOrder200ResponseOrder) GetCompounderId() string`

GetCompounderId returns the CompounderId field if non-nil, zero value otherwise.

### GetCompounderIdOk

`func (o *CreateOrder200ResponseOrder) GetCompounderIdOk() (*string, bool)`

GetCompounderIdOk returns a tuple with the CompounderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompounderId

`func (o *CreateOrder200ResponseOrder) SetCompounderId(v string)`

SetCompounderId sets CompounderId field to given value.


### SetCompounderIdNil

`func (o *CreateOrder200ResponseOrder) SetCompounderIdNil(b bool)`

 SetCompounderIdNil sets the value for CompounderId to be an explicit nil

### UnsetCompounderId
`func (o *CreateOrder200ResponseOrder) UnsetCompounderId()`

UnsetCompounderId ensures that no value is present for CompounderId, not even an explicit nil
### GetCreatedAt

`func (o *CreateOrder200ResponseOrder) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CreateOrder200ResponseOrder) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CreateOrder200ResponseOrder) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *CreateOrder200ResponseOrder) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreateOrder200ResponseOrder) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreateOrder200ResponseOrder) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDeliveredAt

`func (o *CreateOrder200ResponseOrder) GetDeliveredAt() string`

GetDeliveredAt returns the DeliveredAt field if non-nil, zero value otherwise.

### GetDeliveredAtOk

`func (o *CreateOrder200ResponseOrder) GetDeliveredAtOk() (*string, bool)`

GetDeliveredAtOk returns a tuple with the DeliveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveredAt

`func (o *CreateOrder200ResponseOrder) SetDeliveredAt(v string)`

SetDeliveredAt sets DeliveredAt field to given value.


### SetDeliveredAtNil

`func (o *CreateOrder200ResponseOrder) SetDeliveredAtNil(b bool)`

 SetDeliveredAtNil sets the value for DeliveredAt to be an explicit nil

### UnsetDeliveredAt
`func (o *CreateOrder200ResponseOrder) UnsetDeliveredAt()`

UnsetDeliveredAt ensures that no value is present for DeliveredAt, not even an explicit nil
### GetDirections

`func (o *CreateOrder200ResponseOrder) GetDirections() string`

GetDirections returns the Directions field if non-nil, zero value otherwise.

### GetDirectionsOk

`func (o *CreateOrder200ResponseOrder) GetDirectionsOk() (*string, bool)`

GetDirectionsOk returns a tuple with the Directions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirections

`func (o *CreateOrder200ResponseOrder) SetDirections(v string)`

SetDirections sets Directions field to given value.


### GetDosageForm

`func (o *CreateOrder200ResponseOrder) GetDosageForm() string`

GetDosageForm returns the DosageForm field if non-nil, zero value otherwise.

### GetDosageFormOk

`func (o *CreateOrder200ResponseOrder) GetDosageFormOk() (*string, bool)`

GetDosageFormOk returns a tuple with the DosageForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDosageForm

`func (o *CreateOrder200ResponseOrder) SetDosageForm(v string)`

SetDosageForm sets DosageForm field to given value.


### SetDosageFormNil

`func (o *CreateOrder200ResponseOrder) SetDosageFormNil(b bool)`

 SetDosageFormNil sets the value for DosageForm to be an explicit nil

### UnsetDosageForm
`func (o *CreateOrder200ResponseOrder) UnsetDosageForm()`

UnsetDosageForm ensures that no value is present for DosageForm, not even an explicit nil
### GetExternalOrderId

`func (o *CreateOrder200ResponseOrder) GetExternalOrderId() string`

GetExternalOrderId returns the ExternalOrderId field if non-nil, zero value otherwise.

### GetExternalOrderIdOk

`func (o *CreateOrder200ResponseOrder) GetExternalOrderIdOk() (*string, bool)`

GetExternalOrderIdOk returns a tuple with the ExternalOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrderId

`func (o *CreateOrder200ResponseOrder) SetExternalOrderId(v string)`

SetExternalOrderId sets ExternalOrderId field to given value.


### GetExternalSubmissionAttempted

`func (o *CreateOrder200ResponseOrder) GetExternalSubmissionAttempted() bool`

GetExternalSubmissionAttempted returns the ExternalSubmissionAttempted field if non-nil, zero value otherwise.

### GetExternalSubmissionAttemptedOk

`func (o *CreateOrder200ResponseOrder) GetExternalSubmissionAttemptedOk() (*bool, bool)`

GetExternalSubmissionAttemptedOk returns a tuple with the ExternalSubmissionAttempted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionAttempted

`func (o *CreateOrder200ResponseOrder) SetExternalSubmissionAttempted(v bool)`

SetExternalSubmissionAttempted sets ExternalSubmissionAttempted field to given value.


### GetExternalSubmissionBlockedReason

`func (o *CreateOrder200ResponseOrder) GetExternalSubmissionBlockedReason() string`

GetExternalSubmissionBlockedReason returns the ExternalSubmissionBlockedReason field if non-nil, zero value otherwise.

### GetExternalSubmissionBlockedReasonOk

`func (o *CreateOrder200ResponseOrder) GetExternalSubmissionBlockedReasonOk() (*string, bool)`

GetExternalSubmissionBlockedReasonOk returns a tuple with the ExternalSubmissionBlockedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionBlockedReason

`func (o *CreateOrder200ResponseOrder) SetExternalSubmissionBlockedReason(v string)`

SetExternalSubmissionBlockedReason sets ExternalSubmissionBlockedReason field to given value.


### SetExternalSubmissionBlockedReasonNil

`func (o *CreateOrder200ResponseOrder) SetExternalSubmissionBlockedReasonNil(b bool)`

 SetExternalSubmissionBlockedReasonNil sets the value for ExternalSubmissionBlockedReason to be an explicit nil

### UnsetExternalSubmissionBlockedReason
`func (o *CreateOrder200ResponseOrder) UnsetExternalSubmissionBlockedReason()`

UnsetExternalSubmissionBlockedReason ensures that no value is present for ExternalSubmissionBlockedReason, not even an explicit nil
### GetId

`func (o *CreateOrder200ResponseOrder) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreateOrder200ResponseOrder) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreateOrder200ResponseOrder) SetId(v string)`

SetId sets Id field to given value.


### GetLivemode

`func (o *CreateOrder200ResponseOrder) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *CreateOrder200ResponseOrder) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *CreateOrder200ResponseOrder) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetMedicationName

`func (o *CreateOrder200ResponseOrder) GetMedicationName() string`

GetMedicationName returns the MedicationName field if non-nil, zero value otherwise.

### GetMedicationNameOk

`func (o *CreateOrder200ResponseOrder) GetMedicationNameOk() (*string, bool)`

GetMedicationNameOk returns a tuple with the MedicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedicationName

`func (o *CreateOrder200ResponseOrder) SetMedicationName(v string)`

SetMedicationName sets MedicationName field to given value.


### GetPatientExternalId

`func (o *CreateOrder200ResponseOrder) GetPatientExternalId() string`

GetPatientExternalId returns the PatientExternalId field if non-nil, zero value otherwise.

### GetPatientExternalIdOk

`func (o *CreateOrder200ResponseOrder) GetPatientExternalIdOk() (*string, bool)`

GetPatientExternalIdOk returns a tuple with the PatientExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientExternalId

`func (o *CreateOrder200ResponseOrder) SetPatientExternalId(v string)`

SetPatientExternalId sets PatientExternalId field to given value.


### GetPatientName

`func (o *CreateOrder200ResponseOrder) GetPatientName() string`

GetPatientName returns the PatientName field if non-nil, zero value otherwise.

### GetPatientNameOk

`func (o *CreateOrder200ResponseOrder) GetPatientNameOk() (*string, bool)`

GetPatientNameOk returns a tuple with the PatientName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientName

`func (o *CreateOrder200ResponseOrder) SetPatientName(v string)`

SetPatientName sets PatientName field to given value.


### GetPatientState

`func (o *CreateOrder200ResponseOrder) GetPatientState() string`

GetPatientState returns the PatientState field if non-nil, zero value otherwise.

### GetPatientStateOk

`func (o *CreateOrder200ResponseOrder) GetPatientStateOk() (*string, bool)`

GetPatientStateOk returns a tuple with the PatientState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientState

`func (o *CreateOrder200ResponseOrder) SetPatientState(v string)`

SetPatientState sets PatientState field to given value.


### GetPracticeId

`func (o *CreateOrder200ResponseOrder) GetPracticeId() string`

GetPracticeId returns the PracticeId field if non-nil, zero value otherwise.

### GetPracticeIdOk

`func (o *CreateOrder200ResponseOrder) GetPracticeIdOk() (*string, bool)`

GetPracticeIdOk returns a tuple with the PracticeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPracticeId

`func (o *CreateOrder200ResponseOrder) SetPracticeId(v string)`

SetPracticeId sets PracticeId field to given value.


### SetPracticeIdNil

`func (o *CreateOrder200ResponseOrder) SetPracticeIdNil(b bool)`

 SetPracticeIdNil sets the value for PracticeId to be an explicit nil

### UnsetPracticeId
`func (o *CreateOrder200ResponseOrder) UnsetPracticeId()`

UnsetPracticeId ensures that no value is present for PracticeId, not even an explicit nil
### GetPrescriberName

`func (o *CreateOrder200ResponseOrder) GetPrescriberName() string`

GetPrescriberName returns the PrescriberName field if non-nil, zero value otherwise.

### GetPrescriberNameOk

`func (o *CreateOrder200ResponseOrder) GetPrescriberNameOk() (*string, bool)`

GetPrescriberNameOk returns a tuple with the PrescriberName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberName

`func (o *CreateOrder200ResponseOrder) SetPrescriberName(v string)`

SetPrescriberName sets PrescriberName field to given value.


### SetPrescriberNameNil

`func (o *CreateOrder200ResponseOrder) SetPrescriberNameNil(b bool)`

 SetPrescriberNameNil sets the value for PrescriberName to be an explicit nil

### UnsetPrescriberName
`func (o *CreateOrder200ResponseOrder) UnsetPrescriberName()`

UnsetPrescriberName ensures that no value is present for PrescriberName, not even an explicit nil
### GetPrescriberNpi

`func (o *CreateOrder200ResponseOrder) GetPrescriberNpi() string`

GetPrescriberNpi returns the PrescriberNpi field if non-nil, zero value otherwise.

### GetPrescriberNpiOk

`func (o *CreateOrder200ResponseOrder) GetPrescriberNpiOk() (*string, bool)`

GetPrescriberNpiOk returns a tuple with the PrescriberNpi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberNpi

`func (o *CreateOrder200ResponseOrder) SetPrescriberNpi(v string)`

SetPrescriberNpi sets PrescriberNpi field to given value.


### SetPrescriberNpiNil

`func (o *CreateOrder200ResponseOrder) SetPrescriberNpiNil(b bool)`

 SetPrescriberNpiNil sets the value for PrescriberNpi to be an explicit nil

### UnsetPrescriberNpi
`func (o *CreateOrder200ResponseOrder) UnsetPrescriberNpi()`

UnsetPrescriberNpi ensures that no value is present for PrescriberNpi, not even an explicit nil
### GetQuantity

`func (o *CreateOrder200ResponseOrder) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CreateOrder200ResponseOrder) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CreateOrder200ResponseOrder) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.


### GetQuoteCents

`func (o *CreateOrder200ResponseOrder) GetQuoteCents() float32`

GetQuoteCents returns the QuoteCents field if non-nil, zero value otherwise.

### GetQuoteCentsOk

`func (o *CreateOrder200ResponseOrder) GetQuoteCentsOk() (*float32, bool)`

GetQuoteCentsOk returns a tuple with the QuoteCents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteCents

`func (o *CreateOrder200ResponseOrder) SetQuoteCents(v float32)`

SetQuoteCents sets QuoteCents field to given value.


### SetQuoteCentsNil

`func (o *CreateOrder200ResponseOrder) SetQuoteCentsNil(b bool)`

 SetQuoteCentsNil sets the value for QuoteCents to be an explicit nil

### UnsetQuoteCents
`func (o *CreateOrder200ResponseOrder) UnsetQuoteCents()`

UnsetQuoteCents ensures that no value is present for QuoteCents, not even an explicit nil
### GetReplacesOrderId

`func (o *CreateOrder200ResponseOrder) GetReplacesOrderId() string`

GetReplacesOrderId returns the ReplacesOrderId field if non-nil, zero value otherwise.

### GetReplacesOrderIdOk

`func (o *CreateOrder200ResponseOrder) GetReplacesOrderIdOk() (*string, bool)`

GetReplacesOrderIdOk returns a tuple with the ReplacesOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacesOrderId

`func (o *CreateOrder200ResponseOrder) SetReplacesOrderId(v string)`

SetReplacesOrderId sets ReplacesOrderId field to given value.


### SetReplacesOrderIdNil

`func (o *CreateOrder200ResponseOrder) SetReplacesOrderIdNil(b bool)`

 SetReplacesOrderIdNil sets the value for ReplacesOrderId to be an explicit nil

### UnsetReplacesOrderId
`func (o *CreateOrder200ResponseOrder) UnsetReplacesOrderId()`

UnsetReplacesOrderId ensures that no value is present for ReplacesOrderId, not even an explicit nil
### GetRouting

`func (o *CreateOrder200ResponseOrder) GetRouting() CreateOrder200ResponseOrderRouting`

GetRouting returns the Routing field if non-nil, zero value otherwise.

### GetRoutingOk

`func (o *CreateOrder200ResponseOrder) GetRoutingOk() (*CreateOrder200ResponseOrderRouting, bool)`

GetRoutingOk returns a tuple with the Routing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRouting

`func (o *CreateOrder200ResponseOrder) SetRouting(v CreateOrder200ResponseOrderRouting)`

SetRouting sets Routing field to given value.


### SetRoutingNil

`func (o *CreateOrder200ResponseOrder) SetRoutingNil(b bool)`

 SetRoutingNil sets the value for Routing to be an explicit nil

### UnsetRouting
`func (o *CreateOrder200ResponseOrder) UnsetRouting()`

UnsetRouting ensures that no value is present for Routing, not even an explicit nil
### GetShippedAt

`func (o *CreateOrder200ResponseOrder) GetShippedAt() string`

GetShippedAt returns the ShippedAt field if non-nil, zero value otherwise.

### GetShippedAtOk

`func (o *CreateOrder200ResponseOrder) GetShippedAtOk() (*string, bool)`

GetShippedAtOk returns a tuple with the ShippedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippedAt

`func (o *CreateOrder200ResponseOrder) SetShippedAt(v string)`

SetShippedAt sets ShippedAt field to given value.


### SetShippedAtNil

`func (o *CreateOrder200ResponseOrder) SetShippedAtNil(b bool)`

 SetShippedAtNil sets the value for ShippedAt to be an explicit nil

### UnsetShippedAt
`func (o *CreateOrder200ResponseOrder) UnsetShippedAt()`

UnsetShippedAt ensures that no value is present for ShippedAt, not even an explicit nil
### GetStrength

`func (o *CreateOrder200ResponseOrder) GetStrength() string`

GetStrength returns the Strength field if non-nil, zero value otherwise.

### GetStrengthOk

`func (o *CreateOrder200ResponseOrder) GetStrengthOk() (*string, bool)`

GetStrengthOk returns a tuple with the Strength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrength

`func (o *CreateOrder200ResponseOrder) SetStrength(v string)`

SetStrength sets Strength field to given value.


### SetStrengthNil

`func (o *CreateOrder200ResponseOrder) SetStrengthNil(b bool)`

 SetStrengthNil sets the value for Strength to be an explicit nil

### UnsetStrength
`func (o *CreateOrder200ResponseOrder) UnsetStrength()`

UnsetStrength ensures that no value is present for Strength, not even an explicit nil
### GetTrackingNumber

`func (o *CreateOrder200ResponseOrder) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *CreateOrder200ResponseOrder) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *CreateOrder200ResponseOrder) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.


### SetTrackingNumberNil

`func (o *CreateOrder200ResponseOrder) SetTrackingNumberNil(b bool)`

 SetTrackingNumberNil sets the value for TrackingNumber to be an explicit nil

### UnsetTrackingNumber
`func (o *CreateOrder200ResponseOrder) UnsetTrackingNumber()`

UnsetTrackingNumber ensures that no value is present for TrackingNumber, not even an explicit nil
### GetUpdatedAt

`func (o *CreateOrder200ResponseOrder) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CreateOrder200ResponseOrder) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CreateOrder200ResponseOrder) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


