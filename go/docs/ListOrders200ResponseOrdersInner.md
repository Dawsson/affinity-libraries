# ListOrders200ResponseOrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationReason** | **NullableString** |  | 
**Carrier** | **NullableString** |  | 
**CatalogItemId** | **NullableString** |  | 
**CompounderId** | **NullableString** |  | 
**CreatedAt** | **NullableString** |  | 
**Currency** | **NullableString** |  | 
**DeliveredAt** | **NullableString** |  | 
**Directions** | **NullableString** |  | 
**DosageForm** | **NullableString** |  | 
**ExternalOrderId** | **NullableString** |  | 
**ExternalSubmissionAttempted** | **bool** |  | 
**ExternalSubmissionBlockedReason** | **NullableString** |  | 
**Id** | **NullableString** |  | 
**Livemode** | **bool** |  | 
**MedicationName** | **NullableString** |  | 
**PatientExternalId** | **NullableString** |  | 
**PatientName** | **NullableString** |  | 
**PatientState** | **NullableString** |  | 
**PracticeId** | **NullableString** |  | 
**PrescriberName** | **NullableString** |  | 
**PrescriberNpi** | **NullableString** |  | 
**Quantity** | **float32** |  | 
**QuoteCents** | **NullableFloat32** |  | 
**ReplacesOrderId** | **NullableString** |  | 
**Routing** | [**NullableListOrders200ResponseOrdersInnerRouting**](ListOrders200ResponseOrdersInnerRouting.md) |  | 
**ShippedAt** | **NullableString** |  | 
**Strength** | **NullableString** |  | 
**TrackingNumber** | **NullableString** |  | 
**UpdatedAt** | **NullableString** |  | 

## Methods

### NewListOrders200ResponseOrdersInner

`func NewListOrders200ResponseOrdersInner(cancellationReason NullableString, carrier NullableString, catalogItemId NullableString, compounderId NullableString, createdAt NullableString, currency NullableString, deliveredAt NullableString, directions NullableString, dosageForm NullableString, externalOrderId NullableString, externalSubmissionAttempted bool, externalSubmissionBlockedReason NullableString, id NullableString, livemode bool, medicationName NullableString, patientExternalId NullableString, patientName NullableString, patientState NullableString, practiceId NullableString, prescriberName NullableString, prescriberNpi NullableString, quantity float32, quoteCents NullableFloat32, replacesOrderId NullableString, routing NullableListOrders200ResponseOrdersInnerRouting, shippedAt NullableString, strength NullableString, trackingNumber NullableString, updatedAt NullableString, ) *ListOrders200ResponseOrdersInner`

NewListOrders200ResponseOrdersInner instantiates a new ListOrders200ResponseOrdersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListOrders200ResponseOrdersInnerWithDefaults

`func NewListOrders200ResponseOrdersInnerWithDefaults() *ListOrders200ResponseOrdersInner`

NewListOrders200ResponseOrdersInnerWithDefaults instantiates a new ListOrders200ResponseOrdersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationReason

