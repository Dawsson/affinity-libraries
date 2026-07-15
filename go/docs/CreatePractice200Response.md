# CreatePractice200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | [**NullableCreatePractice200ResponseAddress**](CreatePractice200ResponseAddress.md) |  | 
**Contacts** | [**CreatePractice200ResponseContacts**](CreatePractice200ResponseContacts.md) |  | 
**Created** | **NullableFloat32** |  | 
**ExternalId** | **NullableString** |  | 
**Id** | **NullableString** |  | 
**LegalName** | **NullableString** |  | 
**Name** | **NullableString** |  | 
**Object** | **string** |  | 
**Prescribers** | [**[]CreatePracticeRequestPrescribersInner**](CreatePracticeRequestPrescribersInner.md) |  | 
**SupportEmail** | **NullableString** |  | 
**SupportPhone** | **NullableString** |  | 
**Timezone** | **NullableString** |  | 

## Methods

### NewCreatePractice200Response

`func NewCreatePractice200Response(address NullableCreatePractice200ResponseAddress, contacts CreatePractice200ResponseContacts, created NullableFloat32, externalId NullableString, id NullableString, legalName NullableString, name NullableString, object string, prescribers []CreatePracticeRequestPrescribersInner, supportEmail NullableString, supportPhone NullableString, timezone NullableString, ) *CreatePractice200Response`

NewCreatePractice200Response instantiates a new CreatePractice200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePractice200ResponseWithDefaults

`func NewCreatePractice200ResponseWithDefaults() *CreatePractice200Response`

NewCreatePractice200ResponseWithDefaults instantiates a new CreatePractice200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *CreatePractice200Response) GetAddress() CreatePractice200ResponseAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CreatePractice200Response) GetAddressOk() (*CreatePractice200ResponseAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CreatePractice200Response) SetAddress(v CreatePractice200ResponseAddress)`

SetAddress sets Address field to given value.


### SetAddressNil

`func (o *CreatePractice200Response) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *CreatePractice200Response) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetContacts

`func (o *CreatePractice200Response) GetContacts() CreatePractice200ResponseContacts`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *CreatePractice200Response) GetContactsOk() (*CreatePractice200ResponseContacts, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *CreatePractice200Response) SetContacts(v CreatePractice200ResponseContacts)`

SetContacts sets Contacts field to given value.


### GetCreated

`func (o *CreatePractice200Response) GetCreated() float32`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CreatePractice200Response) GetCreatedOk() (*float32, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CreatePractice200Response) SetCreated(v float32)`

SetCreated sets Created field to given value.


### SetCreatedNil

`func (o *CreatePractice200Response) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *CreatePractice200Response) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetExternalId

`func (o *CreatePractice200Response) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *CreatePractice200Response) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *CreatePractice200Response) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.


### SetExternalIdNil

`func (o *CreatePractice200Response) SetExternalIdNil(b bool)`

 SetExternalIdNil sets the value for ExternalId to be an explicit nil

### UnsetExternalId
`func (o *CreatePractice200Response) UnsetExternalId()`

UnsetExternalId ensures that no value is present for ExternalId, not even an explicit nil
### GetId

`func (o *CreatePractice200Response) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreatePractice200Response) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreatePractice200Response) SetId(v string)`

SetId sets Id field to given value.


### SetIdNil

`func (o *CreatePractice200Response) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *CreatePractice200Response) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetLegalName

`func (o *CreatePractice200Response) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *CreatePractice200Response) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *CreatePractice200Response) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.


### SetLegalNameNil

`func (o *CreatePractice200Response) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *CreatePractice200Response) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetName

`func (o *CreatePractice200Response) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreatePractice200Response) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreatePractice200Response) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *CreatePractice200Response) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CreatePractice200Response) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetObject

`func (o *CreatePractice200Response) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *CreatePractice200Response) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *CreatePractice200Response) SetObject(v string)`

SetObject sets Object field to given value.


### GetPrescribers

`func (o *CreatePractice200Response) GetPrescribers() []CreatePracticeRequestPrescribersInner`

GetPrescribers returns the Prescribers field if non-nil, zero value otherwise.

### GetPrescribersOk

`func (o *CreatePractice200Response) GetPrescribersOk() (*[]CreatePracticeRequestPrescribersInner, bool)`

GetPrescribersOk returns a tuple with the Prescribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribers

`func (o *CreatePractice200Response) SetPrescribers(v []CreatePracticeRequestPrescribersInner)`

SetPrescribers sets Prescribers field to given value.


### GetSupportEmail

`func (o *CreatePractice200Response) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *CreatePractice200Response) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *CreatePractice200Response) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.


### SetSupportEmailNil

`func (o *CreatePractice200Response) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *CreatePractice200Response) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetSupportPhone

`func (o *CreatePractice200Response) GetSupportPhone() string`

GetSupportPhone returns the SupportPhone field if non-nil, zero value otherwise.

### GetSupportPhoneOk

`func (o *CreatePractice200Response) GetSupportPhoneOk() (*string, bool)`

GetSupportPhoneOk returns a tuple with the SupportPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportPhone

`func (o *CreatePractice200Response) SetSupportPhone(v string)`

SetSupportPhone sets SupportPhone field to given value.


### SetSupportPhoneNil

`func (o *CreatePractice200Response) SetSupportPhoneNil(b bool)`

 SetSupportPhoneNil sets the value for SupportPhone to be an explicit nil

### UnsetSupportPhone
`func (o *CreatePractice200Response) UnsetSupportPhone()`

UnsetSupportPhone ensures that no value is present for SupportPhone, not even an explicit nil
### GetTimezone

`func (o *CreatePractice200Response) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *CreatePractice200Response) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *CreatePractice200Response) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.


### SetTimezoneNil

`func (o *CreatePractice200Response) SetTimezoneNil(b bool)`

 SetTimezoneNil sets the value for Timezone to be an explicit nil

### UnsetTimezone
`func (o *CreatePractice200Response) UnsetTimezone()`

UnsetTimezone ensures that no value is present for Timezone, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


