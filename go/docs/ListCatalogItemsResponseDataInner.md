# ListCatalogItemsResponseDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowedStates** | **[]string** |  |
**CatalogKind** | **string** |  |
**ColdShip** | **bool** |  |
**CompounderId** | **string** |  |
**CompounderName** | **string** |  |
**Description** | **string** |  |
**DosageForm** | **string** |  |
**FacilityType** | **string** |  |
**Id** | **string** |  |
**IsOrderable** | **bool** |  |
**Livemode** | **bool** |  |
**Name** | **string** |  |
**Object** | **string** |  |
**PatientSpecificRequired** | **bool** |  |
**Pricing** | [**ListCatalogItemsResponseDataInnerPricing**](ListCatalogItemsResponseDataInnerPricing.md) |  |
**RestrictedStates** | **[]string** |  |
**Route** | **string** |  |
**Strength** | **NullableString** |  |

## Methods

### NewListCatalogItemsResponseDataInner

`func NewListCatalogItemsResponseDataInner(allowedStates []string, catalogKind string, coldShip bool, compounderId string, compounderName string, description string, dosageForm string, facilityType string, id string, isOrderable bool, livemode bool, name string, object string, patientSpecificRequired bool, pricing ListCatalogItemsResponseDataInnerPricing, restrictedStates []string, route string, strength NullableString, ) *ListCatalogItemsResponseDataInner`

NewListCatalogItemsResponseDataInner instantiates a new ListCatalogItemsResponseDataInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListCatalogItemsResponseDataInnerWithDefaults

`func NewListCatalogItemsResponseDataInnerWithDefaults() *ListCatalogItemsResponseDataInner`

NewListCatalogItemsResponseDataInnerWithDefaults instantiates a new ListCatalogItemsResponseDataInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowedStates

`func (o *ListCatalogItemsResponseDataInner) GetAllowedStates() []string`

GetAllowedStates returns the AllowedStates field if non-nil, zero value otherwise.

### GetAllowedStatesOk

`func (o *ListCatalogItemsResponseDataInner) GetAllowedStatesOk() (*[]string, bool)`

GetAllowedStatesOk returns a tuple with the AllowedStates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedStates

`func (o *ListCatalogItemsResponseDataInner) SetAllowedStates(v []string)`

SetAllowedStates sets AllowedStates field to given value.


### GetCatalogKind

`func (o *ListCatalogItemsResponseDataInner) GetCatalogKind() string`

GetCatalogKind returns the CatalogKind field if non-nil, zero value otherwise.

### GetCatalogKindOk

`func (o *ListCatalogItemsResponseDataInner) GetCatalogKindOk() (*string, bool)`

GetCatalogKindOk returns a tuple with the CatalogKind field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogKind

`func (o *ListCatalogItemsResponseDataInner) SetCatalogKind(v string)`

SetCatalogKind sets CatalogKind field to given value.


### GetColdShip

`func (o *ListCatalogItemsResponseDataInner) GetColdShip() bool`

GetColdShip returns the ColdShip field if non-nil, zero value otherwise.

### GetColdShipOk

`func (o *ListCatalogItemsResponseDataInner) GetColdShipOk() (*bool, bool)`

GetColdShipOk returns a tuple with the ColdShip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColdShip

`func (o *ListCatalogItemsResponseDataInner) SetColdShip(v bool)`

SetColdShip sets ColdShip field to given value.


### GetCompounderId

`func (o *ListCatalogItemsResponseDataInner) GetCompounderId() string`

GetCompounderId returns the CompounderId field if non-nil, zero value otherwise.

### GetCompounderIdOk

`func (o *ListCatalogItemsResponseDataInner) GetCompounderIdOk() (*string, bool)`

GetCompounderIdOk returns a tuple with the CompounderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompounderId

`func (o *ListCatalogItemsResponseDataInner) SetCompounderId(v string)`

SetCompounderId sets CompounderId field to given value.


### GetCompounderName

`func (o *ListCatalogItemsResponseDataInner) GetCompounderName() string`

GetCompounderName returns the CompounderName field if non-nil, zero value otherwise.

### GetCompounderNameOk

`func (o *ListCatalogItemsResponseDataInner) GetCompounderNameOk() (*string, bool)`

GetCompounderNameOk returns a tuple with the CompounderName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompounderName

`func (o *ListCatalogItemsResponseDataInner) SetCompounderName(v string)`

SetCompounderName sets CompounderName field to given value.


### GetDescription

`func (o *ListCatalogItemsResponseDataInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ListCatalogItemsResponseDataInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ListCatalogItemsResponseDataInner) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetDosageForm

`func (o *ListCatalogItemsResponseDataInner) GetDosageForm() string`

GetDosageForm returns the DosageForm field if non-nil, zero value otherwise.

### GetDosageFormOk

`func (o *ListCatalogItemsResponseDataInner) GetDosageFormOk() (*string, bool)`

GetDosageFormOk returns a tuple with the DosageForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDosageForm

`func (o *ListCatalogItemsResponseDataInner) SetDosageForm(v string)`

SetDosageForm sets DosageForm field to given value.


### GetFacilityType

`func (o *ListCatalogItemsResponseDataInner) GetFacilityType() string`

GetFacilityType returns the FacilityType field if non-nil, zero value otherwise.

### GetFacilityTypeOk

`func (o *ListCatalogItemsResponseDataInner) GetFacilityTypeOk() (*string, bool)`

GetFacilityTypeOk returns a tuple with the FacilityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityType

`func (o *ListCatalogItemsResponseDataInner) SetFacilityType(v string)`

SetFacilityType sets FacilityType field to given value.


### GetId

`func (o *ListCatalogItemsResponseDataInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListCatalogItemsResponseDataInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListCatalogItemsResponseDataInner) SetId(v string)`

SetId sets Id field to given value.


### GetIsOrderable

`func (o *ListCatalogItemsResponseDataInner) GetIsOrderable() bool`

GetIsOrderable returns the IsOrderable field if non-nil, zero value otherwise.

### GetIsOrderableOk

`func (o *ListCatalogItemsResponseDataInner) GetIsOrderableOk() (*bool, bool)`

GetIsOrderableOk returns a tuple with the IsOrderable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOrderable

`func (o *ListCatalogItemsResponseDataInner) SetIsOrderable(v bool)`

SetIsOrderable sets IsOrderable field to given value.


### GetLivemode

`func (o *ListCatalogItemsResponseDataInner) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *ListCatalogItemsResponseDataInner) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *ListCatalogItemsResponseDataInner) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetName

`func (o *ListCatalogItemsResponseDataInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ListCatalogItemsResponseDataInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ListCatalogItemsResponseDataInner) SetName(v string)`

SetName sets Name field to given value.


### GetObject

`func (o *ListCatalogItemsResponseDataInner) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ListCatalogItemsResponseDataInner) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ListCatalogItemsResponseDataInner) SetObject(v string)`

SetObject sets Object field to given value.


### GetPatientSpecificRequired

`func (o *ListCatalogItemsResponseDataInner) GetPatientSpecificRequired() bool`

GetPatientSpecificRequired returns the PatientSpecificRequired field if non-nil, zero value otherwise.

### GetPatientSpecificRequiredOk

`func (o *ListCatalogItemsResponseDataInner) GetPatientSpecificRequiredOk() (*bool, bool)`

GetPatientSpecificRequiredOk returns a tuple with the PatientSpecificRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPatientSpecificRequired

`func (o *ListCatalogItemsResponseDataInner) SetPatientSpecificRequired(v bool)`

SetPatientSpecificRequired sets PatientSpecificRequired field to given value.


### GetPricing

`func (o *ListCatalogItemsResponseDataInner) GetPricing() ListCatalogItemsResponseDataInnerPricing`

GetPricing returns the Pricing field if non-nil, zero value otherwise.

### GetPricingOk

`func (o *ListCatalogItemsResponseDataInner) GetPricingOk() (*ListCatalogItemsResponseDataInnerPricing, bool)`

GetPricingOk returns a tuple with the Pricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPricing

`func (o *ListCatalogItemsResponseDataInner) SetPricing(v ListCatalogItemsResponseDataInnerPricing)`

SetPricing sets Pricing field to given value.


### GetRestrictedStates

`func (o *ListCatalogItemsResponseDataInner) GetRestrictedStates() []string`

GetRestrictedStates returns the RestrictedStates field if non-nil, zero value otherwise.

### GetRestrictedStatesOk

`func (o *ListCatalogItemsResponseDataInner) GetRestrictedStatesOk() (*[]string, bool)`

GetRestrictedStatesOk returns a tuple with the RestrictedStates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictedStates

`func (o *ListCatalogItemsResponseDataInner) SetRestrictedStates(v []string)`

SetRestrictedStates sets RestrictedStates field to given value.


### GetRoute

`func (o *ListCatalogItemsResponseDataInner) GetRoute() string`

GetRoute returns the Route field if non-nil, zero value otherwise.

### GetRouteOk

`func (o *ListCatalogItemsResponseDataInner) GetRouteOk() (*string, bool)`

GetRouteOk returns a tuple with the Route field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoute

`func (o *ListCatalogItemsResponseDataInner) SetRoute(v string)`

SetRoute sets Route field to given value.


### GetStrength

`func (o *ListCatalogItemsResponseDataInner) GetStrength() string`

GetStrength returns the Strength field if non-nil, zero value otherwise.

### GetStrengthOk

`func (o *ListCatalogItemsResponseDataInner) GetStrengthOk() (*string, bool)`

GetStrengthOk returns a tuple with the Strength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrength

`func (o *ListCatalogItemsResponseDataInner) SetStrength(v string)`

SetStrength sets Strength field to given value.


### SetStrengthNil

`func (o *ListCatalogItemsResponseDataInner) SetStrengthNil(b bool)`

 SetStrengthNil sets the value for Strength to be an explicit nil

### UnsetStrength
`func (o *ListCatalogItemsResponseDataInner) UnsetStrength()`

UnsetStrength ensures that no value is present for Strength, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