`func (o *ListOrders200ResponseOrdersInner) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *ListOrders200ResponseOrdersInner) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *ListOrders200ResponseOrdersInner) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.


### SetCancellationReasonNil

`func (o *ListOrders200ResponseOrdersInner) SetCancellationReasonNil(b bool)`

 SetCancellationReasonNil sets the value for CancellationReason to be an explicit nil

### UnsetCancellationReason
`func (o *ListOrders200ResponseOrdersInner) UnsetCancellationReason()`

UnsetCancellationReason ensures that no value is present for CancellationReason, not even an explicit nil
### GetCarrier

`func (o *ListOrders200ResponseOrdersInner) GetCarrier() string`

GetCarrier returns the Carrier field if non-nil, zero value otherwise.

### GetCarrierOk

`func (o *ListOrders200ResponseOrdersInner) GetCarrierOk() (*string, bool)`

GetCarrierOk returns a tuple with the Carrier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrier

`func (o *ListOrders200ResponseOrdersInner) SetCarrier(v string)`

SetCarrier sets Carrier field to given value.


### SetCarrierNil

`func (o *ListOrders200ResponseOrdersInner) SetCarrierNil(b bool)`

 SetCarrierNil sets the value for Carrier to be an explicit nil

### UnsetCarrier
`func (o *ListOrders200ResponseOrdersInner) UnsetCarrier()`

UnsetCarrier ensures that no value is present for Carrier, not even an explicit nil
### GetCatalogItemId

`func (o *ListOrders200ResponseOrdersInner) GetCatalogItemId() string`

GetCatalogItemId returns the CatalogItemId field if non-nil, zero value otherwise.

### GetCatalogItemIdOk

`func (o *ListOrders200ResponseOrdersInner) GetCatalogItemIdOk() (*string, bool)`

GetCatalogItemIdOk returns a tuple with the CatalogItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogItemId

`func (o *ListOrders200ResponseOrdersInner) SetCatalogItemId(v string)`

SetCatalogItemId sets CatalogItemId field to given value.


### SetCatalogItemIdNil

`func (o *ListOrders200ResponseOrdersInner) SetCatalogItemIdNil(b bool)`

 SetCatalogItemIdNil sets the value for CatalogItemId to be an explicit nil

### UnsetCatalogItemId
`func (o *ListOrders200ResponseOrdersInner) UnsetCatalogItemId()`

UnsetCatalogItemId ensures that no value is present for CatalogItemId, not even an explicit nil
### GetCompounderId

`func (o *ListOrders200ResponseOrdersInner) GetCompounderId() string`

GetCompounderId returns the CompounderId field if non-nil, zero value otherwise.

### GetCompounderIdOk

`func (o *ListOrders200ResponseOrdersInner) GetCompounderIdOk() (*string, bool)`

GetCompounderIdOk returns a tuple with the CompounderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompounderId

`func (o *ListOrders200ResponseOrdersInner) SetCompounderId(v string)`

SetCompounderId sets CompounderId field to given value.


### SetCompounderIdNil

`func (o *ListOrders200ResponseOrdersInner) SetCompounderIdNil(b bool)`

 SetCompounderIdNil sets the value for CompounderId to be an explicit nil

### UnsetCompounderId
`func (o *ListOrders200ResponseOrdersInner) UnsetCompounderId()`

UnsetCompounderId ensures that no value is present for CompounderId, not even an explicit nil
### GetCreatedAt

`func (o *ListOrders200ResponseOrdersInner) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ListOrders200ResponseOrdersInner) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ListOrders200ResponseOrdersInner) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### SetCreatedAtNil

`func (o *ListOrders200ResponseOrdersInner) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *ListOrders200ResponseOrdersInner) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetCurrency

`func (o *ListOrders200ResponseOrdersInner) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ListOrders200ResponseOrdersInner) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ListOrders200ResponseOrdersInner) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### SetCurrencyNil

`func (o *ListOrders200ResponseOrdersInner) SetCurrencyNil(b bool)`

 SetCurrencyNil sets the value for Currency to be an explicit nil

### UnsetCurrency
`func (o *ListOrders200ResponseOrdersInner) UnsetCurrency()`

UnsetCurrency ensures that no value is present for Currency, not even an explicit nil
### GetDeliveredAt

`func (o *ListOrders200ResponseOrdersInner) GetDeliveredAt() string`

GetDeliveredAt returns the DeliveredAt field if non-nil, zero value otherwise.

### GetDeliveredAtOk

`func (o *ListOrders200ResponseOrdersInner) GetDeliveredAtOk() (*string, bool)`

GetDeliveredAtOk returns a tuple with the DeliveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveredAt

`func (o *ListOrders200ResponseOrdersInner) SetDeliveredAt(v string)`

SetDeliveredAt sets DeliveredAt field to given value.


### SetDeliveredAtNil

`func (o *ListOrders200ResponseOrdersInner) SetDeliveredAtNil(b bool)`

 SetDeliveredAtNil sets the value for DeliveredAt to be an explicit nil

### UnsetDeliveredAt
`func (o *ListOrders200ResponseOrdersInner) UnsetDeliveredAt()`

UnsetDeliveredAt ensures that no value is present for DeliveredAt, not even an explicit nil
### GetDirections

`func (o *ListOrders200ResponseOrdersInner) GetDirections() string`

GetDirections returns the Directions field if non-nil, zero value otherwise.

### GetDirectionsOk

`func (o *ListOrders200ResponseOrdersInner) GetDirectionsOk() (*string, bool)`

GetDirectionsOk returns a tuple with the Directions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirections

`func (o *ListOrders200ResponseOrdersInner) SetDirections(v string)`

SetDirections sets Directions field to given value.


### SetDirectionsNil

