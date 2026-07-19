# CancelOrderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationReason** | **NullableString** |  |
**Carrier** | **NullableString** |  |
**CatalogItemId** | **NullableString** |  |
**PracticeId** | **string** |  |
**CompounderId** | **NullableString** |  |
**CreatedAt** | **string** |  |
**Currency** | **string** |  |
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
**PrescriberName** | **NullableString** |  |
**PrescriberNpi** | **NullableString** |  |
**Quantity** | **float32** |  |
**QuoteCents** | **NullableFloat32** |  |
**Object** | **string** |  |
**ReplacesOrderId** | **NullableString** |  |
**Routing** | [**NullableListOrdersResponseDataInnerRouting**](ListOrdersResponseDataInnerRouting.md) |  |
**Status** | **string** |  |
**Strength** | **NullableString** |  |
**TrackingNumber** | **NullableString** |  |
**ShippedAt** | **NullableString** |  |
**DeliveredAt** | **NullableString** |  |
**UpdatedAt** | **string** |  |

## Methods

### NewCancelOrderResponse

`func NewCancelOrderResponse(cancellationReason NullableString, carrier NullableString, catalogItemId NullableString, practiceId string, compounderId NullableString, createdAt string, currency string, directions string, dosageForm NullableString, externalOrderId string, externalSubmissionAttempted bool, externalSubmissionBlockedReason NullableString, id string, livemode bool, medicationName string, patientExternalId string, patientName string, patientState string, prescriberName NullableString, prescriberNpi NullableString, quantity float32, quoteCents NullableFloat32, object string, replacesOrderId NullableString, routing NullableListOrdersResponseDataInnerRouting, status string, strength NullableString, trackingNumber NullableString, shippedAt NullableString, deliveredAt NullableString, updatedAt string, ) *CancelOrderResponse`

NewCancelOrderResponse instantiates a new CancelOrderResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelOrderResponseWithDefaults

`func NewCancelOrderResponseWithDefaults() *CancelOrderResponse`

NewCancelOrderResponseWithDefaults instantiates a new CancelOrderResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationReason

`func (o *CancelOrderResponse) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *CancelOrderResponse) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *CancelOrderResponse) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.


### SetCancellationReasonNil

`func (o *CancelOrderResponse) SetCancellationReasonNil(b bool)`

 SetCancellationReasonNil sets the value for CancellationReason to be an explicit nil

### UnsetCancellationReason
`func (o *CancelOrderResponse) UnsetCancellationReason()`

UnsetCancellationReason ensures that no value is present for CancellationReason, not even an explicit nil
### GetCarrier

`func (o *CancelOrderResponse) GetCarrier() string`

GetCarrier returns the Carrier field if non-nil, zero value otherwise.

### GetCarrierOk

`func (o *CancelOrderResponse) GetCarrierOk() (*string, bool)`

GetCarrierOk returns a tuple with the Carrier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrier

`func (o *CancelOrderResponse) SetCarrier(v string)`

SetCarrier sets Carrier field to given value.


### SetCarrierNil

`func (o *CancelOrderResponse) SetCarrierNil(b bool)`

 SetCarrierNil sets the value for Carrier to be an explicit nil

### UnsetCarrier
`func (o *CancelOrderResponse) UnsetCarrier()`

UnsetCarrier ensures that no value is present for Carrier, not even an explicit nil
### GetCatalogItemId

`func (o *CancelOrderResponse) GetCatalogItemId() string`

GetCatalogItemId returns the CatalogItemId field if non-nil, zero value otherwise.

### GetCatalogItemIdOk

`func (o *CancelOrderResponse) GetCatalogItemIdOk() (*string, bool)`

GetCatalogItemIdOk returns a tuple with the CatalogItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogItemId

`func (o *CancelOrderResponse) SetCatalogItemId(v string)`

SetCatalogItemId sets CatalogItemId field to given value.


### SetCatalogItemIdNil

`func (o *CancelOrderResponse) SetCatalogItemIdNil(b bool)`

 SetCatalogItemIdNil sets the value for CatalogItemId to be an explicit nil

### UnsetCatalogItemId
`func (o *CancelOrderResponse) UnsetCatalogItemId()`

UnsetCatalogItemId ensures that no value is present for CatalogItemId, not even an explicit nil
### GetPracticeId

`func (o *CancelOrderResponse) GetPracticeId() string`

GetPracticeId returns the PracticeId field if non-nil, zero value otherwise.

### GetPracticeIdOk

`func (o *CancelOrderResponse) GetPracticeIdOk() (*string, bool)`

GetPracticeIdOk returns a tuple with the PracticeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPracticeId

`func (o *CancelOrderResponse) SetPracticeId(v string)`

SetPracticeId sets PracticeId field to given value.


### GetCompounderId

`func (o *CancelOrderResponse) GetCompounderId() string`

GetCompounderId returns the CompounderId field if non-nil, zero value otherwise.

### GetCompounderIdOk

`func (o *CancelOrderResponse) GetCompounderIdOk() (*string, bool)`

GetCompounderIdOk returns a tuple with the CompounderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompounderId

`func (o *CancelOrderResponse) SetCompounderId(v string)`

SetCompounderId sets CompounderId field to given value.


### SetCompounderIdNil

`func (o *CancelOrderResponse) SetCompounderIdNil(b bool)`

 SetCompounderIdNil sets the value for CompounderId to be an explicit nil

### UnsetCompounderId
`func (o *CancelOrderResponse) UnsetCompounderId()`

UnsetCompounderId ensures that no value is present for CompounderId, not even an explicit nil
### GetCreatedAt

`func (o *CancelOrderResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CancelOrderResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CancelOrderResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *CancelOrderResponse) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CancelOrderResponse) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CancelOrderResponse) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDirections

