<!-- affinity-facade:start -->
## Recommended client

Start with the resource-oriented client. The generated API classes documented below are the
low-level transport surface.

```ts
import { Affinity } from "@affinity/sdk";
const affinity = new Affinity(process.env.AFFINITY_API_KEY!);
const catalog = await affinity.catalog.list({ query: "semaglutide" });
```

Resources are available through account, catalog, practices, orders, and webhooks. Mutation calls
require an idempotency key.
<!-- affinity-facade:end -->

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
*PlatformsApi* | [**getAccount**](docs/PlatformsApi.md#getaccount) | **GET** /v1/account | Read account
*PracticesApi* | [**createPractice**](docs/PracticesApi.md#createpracticeoperation) | **POST** /v1/practices | Create practice
*PracticesApi* | [**getPractice**](docs/PracticesApi.md#getpractice) | **GET** /v1/practices/{practiceId} | Read practice
*PracticesApi* | [**listPractices**](docs/PracticesApi.md#listpractices) | **GET** /v1/practices | List practices
*PracticesApi* | [**updatePractice**](docs/PracticesApi.md#updatepracticeoperation) | **PATCH** /v1/practices/{practiceId} | Update practice


### Models

- [CancelOrderRequest](docs/CancelOrderRequest.md)
- [CancelOrderResponse](docs/CancelOrderResponse.md)
- [CreateOrderRequest](docs/CreateOrderRequest.md)
- [CreateOrderRequestAnyOf](docs/CreateOrderRequestAnyOf.md)
- [CreateOrderRequestAnyOf1](docs/CreateOrderRequestAnyOf1.md)
- [CreateOrderRequestAnyOfPatient](docs/CreateOrderRequestAnyOfPatient.md)
- [CreateOrderRequestAnyOfPatientAddress](docs/CreateOrderRequestAnyOfPatientAddress.md)
- [CreateOrderRequestAnyOfPrescriber](docs/CreateOrderRequestAnyOfPrescriber.md)
- [CreateOrderRequestAnyOfPrescription](docs/CreateOrderRequestAnyOfPrescription.md)
- [CreateOrderResponse](docs/CreateOrderResponse.md)
- [CreatePracticeRequest](docs/CreatePracticeRequest.md)
- [CreatePracticeRequestAttestations](docs/CreatePracticeRequestAttestations.md)
- [CreatePracticeRequestComplianceContact](docs/CreatePracticeRequestComplianceContact.md)
- [CreatePracticeRequestPrescribersInner](docs/CreatePracticeRequestPrescribersInner.md)
- [CreatePracticeResponse](docs/CreatePracticeResponse.md)
- [CreateWebhookEndpointRequest](docs/CreateWebhookEndpointRequest.md)
- [CreateWebhookEndpointResponse](docs/CreateWebhookEndpointResponse.md)
- [DeleteWebhookEndpointResponse](docs/DeleteWebhookEndpointResponse.md)
- [GetAccountResponse](docs/GetAccountResponse.md)
- [GetAccountResponseAccount](docs/GetAccountResponseAccount.md)
- [GetAccountResponseMembership](docs/GetAccountResponseMembership.md)
- [GetAccountResponseUser](docs/GetAccountResponseUser.md)
- [GetApiAccessResponse](docs/GetApiAccessResponse.md)
- [GetApiAccessResponseApiKey](docs/GetApiAccessResponseApiKey.md)
- [GetApiAccessResponseServiceAccount](docs/GetApiAccessResponseServiceAccount.md)
- [GetOrderResponse](docs/GetOrderResponse.md)
- [GetPracticeResponse](docs/GetPracticeResponse.md)
- [GetWebhookEventResponse](docs/GetWebhookEventResponse.md)
- [ListCatalogItemsResponse](docs/ListCatalogItemsResponse.md)
- [ListCatalogItemsResponseDataInner](docs/ListCatalogItemsResponseDataInner.md)
- [ListOrderEventsResponse](docs/ListOrderEventsResponse.md)
- [ListOrderEventsResponseDataInner](docs/ListOrderEventsResponseDataInner.md)
- [ListOrdersResponse](docs/ListOrdersResponse.md)
- [ListOrdersResponseDataInner](docs/ListOrdersResponseDataInner.md)
- [ListOrdersResponseDataInnerRouting](docs/ListOrdersResponseDataInnerRouting.md)
- [ListPracticesResponse](docs/ListPracticesResponse.md)
- [ListPracticesResponseDataInner](docs/ListPracticesResponseDataInner.md)
- [ListPracticesResponseDataInnerAddress](docs/ListPracticesResponseDataInnerAddress.md)
- [ListPracticesResponseDataInnerContacts](docs/ListPracticesResponseDataInnerContacts.md)
- [ListPracticesResponseDataInnerContactsCompliance](docs/ListPracticesResponseDataInnerContactsCompliance.md)
- [ListPracticesResponseDataInnerPrescribersInner](docs/ListPracticesResponseDataInnerPrescribersInner.md)
- [ListWebhookEndpointsResponse](docs/ListWebhookEndpointsResponse.md)
- [ListWebhookEndpointsResponseDataInner](docs/ListWebhookEndpointsResponseDataInner.md)
- [ListWebhookEventsResponse](docs/ListWebhookEventsResponse.md)
- [ListWebhookEventsResponseDataInner](docs/ListWebhookEventsResponseDataInner.md)
- [Problem](docs/Problem.md)
- [ProblemError](docs/ProblemError.md)
- [ReplayWebhookEventResponse](docs/ReplayWebhookEventResponse.md)
- [RotateWebhookEndpointSecretResponse](docs/RotateWebhookEndpointSecretResponse.md)
- [SubmitOrderResponse](docs/SubmitOrderResponse.md)
- [UpdateOrderRequest](docs/UpdateOrderRequest.md)
- [UpdateOrderResponse](docs/UpdateOrderResponse.md)
- [UpdatePracticeRequest](docs/UpdatePracticeRequest.md)
- [UpdatePracticeResponse](docs/UpdatePracticeResponse.md)
- [UpdateWebhookEndpointRequest](docs/UpdateWebhookEndpointRequest.md)
- [UpdateWebhookEndpointResponse](docs/UpdateWebhookEndpointResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="affinityApiKey"></a>
#### affinityApiKey


- **Type**: API key
- **API key parameter name**: `x-affinity-api-key`
- **Location**: HTTP header
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2026-07-19`
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

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)