`func (o *ListOrders200ResponseOrdersInner) SetDirectionsNil(b bool)`

 SetDirectionsNil sets the value for Directions to be an explicit nil

### UnsetDirections
`func (o *ListOrders200ResponseOrdersInner) UnsetDirections()`

UnsetDirections ensures that no value is present for Directions, not even an explicit nil
### GetDosageForm

`func (o *ListOrders200ResponseOrdersInner) GetDosageForm() string`

GetDosageForm returns the DosageForm field if non-nil, zero value otherwise.

### GetDosageFormOk

`func (o *ListOrders200ResponseOrdersInner) GetDosageFormOk() (*string, bool)`

GetDosageFormOk returns a tuple with the DosageForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDosageForm

`func (o *ListOrders200ResponseOrdersInner) SetDosageForm(v string)`

SetDosageForm sets DosageForm field to given value.


### SetDosageFormNil

`func (o *ListOrders200ResponseOrdersInner) SetDosageFormNil(b bool)`

 SetDosageFormNil sets the value for DosageForm to be an explicit nil

### UnsetDosageForm
`func (o *ListOrders200ResponseOrdersInner) UnsetDosageForm()`

UnsetDosageForm ensures that no value is present for DosageForm, not even an explicit nil
### GetExternalOrderId

`func (o *ListOrders200ResponseOrdersInner) GetExternalOrderId() string`

GetExternalOrderId returns the ExternalOrderId field if non-nil, zero value otherwise.

### GetExternalOrderIdOk

`func (o *ListOrders200ResponseOrdersInner) GetExternalOrderIdOk() (*string, bool)`

GetExternalOrderIdOk returns a tuple with the ExternalOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrderId

`func (o *ListOrders200ResponseOrdersInner) SetExternalOrderId(v string)`

SetExternalOrderId sets ExternalOrderId field to given value.


### SetExternalOrderIdNil

`func (o *ListOrders200ResponseOrdersInner) SetExternalOrderIdNil(b bool)`

 SetExternalOrderIdNil sets the value for ExternalOrderId to be an explicit nil

### UnsetExternalOrderId
`func (o *ListOrders200ResponseOrdersInner) UnsetExternalOrderId()`

UnsetExternalOrderId ensures that no value is present for ExternalOrderId, not even an explicit nil
### GetExternalSubmissionAttempted

`func (o *ListOrders200ResponseOrdersInner) GetExternalSubmissionAttempted() bool`

GetExternalSubmissionAttempted returns the ExternalSubmissionAttempted field if non-nil, zero value otherwise.

### GetExternalSubmissionAttemptedOk

`func (o *ListOrders200ResponseOrdersInner) GetExternalSubmissionAttemptedOk() (*bool, bool)`

GetExternalSubmissionAttemptedOk returns a tuple with the ExternalSubmissionAttempted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionAttempted

`func (o *ListOrders200ResponseOrdersInner) SetExternalSubmissionAttempted(v bool)`

SetExternalSubmissionAttempted sets ExternalSubmissionAttempted field to given value.


### GetExternalSubmissionBlockedReason

`func (o *ListOrders200ResponseOrdersInner) GetExternalSubmissionBlockedReason() string`

GetExternalSubmissionBlockedReason returns the ExternalSubmissionBlockedReason field if non-nil, zero value otherwise.

### GetExternalSubmissionBlockedReasonOk

`func (o *ListOrders200ResponseOrdersInner) GetExternalSubmissionBlockedReasonOk() (*string, bool)`

GetExternalSubmissionBlockedReasonOk returns a tuple with the ExternalSubmissionBlockedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionBlockedReason

`func (o *ListOrders200ResponseOrdersInner) SetExternalSubmissionBlockedReason(v string)`

SetExternalSubmissionBlockedReason sets ExternalSubmissionBlockedReason field to given value.


### SetExternalSubmissionBlockedReasonNil

`func (o *ListOrders200ResponseOrdersInner) SetExternalSubmissionBlockedReasonNil(b bool)`

 SetExternalSubmissionBlockedReasonNil sets the value for ExternalSubmissionBlockedReason to be an explicit nil

### UnsetExternalSubmissionBlockedReason
`func (o *ListOrders200ResponseOrdersInner) UnsetExternalSubmissionBlockedReason()`

UnsetExternalSubmissionBlockedReason ensures that no value is present for ExternalSubmissionBlockedReason, not even an explicit nil
### GetId

