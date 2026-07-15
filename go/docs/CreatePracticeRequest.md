# CreatePracticeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | [**CreatePracticeRequestAddress**](CreatePracticeRequestAddress.md) |  |
**Attestations** | [**CreatePracticeRequestAttestations**](CreatePracticeRequestAttestations.md) |  |
**ComplianceContact** | Pointer to [**NullableListPractices200ResponseDataInnerContactsPrimary**](ListPractices200ResponseDataInnerContactsPrimary.md) |  | [optional]
**ExternalId** | Pointer to **NullableString** |  | [optional]
**LegalName** | Pointer to **NullableString** |  | [optional]
**Name** | **NullableString** |  |
**Prescribers** | Pointer to [**[]CreatePracticeRequestPrescribersInner**](CreatePracticeRequestPrescribersInner.md) |  | [optional]
**PrimaryContact** | Pointer to [**NullableListPractices200ResponseDataInnerContactsPrimary**](ListPractices200ResponseDataInnerContactsPrimary.md) |  | [optional]
**SupportEmail** | Pointer to **NullableString** |  | [optional]
**SupportPhone** | Pointer to **NullableString** |  | [optional]
**Timezone** | Pointer to **NullableString** |  | [optional]

## Methods

### NewCreatePracticeRequest

`func NewCreatePracticeRequest(address CreatePracticeRequestAddress, attestations CreatePracticeRequestAttestations, name NullableString, ) *CreatePracticeRequest`

NewCreatePracticeRequest instantiates a new CreatePracticeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePracticeRequestWithDefaults

`func NewCreatePracticeRequestWithDefaults() *CreatePracticeRequest`

NewCreatePracticeRequestWithDefaults instantiates a new CreatePracticeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *CreatePracticeRequest) GetAddress() CreatePracticeRequestAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CreatePracticeRequest) GetAddressOk() (*CreatePracticeRequestAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CreatePracticeRequest) SetAddress(v CreatePracticeRequestAddress)`

SetAddress sets Address field to given value.


### GetAttestations

`func (o *CreatePracticeRequest) GetAttestations() CreatePracticeRequestAttestations`

GetAttestations returns the Attestations field if non-nil, zero value otherwise.

### GetAttestationsOk

`func (o *CreatePracticeRequest) GetAttestationsOk() (*CreatePracticeRequestAttestations, bool)`

GetAttestationsOk returns a tuple with the Attestations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttestations

`func (o *CreatePracticeRequest) SetAttestations(v CreatePracticeRequestAttestations)`

SetAttestations sets Attestations field to given value.


### GetComplianceContact

`func (o *CreatePracticeRequest) GetComplianceContact() ListPractices200ResponseDataInnerContactsPrimary`

GetComplianceContact returns the ComplianceContact field if non-nil, zero value otherwise.

### GetComplianceContactOk

`func (o *CreatePracticeRequest) GetComplianceContactOk() (*ListPractices200ResponseDataInnerContactsPrimary, bool)`

GetComplianceContactOk returns a tuple with the ComplianceContact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplianceContact

`func (o *CreatePracticeRequest) SetComplianceContact(v ListPractices200ResponseDataInnerContactsPrimary)`

SetComplianceContact sets ComplianceContact field to given value.

### HasComplianceContact

`func (o *CreatePracticeRequest) HasComplianceContact() bool`

HasComplianceContact returns a boolean if a field has been set.

### SetComplianceContactNil

`func (o *CreatePracticeRequest) SetComplianceContactNil(b bool)`

 SetComplianceContactNil sets the value for ComplianceContact to be an explicit nil

### UnsetComplianceContact
`func (o *CreatePracticeRequest) UnsetComplianceContact()`

UnsetComplianceContact ensures that no value is present for ComplianceContact, not even an explicit nil
### GetExternalId

`func (o *CreatePracticeRequest) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *CreatePracticeRequest) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *CreatePracticeRequest) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *CreatePracticeRequest) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### SetExternalIdNil

`func (o *CreatePracticeRequest) SetExternalIdNil(b bool)`

 SetExternalIdNil sets the value for ExternalId to be an explicit nil

### UnsetExternalId
`func (o *CreatePracticeRequest) UnsetExternalId()`

UnsetExternalId ensures that no value is present for ExternalId, not even an explicit nil
### GetLegalName

