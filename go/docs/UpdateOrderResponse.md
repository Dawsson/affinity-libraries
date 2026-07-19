# UpdateOrderResponse

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

### NewUpdateOrderResponse

`func NewUpdateOrderResponse(cancellationReason NullableString, carrier NullableString, catalogItemId NullableString, practiceId string, compounderId NullableString, createdAt string, currency string, directions string, dosageForm NullableString, externalOrderId string, externalSubmissionAttempted bool, externalSubmissionBlockedReason NullableString, id string, livemode bool, medicationName string, patientExternalId string, patientName string, patientState string, prescriberName NullableString, prescriberNpi NullableString, quantity float32, quoteCents NullableFloat32, object string, replacesOrderId NullableString, routing NullableListOrdersResponseDataInnerRouting, status string, strength NullableString, trackingNumber NullableString, shippedAt NullableString, deliveredAt NullableString, updatedAt string, ) *UpdateOrderResponse`

NewUpdateOrderResponse instantiates a new UpdateOrderResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateOrderResponseWithDefaults

`func NewUpdateOrderResponseWithDefaults() *UpdateOrderResponse`

NewUpdateOrderResponseWithDefaults instantiates a new UpdateOrderResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationReason

`func (o *UpdateOrderResponse) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *UpdateOrderResponse) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *UpdateOrderResponse) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.


### SetCancellationReasonNil

`func (o *UpdateOrderResponse) SetCancellationReasonNil(b bool)`

 SetCancellationReasonNil sets the value for CancellationReason to be an explicit nil

### UnsetCancellationReason
`func (o *UpdateOrderResponse) UnsetCancellationReason()`

UnsetCancellationReason ensures that no value is present for CancellationReason, not even an explicit nil
### GetCarrier

`func (o *UpdateOrderResponse) GetCarrier() string`

GetCarrier returns the Carrier field if non-nil, zero value otherwise.

### GetCarrierOk

`func (o *UpdateOrderResponse) GetCarrierOk() (*string, bool)`

GetCarrierOk returns a tuple with the Carrier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrier

`func (o *UpdateOrderResponse) SetCarrier(v string)`

SetCarrier sets Carrier field to given value.


### SetCarrierNil

`func (o *UpdateOrderResponse) SetCarrierNil(b bool)`

 SetCarrierNil sets the value for Carrier to be an explicit nil

### UnsetCarrier
`func (o *UpdateOrderResponse) UnsetCarrier()`

UnsetCarrier ensures that no value is present for Carrier, not even an explicit nil
### GetCatalogItemId

`func (o *UpdateOrderResponse) GetCatalogItemId() string`

GetCatalogItemId returns the CatalogItemId field if non-nil, zero value otherwise.

### GetCatalogItemIdOk

`func (o *UpdateOrderResponse) GetCatalogItemIdOk() (*string, bool)`

GetCatalogItemIdOk returns a tuple with the CatalogItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogItemId

`func (o *UpdateOrderResponse) SetCatalogItemId(v string)`

SetCatalogItemId sets CatalogItemId field to given value.


### SetCatalogItemIdNil

`func (o *UpdateOrderResponse) SetCatalogItemIdNil(b bool)`

 SetCatalogItemIdNil sets the value for CatalogItemId to be an explicit nil

### UnsetCatalogItemId
`func (o *UpdateOrderResponse) UnsetCatalogItemId()`

UnsetCatalogItemId ensures that no value is present for CatalogItemId, not even an explicit nil
### GetPracticeId

`func (o *UpdateOrderResponse) GetPracticeId() string`

GetPracticeId returns the PracticeId field if non-nil, zero value otherwise.

### GetPracticeIdOk

`func (o *UpdateOrderResponse) GetPracticeIdOk() (*string, bool)`

GetPracticeIdOk returns a tuple with the PracticeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPracticeId

`func (o *UpdateOrderResponse) SetPracticeId(v string)`

SetPracticeId sets PracticeId field to given value.


### GetCompounderId

`func (o *UpdateOrderResponse) GetCompounderId() string`

GetCompounderId returns the CompounderId field if non-nil, zero value otherwise.

### GetCompounderIdOk

`func (o *UpdateOrderResponse) GetCompounderIdOk() (*string, bool)`

GetCompounderIdOk returns a tuple with the CompounderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompounderId

`func (o *UpdateOrderResponse) SetCompounderId(v string)`

SetCompounderId sets CompounderId field to given value.


### SetCompounderIdNil

`func (o *UpdateOrderResponse) SetCompounderIdNil(b bool)`

 SetCompounderIdNil sets the value for CompounderId to be an explicit nil

### UnsetCompounderId
`func (o *UpdateOrderResponse) UnsetCompounderId()`

UnsetCompounderId ensures that no value is present for CompounderId, not even an explicit nil
### GetCreatedAt

`func (o *UpdateOrderResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UpdateOrderResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UpdateOrderResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *UpdateOrderResponse) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *UpdateOrderResponse) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *UpdateOrderResponse) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDirections

`func (o *UpdateOrderResponse) GetDirections() string`

GetDirections returns the Directions field if non-nil, zero value otherwise.

### GetDirectionsOk

`func (o *UpdateOrderResponse) GetDirectionsOk() (*string, bool)`

GetDirectionsOk returns a tuple with the Directions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirections

`func (o *UpdateOrderResponse) SetDirections(v string)`

SetDirections sets Directions field to given value.


### GetDosageForm

`func (o *UpdateOrderResponse) GetDosageForm() string`

GetDosageForm returns the DosageForm field if non-nil, zero value otherwise.

### GetDosageFormOk

`func (o *UpdateOrderResponse) GetDosageFormOk() (*string, bool)`

GetDosageFormOk returns a tuple with the DosageForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDosageForm

`func (o *UpdateOrderResponse) SetDosageForm(v string)`

SetDosageForm sets DosageForm field to given value.


### SetDosageFormNil

`func (o *UpdateOrderResponse) SetDosageFormNil(b bool)`

 SetDosageFormNil sets the value for DosageForm to be an explicit nil

### UnsetDosageForm
`func (o *UpdateOrderResponse) UnsetDosageForm()`

UnsetDosageForm ensures that no value is present for DosageForm, not even an explicit nil
### GetExternalOrderId

`func (o *UpdateOrderResponse) GetExternalOrderId() string`

GetExternalOrderId returns the ExternalOrderId field if non-nil, zero value otherwise.

### GetExternalOrderIdOk

`func (o *UpdateOrderResponse) GetExternalOrderIdOk() (*string, bool)`

GetExternalOrderIdOk returns a tuple with the ExternalOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrderId

`func (o *UpdateOrderResponse) SetExternalOrderId(v string)`

SetExternalOrderId sets ExternalOrderId field to given value.


### GetExternalSubmissionAttempted

`func (o *UpdateOrderResponse) GetExternalSubmissionAttempted() bool`

GetExternalSubmissionAttempted returns the ExternalSubmissionAttempted field if non-nil, zero value otherwise.

### GetExternalSubmissionAttemptedOk

`func (o *UpdateOrderResponse) GetExternalSubmissionAttemptedOk() (*bool, bool)`

GetExternalSubmissionAttemptedOk returns a tuple with the ExternalSubmissionAttempted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionAttempted

`func (o *UpdateOrderResponse) SetExternalSubmissionAttempted(v bool)`

SetExternalSubmissionAttempted sets ExternalSubmissionAttempted field to given value.


### GetExternalSubmissionBlockedReason

`func (o *UpdateOrderResponse) GetExternalSubmissionBlockedReason() string`

GetExternalSubmissionBlockedReason returns the ExternalSubmissionBlockedReason field if non-nil, zero value otherwise.

### GetExternalSubmissionBlockedReasonOk

`func (o *UpdateOrderResponse) GetExternalSubmissionBlockedReasonOk() (*string, bool)`

GetExternalSubmissionBlockedReasonOk returns a tuple with the ExternalSubmissionBlockedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSubmissionBlockedReason

`func (o *UpdateOrderResponse) SetExternalSubmissionBlockedReason(v string)`

SetExternalSubmissionBlockedReason sets ExternalSubmissionBlockedReason field to given value.


### SetExternalSubmissionBlockedReasonNil

`func (o *UpdateOrderResponse) SetExternalSubmissionBlockedReasonNil(b bool)`

 SetExternalSubmissionBlockedReasonNil sets the value for ExternalSubmissionBlockedReason to be an explicit nil

### UnsetExternalSubmissionBlockedReason
`func (o *UpdateOrderResponse) UnsetExternalSubmissionBlockedReason()`

UnsetExternalSubmissionBlockedReason ensures that no value is present for ExternalSubmissionBlockedReason, not even an explicit nil
### GetId

`func (o *UpdateOrderResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UpdateOrderResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UpdateOrderResponse) SetId(v string)`

SetId sets Id field to given value.


### GetLivemode

