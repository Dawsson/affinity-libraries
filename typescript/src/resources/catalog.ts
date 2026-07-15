// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

import type { CatalogApi } from "../apis/CatalogApi";
export interface CatalogListParams {
  query?: string;
}
export class CatalogResource {
  constructor(private readonly api: CatalogApi) {}
  list(params: CatalogListParams = {}) {
    return this.api.listCatalogItems(params);
  }
}
