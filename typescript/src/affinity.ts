// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

import { APIKeysApi } from "./apis/APIKeysApi";
import { CatalogApi } from "./apis/CatalogApi";
import { PlatformOrdersApi } from "./apis/PlatformOrdersApi";
import { PlatformWebhooksApi } from "./apis/PlatformWebhooksApi";
import { PlatformsApi } from "./apis/PlatformsApi";
import { PracticesApi } from "./apis/PracticesApi";
import { Configuration, type FetchAPI } from "./runtime";
import { AccountResource } from "./resources/account";
import { CatalogResource } from "./resources/catalog";
import { OrdersResource } from "./resources/orders";
import { PracticesResource } from "./resources/practices";
import { WebhooksResource } from "./resources/webhooks";

export interface AffinityOptions {
  apiVersion?: string;
  host?: string;
  fetch?: FetchAPI;
}

export class Affinity {
  readonly account: AccountResource;
  readonly catalog: CatalogResource;
  readonly orders: OrdersResource;
  readonly practices: PracticesResource;
  readonly webhooks: WebhooksResource;

  constructor(apiKey: string, options: AffinityOptions = {}) {
    if (!apiKey.trim()) throw new Error("Affinity requires a service API key");
    const host = options.host ?? "https://api.joinaffinityai.com";
    const configuration = new Configuration({
      accessToken: apiKey,
      basePath: (host.includes("://") ? host : `https://${host}`).replace(/\/+$/, ""),
      fetchApi: options.fetch,
      headers: { "Affinity-Version": options.apiVersion ?? "2026-07-09" },
    });
    this.account = new AccountResource(
      new APIKeysApi(configuration),
      new PlatformsApi(configuration),
    );
    this.catalog = new CatalogResource(new CatalogApi(configuration));
    this.orders = new OrdersResource(new PlatformOrdersApi(configuration));
    this.practices = new PracticesResource(new PracticesApi(configuration));
    this.webhooks = new WebhooksResource(new PlatformWebhooksApi(configuration));
  }
}