`func (o *UpdateOrderResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *UpdateOrderResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *UpdateOrderResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetMedicationName

`func (o *UpdateOrderResponse) GetMedicationName() string`

GetMedicationName returns the MedicationName field if non-nil, zero value otherwise.

### GetMedicationNameOk

`func (o *UpdateOrderResponse) GetMedicationNameOk() (*string, bool)`

GetMedicationNameOk returns a tuple with the MedicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedicationName

`func (o *UpdateOrderResponse) SetMedicationName(v string)`

SetMedicationName sets MedicationName field to given value.


### GetPatientExternalId

`func (o *UpdateOrderResponse) GetPatientExternalId() string`

GetPatientExternalId returns the PatientExternalId field if non-nil, zero value otherwise.

### GetPatientExternalIdOk

`func (o *UpdateOrderResponse) GetPatientExternalIdOk() (*string, bool)`

GetPatientExternalIdOk returns a tuple with the PatientExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientExternalId

`func (o *UpdateOrderResponse) SetPatientExternalId(v string)`

SetPatientExternalId sets PatientExternalId field to given value.


### GetPatientName

`func (o *UpdateOrderResponse) GetPatientName() string`

GetPatientName returns the PatientName field if non-nil, zero value otherwise.

### GetPatientNameOk

`func (o *UpdateOrderResponse) GetPatientNameOk() (*string, bool)`

GetPatientNameOk returns a tuple with the PatientName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientName

`func (o *UpdateOrderResponse) SetPatientName(v string)`

SetPatientName sets PatientName field to given value.


### GetPatientState

`func (o *UpdateOrderResponse) GetPatientState() string`

GetPatientState returns the PatientState field if non-nil, zero value otherwise.

### GetPatientStateOk

`func (o *UpdateOrderResponse) GetPatientStateOk() (*string, bool)`

GetPatientStateOk returns a tuple with the PatientState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientState

`func (o *UpdateOrderResponse) SetPatientState(v string)`

SetPatientState sets PatientState field to given value.


### GetPrescriberName

`func (o *UpdateOrderResponse) GetPrescriberName() string`

GetPrescriberName returns the PrescriberName field if non-nil, zero value otherwise.

### GetPrescriberNameOk

`func (o *UpdateOrderResponse) GetPrescriberNameOk() (*string, bool)`

GetPrescriberNameOk returns a tuple with the PrescriberName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberName

`func (o *UpdateOrderResponse) SetPrescriberName(v string)`

SetPrescriberName sets PrescriberName field to given value.


### SetPrescriberNameNil

`func (o *UpdateOrderResponse) SetPrescriberNameNil(b bool)`

 SetPrescriberNameNil sets the value for PrescriberName to be an explicit nil

### UnsetPrescriberName
`func (o *UpdateOrderResponse) UnsetPrescriberName()`

UnsetPrescriberName ensures that no value is present for PrescriberName, not even an explicit nil
### GetPrescriberNpi

`func (o *UpdateOrderResponse) GetPrescriberNpi() string`

GetPrescriberNpi returns the PrescriberNpi field if non-nil, zero value otherwise.

### GetPrescriberNpiOk

`func (o *UpdateOrderResponse) GetPrescriberNpiOk() (*string, bool)`

GetPrescriberNpiOk returns a tuple with the PrescriberNpi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescriberNpi

`func (o *UpdateOrderResponse) SetPrescriberNpi(v string)`

SetPrescriberNpi sets PrescriberNpi field to given value.


### SetPrescriberNpiNil

`func (o *UpdateOrderResponse) SetPrescriberNpiNil(b bool)`

 SetPrescriberNpiNil sets the value for PrescriberNpi to be an explicit nil

### UnsetPrescriberNpi
`func (o *UpdateOrderResponse) UnsetPrescriberNpi()`

UnsetPrescriberNpi ensures that no value is present for PrescriberNpi, not even an explicit nil
### GetQuantity

`func (o *UpdateOrderResponse) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *UpdateOrderResponse) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *UpdateOrderResponse) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.


### GetQuoteCents

`func (o *UpdateOrderResponse) GetQuoteCents() float32`

GetQuoteCents returns the QuoteCents field if non-nil, zero value otherwise.

### GetQuoteCentsOk

`func (o *UpdateOrderResponse) GetQuoteCentsOk() (*float32, bool)`

GetQuoteCentsOk returns a tuple with the QuoteCents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteCents

`func (o *UpdateOrderResponse) SetQuoteCents(v float32)`

SetQuoteCents sets QuoteCents field to given value.


### SetQuoteCentsNil

`func (o *UpdateOrderResponse) SetQuoteCentsNil(b bool)`

 SetQuoteCentsNil sets the value for QuoteCents to be an explicit nil

### UnsetQuoteCents
`func (o *UpdateOrderResponse) UnsetQuoteCents()`

UnsetQuoteCents ensures that no value is present for QuoteCents, not even an explicit nil
### GetObject

