# CreatePracticeRequestPrescribersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Credentials** | Pointer to **NullableString** |  | [optional]
**LicenseStates** | **[]string** |  |
**Name** | **string** |  |
**Npi** | **string** |  |

## Methods

### NewCreatePracticeRequestPrescribersInner

`func NewCreatePracticeRequestPrescribersInner(licenseStates []string, name string, npi string, ) *CreatePracticeRequestPrescribersInner`

NewCreatePracticeRequestPrescribersInner instantiates a new CreatePracticeRequestPrescribersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePracticeRequestPrescribersInnerWithDefaults

`func NewCreatePracticeRequestPrescribersInnerWithDefaults() *CreatePracticeRequestPrescribersInner`

NewCreatePracticeRequestPrescribersInnerWithDefaults instantiates a new CreatePracticeRequestPrescribersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCredentials

`func (o *CreatePracticeRequestPrescribersInner) GetCredentials() string`

GetCredentials returns the Credentials field if non-nil, zero value otherwise.

### GetCredentialsOk

`func (o *CreatePracticeRequestPrescribersInner) GetCredentialsOk() (*string, bool)`

GetCredentialsOk returns a tuple with the Credentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentials

`func (o *CreatePracticeRequestPrescribersInner) SetCredentials(v string)`

SetCredentials sets Credentials field to given value.

### HasCredentials

`func (o *CreatePracticeRequestPrescribersInner) HasCredentials() bool`

HasCredentials returns a boolean if a field has been set.

### SetCredentialsNil

`func (o *CreatePracticeRequestPrescribersInner) SetCredentialsNil(b bool)`

 SetCredentialsNil sets the value for Credentials to be an explicit nil

### UnsetCredentials
`func (o *CreatePracticeRequestPrescribersInner) UnsetCredentials()`

UnsetCredentials ensures that no value is present for Credentials, not even an explicit nil
### GetLicenseStates

`func (o *CreatePracticeRequestPrescribersInner) GetLicenseStates() []string`

GetLicenseStates returns the LicenseStates field if non-nil, zero value otherwise.

### GetLicenseStatesOk

`func (o *CreatePracticeRequestPrescribersInner) GetLicenseStatesOk() (*[]string, bool)`

GetLicenseStatesOk returns a tuple with the LicenseStates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseStates

`func (o *CreatePracticeRequestPrescribersInner) SetLicenseStates(v []string)`

SetLicenseStates sets LicenseStates field to given value.


### GetName

`func (o *CreatePracticeRequestPrescribersInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreatePracticeRequestPrescribersInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreatePracticeRequestPrescribersInner) SetName(v string)`

SetName sets Name field to given value.


### GetNpi

`func (o *CreatePracticeRequestPrescribersInner) GetNpi() string`

GetNpi returns the Npi field if non-nil, zero value otherwise.

### GetNpiOk

`func (o *CreatePracticeRequestPrescribersInner) GetNpiOk() (*string, bool)`

GetNpiOk returns a tuple with the Npi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNpi

`func (o *CreatePracticeRequestPrescribersInner) SetNpi(v string)`

SetNpi sets Npi field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


