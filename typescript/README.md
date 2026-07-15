# @affinity/sdk@0.1.0

A TypeScript SDK client for the api.joinaffinityai.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @affinity/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  APIKeysApi,
} from '@affinity/sdk';
import type { GetApiAccessRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new APIKeysApi(config);

  try {
    const data = await api.getApiAccess();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.joinaffinityai.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*APIKeysApi* | [**getApiAccess**](docs/APIKeysApi.md#getapiaccess) | **GET** /v1/auth/access | Read API key access
*CatalogApi* | [**listCatalogItems**](docs/CatalogApi.md#listcatalogitems) | **GET** /v1/catalog/items | List catalog items
*PlatformOrdersApi* | [**cancelOrder**](docs/PlatformOrdersApi.md#cancelorderoperation) | **POST** /v1/orders/{orderId}/cancel | Cancel order
*PlatformOrdersApi* | [**createOrder**](docs/PlatformOrdersApi.md#createorderoperation) | **POST** /v1/orders | Create order
*PlatformOrdersApi* | [**getOrder**](docs/PlatformOrdersApi.md#getorder) | **GET** /v1/orders/{orderId} | Read order
*PlatformOrdersApi* | [**listOrderEvents**](docs/PlatformOrdersApi.md#listorderevents) | **GET** /v1/orders/{orderId}/events | List order events
*PlatformOrdersApi* | [**listOrders**](docs/PlatformOrdersApi.md#listorders) | **GET** /v1/orders | List platform orders
*PlatformOrdersApi* | [**submitOrder**](docs/PlatformOrdersApi.md#submitorder) | **POST** /v1/orders/{orderId}/submit | Submit order
*PlatformOrdersApi* | [**updateOrder**](docs/PlatformOrdersApi.md#updateorderoperation) | **PATCH** /v1/orders/{orderId} | Update draft order
*PlatformWebhooksApi* | [**createWebhookEndpoint**](docs/PlatformWebhooksApi.md#createwebhookendpointoperation) | **POST** /v1/webhook-endpoints | Create webhook endpoint
*PlatformWebhooksApi* | [**deleteWebhookEndpoint**](docs/PlatformWebhooksApi.md#deletewebhookendpoint) | **DELETE** /v1/webhook-endpoints/{endpointId} | Disable webhook endpoint
*PlatformWebhooksApi* | [**getWebhookEvent**](docs/PlatformWebhooksApi.md#getwebhookevent) | **GET** /v1/webhook-events/{eventId} | Read webhook event attempts
*PlatformWebhooksApi* | [**listWebhookEndpoints**](docs/PlatformWebhooksApi.md#listwebhookendpoints) | **GET** /v1/webhook-endpoints | List webhook endpoints
*PlatformWebhooksApi* | [**listWebhookEvents**](docs/PlatformWebhooksApi.md#listwebhookevents) | **GET** /v1/webhook-events | List webhook events
*PlatformWebhooksApi* | [**replayWebhookEvent**](docs/PlatformWebhooksApi.md#replaywebhookevent) | **POST** /v1/webhook-events/{eventId}/replay | Replay webhook event
*PlatformWebhooksApi* | [**rotateWebhookEndpointSecret**](docs/PlatformWebhooksApi.md#rotatewebhookendpointsecret) | **POST** /v1/webhook-endpoints/{endpointId}/rotate-secret | Rotate webhook signing secret
*PlatformWebhooksApi* | [**updateWebhookEndpoint**](docs/PlatformWebhooksApi.md#updatewebhookendpointoperation) | **PATCH** /v1/webhook-endpoints/{endpointId} | Update webhook endpoint
*PlatformsApi* | [**getPlatformOrganization**](docs/PlatformsApi.md#getplatformorganization) | **GET** /v1/platform/organization | Read platform organization
*PracticesApi* | [**createPractice**](docs/PracticesApi.md#createpracticeoperation) | **POST** /v1/practices | Create practice
*PracticesApi* | [**getPractice**](docs/PracticesApi.md#getpractice) | **GET** /v1/practices/{practiceId} | Read practice
*PracticesApi* | [**listPractices**](docs/PracticesApi.md#listpractices) | **GET** /v1/practices | List practices
*PracticesApi* | [**updatePractice**](docs/PracticesApi.md#updatepractice) | **PATCH** /v1/practices/{practiceId} | Update practice


### Models

- [CancelOrderRequest](docs/CancelOrderRequest.md)
- [CreateOrder200Response](docs/CreateOrder200Response.md)
- [CreateOrder200ResponseOrder](docs/CreateOrder200ResponseOrder.md)
- [CreateOrder200ResponseOrderRouting](docs/CreateOrder200ResponseOrderRouting.md)
- [CreateOrderRequest](docs/CreateOrderRequest.md)
- [CreateOrderRequestAnyOf](docs/CreateOrderRequestAnyOf.md)
- [CreateOrderRequestAnyOf1](docs/CreateOrderRequestAnyOf1.md)
- [CreateOrderRequestAnyOf1ShippingAddress](docs/CreateOrderRequestAnyOf1ShippingAddress.md)
- [CreateOrderRequestAnyOfPatient](docs/CreateOrderRequestAnyOfPatient.md)
- [CreateOrderRequestAnyOfPatientAddress](docs/CreateOrderRequestAnyOfPatientAddress.md)
- [CreateOrderRequestAnyOfPrescriber](docs/CreateOrderRequestAnyOfPrescriber.md)
- [CreateOrderRequestAnyOfPrescription](docs/CreateOrderRequestAnyOfPrescription.md)
- [CreatePractice200Response](docs/CreatePractice200Response.md)
- [CreatePractice200ResponseAddress](docs/CreatePractice200ResponseAddress.md)
- [CreatePractice200ResponseContacts](docs/CreatePractice200ResponseContacts.md)
- [CreatePracticeRequest](docs/CreatePracticeRequest.md)
- [CreatePracticeRequestAddress](docs/CreatePracticeRequestAddress.md)
- [CreatePracticeRequestAttestations](docs/CreatePracticeRequestAttestations.md)
- [CreatePracticeRequestPrescribersInner](docs/CreatePracticeRequestPrescribersInner.md)
- [CreateWebhookEndpoint200Response](docs/CreateWebhookEndpoint200Response.md)
- [CreateWebhookEndpoint200ResponseEndpoint](docs/CreateWebhookEndpoint200ResponseEndpoint.md)
- [CreateWebhookEndpointRequest](docs/CreateWebhookEndpointRequest.md)
- [DeleteWebhookEndpoint200Response](docs/DeleteWebhookEndpoint200Response.md)
- [GetApiAccess200Response](docs/GetApiAccess200Response.md)
- [GetApiAccess200ResponseApiKey](docs/GetApiAccess200ResponseApiKey.md)
- [GetApiAccess200ResponseServiceAccount](docs/GetApiAccess200ResponseServiceAccount.md)
- [GetPlatformOrganization200Response](docs/GetPlatformOrganization200Response.md)
- [GetPlatformOrganization200ResponseAccount](docs/GetPlatformOrganization200ResponseAccount.md)
- [GetPlatformOrganization200ResponseMembership](docs/GetPlatformOrganization200ResponseMembership.md)
- [GetPlatformOrganization200ResponseUser](docs/GetPlatformOrganization200ResponseUser.md)
- [GetWebhookEvent200Response](docs/GetWebhookEvent200Response.md)
- [GetWebhookEvent200ResponseAttemptsInner](docs/GetWebhookEvent200ResponseAttemptsInner.md)
- [GetWebhookEvent200ResponseDeliveriesInner](docs/GetWebhookEvent200ResponseDeliveriesInner.md)
- [GetWebhookEvent200ResponseEvent](docs/GetWebhookEvent200ResponseEvent.md)
- [ListCatalogItems200Response](docs/ListCatalogItems200Response.md)
- [ListCatalogItems200ResponseItemsInner](docs/ListCatalogItems200ResponseItemsInner.md)
- [ListOrderEvents200Response](docs/ListOrderEvents200Response.md)
- [ListOrderEvents200ResponseEventsInner](docs/ListOrderEvents200ResponseEventsInner.md)
- [ListOrders200Response](docs/ListOrders200Response.md)
- [ListOrders200ResponseOrdersInner](docs/ListOrders200ResponseOrdersInner.md)
- [ListOrders200ResponseOrdersInnerRouting](docs/ListOrders200ResponseOrdersInnerRouting.md)
- [ListPractices200Response](docs/ListPractices200Response.md)
- [ListPractices200ResponseDataInner](docs/ListPractices200ResponseDataInner.md)
- [ListPractices200ResponseDataInnerAddress](docs/ListPractices200ResponseDataInnerAddress.md)
- [ListPractices200ResponseDataInnerContacts](docs/ListPractices200ResponseDataInnerContacts.md)
- [ListPractices200ResponseDataInnerContactsCompliance](docs/ListPractices200ResponseDataInnerContactsCompliance.md)
- [ListPractices200ResponseDataInnerContactsPrimary](docs/ListPractices200ResponseDataInnerContactsPrimary.md)
- [ListPractices200ResponseDataInnerPrescribersInner](docs/ListPractices200ResponseDataInnerPrescribersInner.md)
- [ListWebhookEndpoints200Response](docs/ListWebhookEndpoints200Response.md)
- [ListWebhookEndpoints200ResponseEndpointsInner](docs/ListWebhookEndpoints200ResponseEndpointsInner.md)
- [ListWebhookEvents200Response](docs/ListWebhookEvents200Response.md)
- [ListWebhookEvents200ResponseEventsInner](docs/ListWebhookEvents200ResponseEventsInner.md)
- [ModelError](docs/ModelError.md)
- [ReplayWebhookEvent200Response](docs/ReplayWebhookEvent200Response.md)
- [ReplayWebhookEvent200ResponseAttemptsInner](docs/ReplayWebhookEvent200ResponseAttemptsInner.md)
- [ReplayWebhookEvent200ResponseDeliveriesInner](docs/ReplayWebhookEvent200ResponseDeliveriesInner.md)
- [UpdateOrderRequest](docs/UpdateOrderRequest.md)
- [UpdateWebhookEndpointRequest](docs/UpdateWebhookEndpointRequest.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication
<a id="affinityApiKey"></a>
#### affinityApiKey


- **Type**: API key
- **API key parameter name**: `x-affinity-api-key`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2026-07-09`
- Package version: `0.1.0`
- Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