`func (o *UpdateOrderResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *UpdateOrderResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *UpdateOrderResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetReplacesOrderId

`func (o *UpdateOrderResponse) GetReplacesOrderId() string`

GetReplacesOrderId returns the ReplacesOrderId field if non-nil, zero value otherwise.

### GetReplacesOrderIdOk

`func (o *UpdateOrderResponse) GetReplacesOrderIdOk() (*string, bool)`

GetReplacesOrderIdOk returns a tuple with the ReplacesOrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacesOrderId

`func (o *UpdateOrderResponse) SetReplacesOrderId(v string)`

SetReplacesOrderId sets ReplacesOrderId field to given value.


### SetReplacesOrderIdNil

`func (o *UpdateOrderResponse) SetReplacesOrderIdNil(b bool)`

 SetReplacesOrderIdNil sets the value for ReplacesOrderId to be an explicit nil

### UnsetReplacesOrderId
`func (o *UpdateOrderResponse) UnsetReplacesOrderId()`

UnsetReplacesOrderId ensures that no value is present for ReplacesOrderId, not even an explicit nil
### GetRouting

`func (o *UpdateOrderResponse) GetRouting() ListOrdersResponseDataInnerRouting`

GetRouting returns the Routing field if non-nil, zero value otherwise.

### GetRoutingOk

`func (o *UpdateOrderResponse) GetRoutingOk() (*ListOrdersResponseDataInnerRouting, bool)`

GetRoutingOk returns a tuple with the Routing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRouting

`func (o *UpdateOrderResponse) SetRouting(v ListOrdersResponseDataInnerRouting)`

SetRouting sets Routing field to given value.


### SetRoutingNil

`func (o *UpdateOrderResponse) SetRoutingNil(b bool)`

 SetRoutingNil sets the value for Routing to be an explicit nil

### UnsetRouting
`func (o *UpdateOrderResponse) UnsetRouting()`

UnsetRouting ensures that no value is present for Routing, not even an explicit nil
### GetStatus

`func (o *UpdateOrderResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UpdateOrderResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UpdateOrderResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStrength

`func (o *UpdateOrderResponse) GetStrength() string`

GetStrength returns the Strength field if non-nil, zero value otherwise.

### GetStrengthOk

`func (o *UpdateOrderResponse) GetStrengthOk() (*string, bool)`

GetStrengthOk returns a tuple with the Strength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrength

`func (o *UpdateOrderResponse) SetStrength(v string)`

SetStrength sets Strength field to given value.


### SetStrengthNil

`func (o *UpdateOrderResponse) SetStrengthNil(b bool)`

 SetStrengthNil sets the value for Strength to be an explicit nil

### UnsetStrength
`func (o *UpdateOrderResponse) UnsetStrength()`

UnsetStrength ensures that no value is present for Strength, not even an explicit nil
### GetTrackingNumber

`func (o *UpdateOrderResponse) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *UpdateOrderResponse) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *UpdateOrderResponse) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.


### SetTrackingNumberNil

`func (o *UpdateOrderResponse) SetTrackingNumberNil(b bool)`

 SetTrackingNumberNil sets the value for TrackingNumber to be an explicit nil

### UnsetTrackingNumber
`func (o *UpdateOrderResponse) UnsetTrackingNumber()`

UnsetTrackingNumber ensures that no value is present for TrackingNumber, not even an explicit nil
### GetShippedAt

`func (o *UpdateOrderResponse) GetShippedAt() string`

GetShippedAt returns the ShippedAt field if non-nil, zero value otherwise.

### GetShippedAtOk

`func (o *UpdateOrderResponse) GetShippedAtOk() (*string, bool)`

GetShippedAtOk returns a tuple with the ShippedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippedAt

`func (o *UpdateOrderResponse) SetShippedAt(v string)`

SetShippedAt sets ShippedAt field to given value.


### SetShippedAtNil

`func (o *UpdateOrderResponse) SetShippedAtNil(b bool)`

 SetShippedAtNil sets the value for ShippedAt to be an explicit nil

### UnsetShippedAt
`func (o *UpdateOrderResponse) UnsetShippedAt()`

UnsetShippedAt ensures that no value is present for ShippedAt, not even an explicit nil
### GetDeliveredAt

`func (o *UpdateOrderResponse) GetDeliveredAt() string`

GetDeliveredAt returns the DeliveredAt field if non-nil, zero value otherwise.

### GetDeliveredAtOk

`func (o *UpdateOrderResponse) GetDeliveredAtOk() (*string, bool)`

GetDeliveredAtOk returns a tuple with the DeliveredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveredAt

`func (o *UpdateOrderResponse) SetDeliveredAt(v string)`

SetDeliveredAt sets DeliveredAt field to given value.


### SetDeliveredAtNil

`func (o *UpdateOrderResponse) SetDeliveredAtNil(b bool)`

 SetDeliveredAtNil sets the value for DeliveredAt to be an explicit nil

### UnsetDeliveredAt
`func (o *UpdateOrderResponse) UnsetDeliveredAt()`

UnsetDeliveredAt ensures that no value is present for DeliveredAt, not even an explicit nil
### GetUpdatedAt

`func (o *UpdateOrderResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *UpdateOrderResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *UpdateOrderResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