`func (o *CreatePracticeRequest) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *CreatePracticeRequest) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *CreatePracticeRequest) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.

### HasLegalName

`func (o *CreatePracticeRequest) HasLegalName() bool`

HasLegalName returns a boolean if a field has been set.

### SetLegalNameNil

`func (o *CreatePracticeRequest) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *CreatePracticeRequest) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetName

`func (o *CreatePracticeRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreatePracticeRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreatePracticeRequest) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *CreatePracticeRequest) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CreatePracticeRequest) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetPrescribers

`func (o *CreatePracticeRequest) GetPrescribers() []CreatePracticeRequestPrescribersInner`

GetPrescribers returns the Prescribers field if non-nil, zero value otherwise.

### GetPrescribersOk

`func (o *CreatePracticeRequest) GetPrescribersOk() (*[]CreatePracticeRequestPrescribersInner, bool)`

GetPrescribersOk returns a tuple with the Prescribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribers

`func (o *CreatePracticeRequest) SetPrescribers(v []CreatePracticeRequestPrescribersInner)`

SetPrescribers sets Prescribers field to given value.

### HasPrescribers

`func (o *CreatePracticeRequest) HasPrescribers() bool`

HasPrescribers returns a boolean if a field has been set.

### GetPrimaryContact

`func (o *CreatePracticeRequest) GetPrimaryContact() ListPractices200ResponseDataInnerContactsPrimary`

GetPrimaryContact returns the PrimaryContact field if non-nil, zero value otherwise.

### GetPrimaryContactOk

`func (o *CreatePracticeRequest) GetPrimaryContactOk() (*ListPractices200ResponseDataInnerContactsPrimary, bool)`

GetPrimaryContactOk returns a tuple with the PrimaryContact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryContact

`func (o *CreatePracticeRequest) SetPrimaryContact(v ListPractices200ResponseDataInnerContactsPrimary)`

SetPrimaryContact sets PrimaryContact field to given value.

### HasPrimaryContact

`func (o *CreatePracticeRequest) HasPrimaryContact() bool`

HasPrimaryContact returns a boolean if a field has been set.

### SetPrimaryContactNil

`func (o *CreatePracticeRequest) SetPrimaryContactNil(b bool)`

 SetPrimaryContactNil sets the value for PrimaryContact to be an explicit nil

### UnsetPrimaryContact
`func (o *CreatePracticeRequest) UnsetPrimaryContact()`

UnsetPrimaryContact ensures that no value is present for PrimaryContact, not even an explicit nil
### GetSupportEmail

`func (o *CreatePracticeRequest) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *CreatePracticeRequest) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *CreatePracticeRequest) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.

### HasSupportEmail

`func (o *CreatePracticeRequest) HasSupportEmail() bool`

HasSupportEmail returns a boolean if a field has been set.

### SetSupportEmailNil

`func (o *CreatePracticeRequest) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *CreatePracticeRequest) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetSupportPhone

`func (o *CreatePracticeRequest) GetSupportPhone() string`

GetSupportPhone returns the SupportPhone field if non-nil, zero value otherwise.

### GetSupportPhoneOk

`func (o *CreatePracticeRequest) GetSupportPhoneOk() (*string, bool)`

GetSupportPhoneOk returns a tuple with the SupportPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportPhone

`func (o *CreatePracticeRequest) SetSupportPhone(v string)`

SetSupportPhone sets SupportPhone field to given value.

### HasSupportPhone

`func (o *CreatePracticeRequest) HasSupportPhone() bool`

HasSupportPhone returns a boolean if a field has been set.

### SetSupportPhoneNil

`func (o *CreatePracticeRequest) SetSupportPhoneNil(b bool)`

 SetSupportPhoneNil sets the value for SupportPhone to be an explicit nil

### UnsetSupportPhone
`func (o *CreatePracticeRequest) UnsetSupportPhone()`

UnsetSupportPhone ensures that no value is present for SupportPhone, not even an explicit nil
### GetTimezone

`func (o *CreatePracticeRequest) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *CreatePracticeRequest) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *CreatePracticeRequest) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *CreatePracticeRequest) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.

### SetTimezoneNil

`func (o *CreatePracticeRequest) SetTimezoneNil(b bool)`

 SetTimezoneNil sets the value for Timezone to be an explicit nil

### UnsetTimezone
`func (o *CreatePracticeRequest) UnsetTimezone()`

UnsetTimezone ensures that no value is present for Timezone, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