`func (o *CancelOrderResponse) GetDirections() string`

GetDirections returns the Directions field if non-nil, zero value otherwise.

### GetDirectionsOk

`func (o *CancelOrderResponse) GetDirectionsOk() (*string, bool)`

GetDirectionsOk returns a tuple with the Directions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirections

`func (o *CancelOrderResponse) SetDirections(v string)`

SetDirections sets Directions field to given value.


### GetDosageForm

`func (o *CancelOrderResponse) GetDosageForm() string`

GetDosageForm returns the DosageForm field if non-nil, zero value otherwise.

### GetDosageFormOk

`func (o *CancelOrderResponse) GetDosageFormOk() (*string, bool)`

GetDosageFormOk returns a tuple with the DosageForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDosageForm

`func (o *CancelOrderResponse) SetDosageForm(v string)`

SetDosageForm sets DosageForm field to given value.


### SetDosageFormNil

`func (o *CancelOrderResponse) SetDosageFormNil(b bool)`

 SetDosageFormNil sets the value for DosageForm to be an explicit nil

### UnsetDosageForm
`func (o *CancelOrderResponse) UnsetDosageForm()`

UnsetDosageForm ensures that no value is present for DosageForm, not even an explicit nil
### GetExternalOrderId

`func (o *CancelOrderResponse) GetExternalOrderId() string`

GetExternalOrderId returns the ExternalOrderId field if non-nil, zero value otherwise.

### GetExternalOrderIdOk

`func (o *CancelOrderResponse) GetExternalOrderIdOk() (*string, bool)`

GetExternalOrderIdOk returns a tuple with the ExternalOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrderId

`func (o *CancelOrderResponse) SetExternalOrderId(v string)`

SetExternalOrderId sets ExternalOrderId field to given value.


### GetExternalSubmissionAttempted

`func (o *CancelOrderResponse) GetExternalSubmissionAttempted() bool`

GetExternalSubmissionAttempted returns the ExternalSubmissionAttempted field if non-nil, zero value otherwise.

### GetExternalSubmissionAttemptedOk