`func (o *ListOrders200ResponseOrdersInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListOrders200ResponseOrdersInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListOrders200ResponseOrdersInner) SetId(v string)`

SetId sets Id field to given value.


### SetIdNil

`func (o *ListOrders200ResponseOrdersInner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ListOrders200ResponseOrdersInner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetLivemode

`func (o *ListOrders200ResponseOrdersInner) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *ListOrders200ResponseOrdersInner) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *ListOrders200ResponseOrdersInner) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetMedicationName

`func (o *ListOrders200ResponseOrdersInner) GetMedicationName() string`

GetMedicationName returns the MedicationName field if non-nil, zero value otherwise.

### GetMedicationNameOk

`func (o *ListOrders200ResponseOrdersInner) GetMedicationNameOk() (*string, bool)`

GetMedicationNameOk returns a tuple with the MedicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedicationName

`func (o *ListOrders200ResponseOrdersInner) SetMedicationName(v string)`

SetMedicationName sets MedicationName field to given value.


### SetMedicationNameNil

`func (o *ListOrders200ResponseOrdersInner) SetMedicationNameNil(b bool)`

 SetMedicationNameNil sets the value for MedicationName to be an explicit nil

### UnsetMedicationName
`func (o *ListOrders200ResponseOrdersInner) UnsetMedicationName()`

UnsetMedicationName ensures that no value is present for MedicationName, not even an explicit nil
### GetPatientExternalId

`func (o *ListOrders200ResponseOrdersInner) GetPatientExternalId() string`

GetPatientExternalId returns the PatientExternalId field if non-nil, zero value otherwise.

### GetPatientExternalIdOk

`func (o *ListOrders200ResponseOrdersInner) GetPatientExternalIdOk() (*string, bool)`

GetPatientExternalIdOk returns a tuple with the PatientExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientExternalId

`func (o *ListOrders200ResponseOrdersInner) SetPatientExternalId(v string)`

SetPatientExternalId sets PatientExternalId field to given value.


### SetPatientExternalIdNil

`func (o *ListOrders200ResponseOrdersInner) SetPatientExternalIdNil(b bool)`

 SetPatientExternalIdNil sets the value for PatientExternalId to be an explicit nil

### UnsetPatientExternalId
`func (o *ListOrders200ResponseOrdersInner) UnsetPatientExternalId()`

UnsetPatientExternalId ensures that no value is present for PatientExternalId, not even an explicit nil
### GetPatientName

`func (o *ListOrders200ResponseOrdersInner) GetPatientName() string`

GetPatientName returns the PatientName field if non-nil, zero value otherwise.

### GetPatientNameOk

`func (o *ListOrders200ResponseOrdersInner) GetPatientNameOk() (*string, bool)`

GetPatientNameOk returns a tuple with the PatientName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientName

`func (o *ListOrders200ResponseOrdersInner) SetPatientName(v string)`

SetPatientName sets PatientName field to given value.


### SetPatientNameNil

`func (o *ListOrders200ResponseOrdersInner) SetPatientNameNil(b bool)`

 SetPatientNameNil sets the value for PatientName to be an explicit nil

### UnsetPatientName
`func (o *ListOrders200ResponseOrdersInner) UnsetPatientName()`

UnsetPatientName ensures that no value is present for PatientName, not even an explicit nil
### GetPatientState

`func (o *ListOrders200ResponseOrdersInner) GetPatientState() string`

GetPatientState returns the PatientState field if non-nil, zero value otherwise.

### GetPatientStateOk

`func (o *ListOrders200ResponseOrdersInner) GetPatientStateOk() (*string, bool)`

GetPatientStateOk returns a tuple with the PatientState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientState

`func (o *ListOrders200ResponseOrdersInner) SetPatientState(v string)`

SetPatientState sets PatientState field to given value.


### SetPatientStateNil

`func (o *ListOrders200ResponseOrdersInner) SetPatientStateNil(b bool)`

 SetPatientStateNil sets the value for PatientState to be an explicit nil

### UnsetPatientState
`func (o *ListOrders200ResponseOrdersInner) UnsetPatientState()`

UnsetPatientState ensures that no value is present for PatientState, not even an explicit nil
### GetPracticeId

`func (o *ListOrders200ResponseOrdersInner) GetPracticeId() string`

