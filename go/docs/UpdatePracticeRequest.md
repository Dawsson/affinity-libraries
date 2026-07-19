# UpdatePracticeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**CreateOrderRequestAnyOfPatientAddress**](CreateOrderRequestAnyOfPatientAddress.md) |  | [optional]
**Attestations** | Pointer to [**CreatePracticeRequestAttestations**](CreatePracticeRequestAttestations.md) |  | [optional]
**ComplianceContact** | Pointer to [**NullableCreatePracticeRequestComplianceContact**](CreatePracticeRequestComplianceContact.md) |  | [optional]
**ExternalId** | Pointer to **NullableString** |  | [optional]
**LegalName** | Pointer to **NullableString** |  | [optional]
**Metadata** | Pointer to **map[string]interface{}** |  | [optional]
**Name** | Pointer to **string** |  | [optional]
**Prescribers** | Pointer to [**[]CreatePracticeRequestPrescribersInner**](CreatePracticeRequestPrescribersInner.md) |  | [optional]
**PrimaryContact** | Pointer to [**NullableCreatePracticeRequestComplianceContact**](CreatePracticeRequestComplianceContact.md) |  | [optional]
**SupportEmail** | Pointer to **NullableString** |  | [optional]
**SupportPhone** | Pointer to **NullableString** |  | [optional]
**Timezone** | Pointer to **string** |  | [optional]

## Methods

### NewUpdatePracticeRequest

`func NewUpdatePracticeRequest() *UpdatePracticeRequest`

NewUpdatePracticeRequest instantiates a new UpdatePracticeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatePracticeRequestWithDefaults

`func NewUpdatePracticeRequestWithDefaults() *UpdatePracticeRequest`

NewUpdatePracticeRequestWithDefaults instantiates a new UpdatePracticeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *UpdatePracticeRequest) GetAddress() CreateOrderRequestAnyOfPatientAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *UpdatePracticeRequest) GetAddressOk() (*CreateOrderRequestAnyOfPatientAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *UpdatePracticeRequest) SetAddress(v CreateOrderRequestAnyOfPatientAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *UpdatePracticeRequest) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAttestations

`func (o *UpdatePracticeRequest) GetAttestations() CreatePracticeRequestAttestations`

GetAttestations returns the Attestations field if non-nil, zero value otherwise.

### GetAttestationsOk

`func (o *UpdatePracticeRequest) GetAttestationsOk() (*CreatePracticeRequestAttestations, bool)`

GetAttestationsOk returns a tuple with the Attestations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttestations

`func (o *UpdatePracticeRequest) SetAttestations(v CreatePracticeRequestAttestations)`

SetAttestations sets Attestations field to given value.

### HasAttestations

`func (o *UpdatePracticeRequest) HasAttestations() bool`

HasAttestations returns a boolean if a field has been set.

### GetComplianceContact

`func (o *UpdatePracticeRequest) GetComplianceContact() CreatePracticeRequestComplianceContact`

GetComplianceContact returns the ComplianceContact field if non-nil, zero value otherwise.

### GetComplianceContactOk

`func (o *UpdatePracticeRequest) GetComplianceContactOk() (*CreatePracticeRequestComplianceContact, bool)`

GetComplianceContactOk returns a tuple with the ComplianceContact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplianceContact

`func (o *UpdatePracticeRequest) SetComplianceContact(v CreatePracticeRequestComplianceContact)`

SetComplianceContact sets ComplianceContact field to given value.

### HasComplianceContact

`func (o *UpdatePracticeRequest) HasComplianceContact() bool`

HasComplianceContact returns a boolean if a field has been set.

### SetComplianceContactNil

`func (o *UpdatePracticeRequest) SetComplianceContactNil(b bool)`

 SetComplianceContactNil sets the value for ComplianceContact to be an explicit nil

### UnsetComplianceContact
`func (o *UpdatePracticeRequest) UnsetComplianceContact()`

UnsetComplianceContact ensures that no value is present for ComplianceContact, not even an explicit nil
### GetExternalId

`func (o *UpdatePracticeRequest) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *UpdatePracticeRequest) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *UpdatePracticeRequest) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *UpdatePracticeRequest) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### SetExternalIdNil

`func (o *UpdatePracticeRequest) SetExternalIdNil(b bool)`

 SetExternalIdNil sets the value for ExternalId to be an explicit nil

### UnsetExternalId
`func (o *UpdatePracticeRequest) UnsetExternalId()`

UnsetExternalId ensures that no value is present for ExternalId, not even an explicit nil
### GetLegalName

`func (o *UpdatePracticeRequest) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *UpdatePracticeRequest) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *UpdatePracticeRequest) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.