`func (o *CancelOrderResponse) GetExternalSubmissionAttemptedOk() (*bool, bool)`

GetExternalSubmissionAttemptedOk returns a tuple with the ExternalSubmissionAttempted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionAttempted

`func (o *CancelOrderResponse) SetExternalSubmissionAttempted(v bool)`

SetExternalSubmissionAttempted sets ExternalSubmissionAttempted field to given value.


### GetExternalSubmissionBlockedReason

`func (o *CancelOrderResponse) GetExternalSubmissionBlockedReason() string`

GetExternalSubmissionBlockedReason returns the ExternalSubmissionBlockedReason field if non-nil, zero value otherwise.

### GetExternalSubmissionBlockedReasonOk

`func (o *CancelOrderResponse) GetExternalSubmissionBlockedReasonOk() (*string, bool)`

GetExternalSubmissionBlockedReasonOk returns a tuple with the ExternalSubmissionBlockedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionBlockedReason

`func (o *CancelOrderResponse) SetExternalSubmissionBlockedReason(v string)`

SetExternalSubmissionBlockedReason sets ExternalSubmissionBlockedReason field to given value.


### SetExternalSubmissionBlockedReasonNil

`func (o *CancelOrderResponse) SetExternalSubmissionBlockedReasonNil(b bool)`

 SetExternalSubmissionBlockedReasonNil sets the value for ExternalSubmissionBlockedReason to be an explicit nil

### UnsetExternalSubmissionBlockedReason
`func (o *CancelOrderResponse) UnsetExternalSubmissionBlockedReason()`

UnsetExternalSubmissionBlockedReason ensures that no value is present for ExternalSubmissionBlockedReason, not even an explicit nil
### GetId

`func (o *CancelOrderResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CancelOrderResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CancelOrderResponse) SetId(v string)`

SetId sets Id field to given value.


### GetLivemode

`func (o *CancelOrderResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *CancelOrderResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *CancelOrderResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetMedicationName

`func (o *CancelOrderResponse) GetMedicationName() string`

GetMedicationName returns the MedicationName field if non-nil, zero value otherwise.

### GetMedicationNameOk

`func (o *CancelOrderResponse) GetMedicationNameOk() (*string, bool)`

GetMedicationNameOk returns a tuple with the MedicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedicationName

`func (o *CancelOrderResponse) SetMedicationName(v string)`

SetMedicationName sets MedicationName field to given value.


### GetPatientExternalId

`func (o *CancelOrderResponse) GetPatientExternalId() string`

GetPatientExternalId returns the PatientExternalId field if non-nil, zero value otherwise.

### GetPatientExternalIdOk

`func (o *CancelOrderResponse) GetPatientExternalIdOk() (*string, bool)`

GetPatientExternalIdOk returns a tuple with the PatientExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientExternalId

`func (o *CancelOrderResponse) SetPatientExternalId(v string)`

SetPatientExternalId sets PatientExternalId field to given value.


### GetPatientName

`func (o *CancelOrderResponse) GetPatientName() string`

GetPatientName returns the PatientName field if non-nil, zero value otherwise.

### GetPatientNameOk

`func (o *CancelOrderResponse) GetPatientNameOk() (*string, bool)`

GetPatientNameOk returns a tuple with the PatientName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientName

`func (o *CancelOrderResponse) SetPatientName(v string)`

SetPatientName sets PatientName field to given value.


### GetPatientState

`func (o *CancelOrderResponse) GetPatientState() string`

GetPatientState returns the PatientState field if non-nil, zero value otherwise.

### GetPatientStateOk

`func (o *CancelOrderResponse) GetPatientStateOk() (*string, bool)`

GetPatientStateOk returns a tuple with the PatientState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientState

`func (o *CancelOrderResponse) SetPatientState(v string)`

SetPatientState sets PatientState field to given value.


### GetPrescriberName

`func (o *CancelOrderResponse) GetPrescriberName() string`

GetPrescriberName returns the PrescriberName field if non-nil, zero value otherwise.

### GetPrescriberNameOk

`func (o *CancelOrderResponse) GetPrescriberNameOk() (*string, bool)`

GetPrescriberNameOk returns a tuple with the PrescriberName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberName

`func (o *CancelOrderResponse) SetPrescriberName(v string)`

SetPrescriberName sets PrescriberName field to given value.


### SetPrescriberNameNil

`func (o *CancelOrderResponse) SetPrescriberNameNil(b bool)`

 SetPrescriberNameNil sets the value for PrescriberName to be an explicit nil

### UnsetPrescriberName
`func (o *CancelOrderResponse) UnsetPrescriberName()`

UnsetPrescriberName ensures that no value is present for PrescriberName, not even an explicit nil
### GetPrescriberNpi

`func (o *CancelOrderResponse) GetPrescriberNpi() string`

GetPrescriberNpi returns the PrescriberNpi field if non-nil, zero value otherwise.

### GetPrescriberNpiOk

`func (o *CancelOrderResponse) GetPrescriberNpiOk() (*string, bool)`

GetPrescriberNpiOk returns a tuple with the PrescriberNpi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberNpi

`func (o *CancelOrderResponse) SetPrescriberNpi(v string)`

SetPrescriberNpi sets PrescriberNpi field to given value.


### SetPrescriberNpiNil

`func (o *CancelOrderResponse) SetPrescriberNpiNil(b bool)`

 SetPrescriberNpiNil sets the value for PrescriberNpi to be an explicit nil

### UnsetPrescriberNpi
`func (o *CancelOrderResponse) UnsetPrescriberNpi()`

UnsetPrescriberNpi ensures that no value is present for PrescriberNpi, not even an explicit nil
### GetQuantity

`func (o *CancelOrderResponse) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CancelOrderResponse) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CancelOrderResponse) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.


