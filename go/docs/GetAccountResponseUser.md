# GetAccountResponseUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** |  |
**EmailVerified** | Pointer to **bool** |  | [optional]
**Image** | **NullableString** |  |
**Name** | **string** |  |
**TwoFactorEnabled** | Pointer to **bool** |  | [optional]
**UserId** | **string** |  |

## Methods

### NewGetAccountResponseUser

`func NewGetAccountResponseUser(email string, image NullableString, name string, userId string, ) *GetAccountResponseUser`

NewGetAccountResponseUser instantiates a new GetAccountResponseUser object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccountResponseUserWithDefaults

`func NewGetAccountResponseUserWithDefaults() *GetAccountResponseUser`

NewGetAccountResponseUserWithDefaults instantiates a new GetAccountResponseUser object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *GetAccountResponseUser) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *GetAccountResponseUser) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *GetAccountResponseUser) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetEmailVerified

`func (o *GetAccountResponseUser) GetEmailVerified() bool`

GetEmailVerified returns the EmailVerified field if non-nil, zero value otherwise.

### GetEmailVerifiedOk

`func (o *GetAccountResponseUser) GetEmailVerifiedOk() (*bool, bool)`

GetEmailVerifiedOk returns a tuple with the EmailVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailVerified

`func (o *GetAccountResponseUser) SetEmailVerified(v bool)`

SetEmailVerified sets EmailVerified field to given value.

### HasEmailVerified

`func (o *GetAccountResponseUser) HasEmailVerified() bool`

HasEmailVerified returns a boolean if a field has been set.

### GetImage

`func (o *GetAccountResponseUser) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *GetAccountResponseUser) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *GetAccountResponseUser) SetImage(v string)`

SetImage sets Image field to given value.


### SetImageNil

`func (o *GetAccountResponseUser) SetImageNil(b bool)`

 SetImageNil sets the value for Image to be an explicit nil

### UnsetImage
`func (o *GetAccountResponseUser) UnsetImage()`

UnsetImage ensures that no value is present for Image, not even an explicit nil
### GetName

`func (o *GetAccountResponseUser) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetAccountResponseUser) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetAccountResponseUser) SetName(v string)`

SetName sets Name field to given value.


### GetTwoFactorEnabled

`func (o *GetAccountResponseUser) GetTwoFactorEnabled() bool`

GetTwoFactorEnabled returns the TwoFactorEnabled field if non-nil, zero value otherwise.

### GetTwoFactorEnabledOk

`func (o *GetAccountResponseUser) GetTwoFactorEnabledOk() (*bool, bool)`

GetTwoFactorEnabledOk returns a tuple with the TwoFactorEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoFactorEnabled

`func (o *GetAccountResponseUser) SetTwoFactorEnabled(v bool)`

SetTwoFactorEnabled sets TwoFactorEnabled field to given value.

### HasTwoFactorEnabled

`func (o *GetAccountResponseUser) HasTwoFactorEnabled() bool`

HasTwoFactorEnabled returns a boolean if a field has been set.

### GetUserId

`func (o *GetAccountResponseUser) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *GetAccountResponseUser) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *GetAccountResponseUser) SetUserId(v string)`

SetUserId sets UserId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


