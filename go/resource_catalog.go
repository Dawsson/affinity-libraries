// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type CatalogResource struct{ client *APIClient }
type CatalogListParams struct{ Query string }

func (r *CatalogResource) List(ctx context.Context, params ...CatalogListParams) (*ListCatalogItemsResponse, error) {
	q := r.client.CatalogAPI.ListCatalogItems(ctx)
	if len(params) > 0 && params[0].Query != "" {
		q = q.Query(params[0].Query)
	}
	v, _, e := q.Execute()
	return v, e
}