### HasLegalName

`func (o *UpdatePracticeRequest) HasLegalName() bool`

HasLegalName returns a boolean if a field has been set.

### SetLegalNameNil

`func (o *UpdatePracticeRequest) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *UpdatePracticeRequest) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetMetadata

`func (o *UpdatePracticeRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *UpdatePracticeRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *UpdatePracticeRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *UpdatePracticeRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetName

`func (o *UpdatePracticeRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdatePracticeRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdatePracticeRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdatePracticeRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPrescribers

`func (o *UpdatePracticeRequest) GetPrescribers() []CreatePracticeRequestPrescribersInner`

GetPrescribers returns the Prescribers field if non-nil, zero value otherwise.

### GetPrescribersOk

`func (o *UpdatePracticeRequest) GetPrescribersOk() (*[]CreatePracticeRequestPrescribersInner, bool)`

GetPrescribersOk returns a tuple with the Prescribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribers

`func (o *UpdatePracticeRequest) SetPrescribers(v []CreatePracticeRequestPrescribersInner)`

SetPrescribers sets Prescribers field to given value.

### HasPrescribers

`func (o *UpdatePracticeRequest) HasPrescribers() bool`

HasPrescribers returns a boolean if a field has been set.

### GetPrimaryContact

`func (o *UpdatePracticeRequest) GetPrimaryContact() CreatePracticeRequestComplianceContact`

GetPrimaryContact returns the PrimaryContact field if non-nil, zero value otherwise.

### GetPrimaryContactOk

`func (o *UpdatePracticeRequest) GetPrimaryContactOk() (*CreatePracticeRequestComplianceContact, bool)`

GetPrimaryContactOk returns a tuple with the PrimaryContact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContact

`func (o *UpdatePracticeRequest) SetPrimaryContact(v CreatePracticeRequestComplianceContact)`

SetPrimaryContact sets PrimaryContact field to given value.

### HasPrimaryContact

`func (o *UpdatePracticeRequest) HasPrimaryContact() bool`

HasPrimaryContact returns a boolean if a field has been set.

### SetPrimaryContactNil

`func (o *UpdatePracticeRequest) SetPrimaryContactNil(b bool)`

 SetPrimaryContactNil sets the value for PrimaryContact to be an explicit nil

### UnsetPrimaryContact
`func (o *UpdatePracticeRequest) UnsetPrimaryContact()`

UnsetPrimaryContact ensures that no value is present for PrimaryContact, not even an explicit nil
### GetSupportEmail

`func (o *UpdatePracticeRequest) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *UpdatePracticeRequest) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *UpdatePracticeRequest) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.

### HasSupportEmail

`func (o *UpdatePracticeRequest) HasSupportEmail() bool`

HasSupportEmail returns a boolean if a field has been set.

### SetSupportEmailNil

`func (o *UpdatePracticeRequest) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *UpdatePracticeRequest) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetSupportPhone

`func (o *UpdatePracticeRequest) GetSupportPhone() string`

GetSupportPhone returns the SupportPhone field if non-nil, zero value otherwise.

### GetSupportPhoneOk

`func (o *UpdatePracticeRequest) GetSupportPhoneOk() (*string, bool)`

GetSupportPhoneOk returns a tuple with the SupportPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportPhone

`func (o *UpdatePracticeRequest) SetSupportPhone(v string)`

SetSupportPhone sets SupportPhone field to given value.

### HasSupportPhone

`func (o *UpdatePracticeRequest) HasSupportPhone() bool`

HasSupportPhone returns a boolean if a field has been set.

### SetSupportPhoneNil

`func (o *UpdatePracticeRequest) SetSupportPhoneNil(b bool)`

 SetSupportPhoneNil sets the value for SupportPhone to be an explicit nil

### UnsetSupportPhone
`func (o *UpdatePracticeRequest) UnsetSupportPhone()`

UnsetSupportPhone ensures that no value is present for SupportPhone, not even an explicit nil
### GetTimezone

`func (o *UpdatePracticeRequest) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *UpdatePracticeRequest) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *UpdatePracticeRequest) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *UpdatePracticeRequest) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