GetPracticeId returns the PracticeId field if non-nil, zero value otherwise.

### GetPracticeIdOk

`func (o *ListOrders200ResponseOrdersInner) GetPracticeIdOk() (*string, bool)`

GetPracticeIdOk returns a tuple with the PracticeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPracticeId

`func (o *ListOrders200ResponseOrdersInner) SetPracticeId(v string)`

SetPracticeId sets PracticeId field to given value.


### SetPracticeIdNil

`func (o *ListOrders200ResponseOrdersInner) SetPracticeIdNil(b bool)`

 SetPracticeIdNil sets the value for PracticeId to be an explicit nil

### UnsetPracticeId
`func (o *ListOrders200ResponseOrdersInner) UnsetPracticeId()`

UnsetPracticeId ensures that no value is present for PracticeId, not even an explicit nil
### GetPrescriberName

`func (o *ListOrders200ResponseOrdersInner) GetPrescriberName() string`

GetPrescriberName returns the PrescriberName field if non-nil, zero value otherwise.

### GetPrescriberNameOk

`func (o *ListOrders200ResponseOrdersInner) GetPrescriberNameOk() (*string, bool)`

GetPrescriberNameOk returns a tuple with the PrescriberName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberName

`func (o *ListOrders200ResponseOrdersInner) SetPrescriberName(v string)`

SetPrescriberName sets PrescriberName field to given value.


### SetPrescriberNameNil

`func (o *ListOrders200ResponseOrdersInner) SetPrescriberNameNil(b bool)`

 SetPrescriberNameNil sets the value for PrescriberName to be an explicit nil

### UnsetPrescriberName
`func (o *ListOrders200ResponseOrdersInner) UnsetPrescriberName()`

UnsetPrescriberName ensures that no value is present for PrescriberName, not even an explicit nil
### GetPrescriberNpi

`func (o *ListOrders200ResponseOrdersInner) GetPrescriberNpi() string`

GetPrescriberNpi returns the PrescriberNpi field if non-nil, zero value otherwise.

### GetPrescriberNpiOk

`func (o *ListOrders200ResponseOrdersInner) GetPrescriberNpiOk() (*string, bool)`

GetPrescriberNpiOk returns a tuple with the PrescriberNpi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberNpi

`func (o *ListOrders200ResponseOrdersInner) SetPrescriberNpi(v string)`

SetPrescriberNpi sets PrescriberNpi field to given value.


### SetPrescriberNpiNil

`func (o *ListOrders200ResponseOrdersInner) SetPrescriberNpiNil(b bool)`

 SetPrescriberNpiNil sets the value for PrescriberNpi to be an explicit nil

### UnsetPrescriberNpi
`func (o *ListOrders200ResponseOrdersInner) UnsetPrescriberNpi()`

UnsetPrescriberNpi ensures that no value is present for PrescriberNpi, not even an explicit nil
### GetQuantity