### GetQuoteCents

`func (o *CancelOrderResponse) GetQuoteCents() float32`

GetQuoteCents returns the QuoteCents field if non-nil, zero value otherwise.

### GetQuoteCentsOk

`func (o *CancelOrderResponse) GetQuoteCentsOk() (*float32, bool)`

GetQuoteCentsOk returns a tuple with the QuoteCents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteCents

`func (o *CancelOrderResponse) SetQuoteCents(v float32)`

SetQuoteCents sets QuoteCents field to given value.


### SetQuoteCentsNil

`func (o *CancelOrderResponse) SetQuoteCentsNil(b bool)`

 SetQuoteCentsNil sets the value for QuoteCents to be an explicit nil

### UnsetQuoteCents
`func (o *CancelOrderResponse) UnsetQuoteCents()`

UnsetQuoteCents ensures that no value is present for QuoteCents, not even an explicit nil
### GetObject

`func (o *CancelOrderResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *CancelOrderResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *CancelOrderResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetReplacesOrderId

`func (o *CancelOrderResponse) GetReplacesOrderId() string`

GetReplacesOrderId returns the ReplacesOrderId field if non-nil, zero value otherwise.

### GetReplacesOrderIdOk

`func (o *CancelOrderResponse) GetReplacesOrderIdOk() (*string, bool)`

GetReplacesOrderIdOk returns a tuple with the ReplacesOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacesOrderId

`func (o *CancelOrderResponse) SetReplacesOrderId(v string)`

SetReplacesOrderId sets ReplacesOrderId field to given value.


### SetReplacesOrderIdNil

`func (o *CancelOrderResponse) SetReplacesOrderIdNil(b bool)`

 SetReplacesOrderIdNil sets the value for ReplacesOrderId to be an explicit nil

### UnsetReplacesOrderId
`func (o *CancelOrderResponse) UnsetReplacesOrderId()`

UnsetReplacesOrderId ensures that no value is present for ReplacesOrderId, not even an explicit nil
### GetRouting

`func (o *CancelOrderResponse) GetRouting() ListOrdersResponseDataInnerRouting`

GetRouting returns the Routing field if non-nil, zero value otherwise.

### GetRoutingOk

`func (o *CancelOrderResponse) GetRoutingOk() (*ListOrdersResponseDataInnerRouting, bool)`

GetRoutingOk returns a tuple with the Routing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRouting

`func (o *CancelOrderResponse) SetRouting(v ListOrdersResponseDataInnerRouting)`

SetRouting sets Routing field to given value.


### SetRoutingNil

`func (o *CancelOrderResponse) SetRoutingNil(b bool)`

 SetRoutingNil sets the value for Routing to be an explicit nil

### UnsetRouting
`func (o *CancelOrderResponse) UnsetRouting()`

UnsetRouting ensures that no value is present for Routing, not even an explicit nil
### GetStatus

`func (o *CancelOrderResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CancelOrderResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CancelOrderResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStrength

`func (o *CancelOrderResponse) GetStrength() string`

GetStrength returns the Strength field if non-nil, zero value otherwise.

### GetStrengthOk

`func (o *CancelOrderResponse) GetStrengthOk() (*string, bool)`

GetStrengthOk returns a tuple with the Strength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrength

`func (o *CancelOrderResponse) SetStrength(v string)`

SetStrength sets Strength field to given value.


### SetStrengthNil

`func (o *CancelOrderResponse) SetStrengthNil(b bool)`

 SetStrengthNil sets the value for Strength to be an explicit nil

### UnsetStrength
`func (o *CancelOrderResponse) UnsetStrength()`

UnsetStrength ensures that no value is present for Strength, not even an explicit nil
### GetTrackingNumber

`func (o *CancelOrderResponse) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *CancelOrderResponse) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *CancelOrderResponse) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.


### SetTrackingNumberNil

`func (o *CancelOrderResponse) SetTrackingNumberNil(b bool)`

 SetTrackingNumberNil sets the value for TrackingNumber to be an explicit nil

### UnsetTrackingNumber
`func (o *CancelOrderResponse) UnsetTrackingNumber()`

UnsetTrackingNumber ensures that no value is present for TrackingNumber, not even an explicit nil
### GetShippedAt

`func (o *CancelOrderResponse) GetShippedAt() string`

GetShippedAt returns the ShippedAt field if non-nil, zero value otherwise.

### GetShippedAtOk

`func (o *CancelOrderResponse) GetShippedAtOk() (*string, bool)`

GetShippedAtOk returns a tuple with the ShippedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippedAt

`func (o *CancelOrderResponse) SetShippedAt(v string)`

SetShippedAt sets ShippedAt field to given value.


### SetShippedAtNil

`func (o *CancelOrderResponse) SetShippedAtNil(b bool)`

 SetShippedAtNil sets the value for ShippedAt to be an explicit nil

### UnsetShippedAt
`func (o *CancelOrderResponse) UnsetShippedAt()`

UnsetShippedAt ensures that no value is present for ShippedAt, not even an explicit nil
### GetDeliveredAt

`func (o *CancelOrderResponse) GetDeliveredAt() string`

GetDeliveredAt returns the DeliveredAt field if non-nil, zero value otherwise.

### GetDeliveredAtOk

`func (o *CancelOrderResponse) GetDeliveredAtOk() (*string, bool)`

GetDeliveredAtOk returns a tuple with the DeliveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveredAt

`func (o *CancelOrderResponse) SetDeliveredAt(v string)`

SetDeliveredAt sets DeliveredAt field to given value.


### SetDeliveredAtNil

`func (o *CancelOrderResponse) SetDeliveredAtNil(b bool)`

 SetDeliveredAtNil sets the value for DeliveredAt to be an explicit nil

### UnsetDeliveredAt
`func (o *CancelOrderResponse) UnsetDeliveredAt()`

UnsetDeliveredAt ensures that no value is present for DeliveredAt, not even an explicit nil
### GetUpdatedAt

`func (o *CancelOrderResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CancelOrderResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CancelOrderResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