`func (o *ListOrders200ResponseOrdersInner) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ListOrders200ResponseOrdersInner) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ListOrders200ResponseOrdersInner) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.


### GetQuoteCents

`func (o *ListOrders200ResponseOrdersInner) GetQuoteCents() float32`

GetQuoteCents returns the QuoteCents field if non-nil, zero value otherwise.

### GetQuoteCentsOk

`func (o *ListOrders200ResponseOrdersInner) GetQuoteCentsOk() (*float32, bool)`

GetQuoteCentsOk returns a tuple with the QuoteCents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteCents

`func (o *ListOrders200ResponseOrdersInner) SetQuoteCents(v float32)`

SetQuoteCents sets QuoteCents field to given value.


### SetQuoteCentsNil

`func (o *ListOrders200ResponseOrdersInner) SetQuoteCentsNil(b bool)`

 SetQuoteCentsNil sets the value for QuoteCents to be an explicit nil

### UnsetQuoteCents
`func (o *ListOrders200ResponseOrdersInner) UnsetQuoteCents()`

UnsetQuoteCents ensures that no value is present for QuoteCents, not even an explicit nil
### GetReplacesOrderId

`func (o *ListOrders200ResponseOrdersInner) GetReplacesOrderId() string`

GetReplacesOrderId returns the ReplacesOrderId field if non-nil, zero value otherwise.

### GetReplacesOrderIdOk

`func (o *ListOrders200ResponseOrdersInner) GetReplacesOrderIdOk() (*string, bool)`

GetReplacesOrderIdOk returns a tuple with the ReplacesOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacesOrderId

`func (o *ListOrders200ResponseOrdersInner) SetReplacesOrderId(v string)`

SetReplacesOrderId sets ReplacesOrderId field to given value.


### SetReplacesOrderIdNil

`func (o *ListOrders200ResponseOrdersInner) SetReplacesOrderIdNil(b bool)`

 SetReplacesOrderIdNil sets the value for ReplacesOrderId to be an explicit nil

### UnsetReplacesOrderId
`func (o *ListOrders200ResponseOrdersInner) UnsetReplacesOrderId()`

UnsetReplacesOrderId ensures that no value is present for ReplacesOrderId, not even an explicit nil
### GetRouting

`func (o *ListOrders200ResponseOrdersInner) GetRouting() ListOrders200ResponseOrdersInnerRouting`

GetRouting returns the Routing field if non-nil, zero value otherwise.

### GetRoutingOk

`func (o *ListOrders200ResponseOrdersInner) GetRoutingOk() (*ListOrders200ResponseOrdersInnerRouting, bool)`

GetRoutingOk returns a tuple with the Routing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRouting

`func (o *ListOrders200ResponseOrdersInner) SetRouting(v ListOrders200ResponseOrdersInnerRouting)`

SetRouting sets Routing field to given value.


### SetRoutingNil

`func (o *ListOrders200ResponseOrdersInner) SetRoutingNil(b bool)`

 SetRoutingNil sets the value for Routing to be an explicit nil

### UnsetRouting
`func (o *ListOrders200ResponseOrdersInner) UnsetRouting()`

UnsetRouting ensures that no value is present for Routing, not even an explicit nil
### GetShippedAt

`func (o *ListOrders200ResponseOrdersInner) GetShippedAt() string`

GetShippedAt returns the ShippedAt field if non-nil, zero value otherwise.

### GetShippedAtOk

`func (o *ListOrders200ResponseOrdersInner) GetShippedAtOk() (*string, bool)`

GetShippedAtOk returns a tuple with the ShippedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippedAt

`func (o *ListOrders200ResponseOrdersInner) SetShippedAt(v string)`

SetShippedAt sets ShippedAt field to given value.


### SetShippedAtNil

`func (o *ListOrders200ResponseOrdersInner) SetShippedAtNil(b bool)`

 SetShippedAtNil sets the value for ShippedAt to be an explicit nil

### UnsetShippedAt
`func (o *ListOrders200ResponseOrdersInner) UnsetShippedAt()`

UnsetShippedAt ensures that no value is present for ShippedAt, not even an explicit nil
### GetStrength

`func (o *ListOrders200ResponseOrdersInner) GetStrength() string`

GetStrength returns the Strength field if non-nil, zero value otherwise.

### GetStrengthOk

`func (o *ListOrders200ResponseOrdersInner) GetStrengthOk() (*string, bool)`

GetStrengthOk returns a tuple with the Strength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrength

`func (o *ListOrders200ResponseOrdersInner) SetStrength(v string)`

SetStrength sets Strength field to given value.


### SetStrengthNil

`func (o *ListOrders200ResponseOrdersInner) SetStrengthNil(b bool)`

 SetStrengthNil sets the value for Strength to be an explicit nil

### UnsetStrength
`func (o *ListOrders200ResponseOrdersInner) UnsetStrength()`

UnsetStrength ensures that no value is present for Strength, not even an explicit nil
### GetTrackingNumber

`func (o *ListOrders200ResponseOrdersInner) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *ListOrders200ResponseOrdersInner) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *ListOrders200ResponseOrdersInner) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.


### SetTrackingNumberNil

`func (o *ListOrders200ResponseOrdersInner) SetTrackingNumberNil(b bool)`

 SetTrackingNumberNil sets the value for TrackingNumber to be an explicit nil

### UnsetTrackingNumber
`func (o *ListOrders200ResponseOrdersInner) UnsetTrackingNumber()`

UnsetTrackingNumber ensures that no value is present for TrackingNumber, not even an explicit nil
### GetUpdatedAt

`func (o *ListOrders200ResponseOrdersInner) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ListOrders200ResponseOrdersInner) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ListOrders200ResponseOrdersInner) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### SetUpdatedAtNil

`func (o *ListOrders200ResponseOrdersInner) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *ListOrders200ResponseOrdersInner) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


