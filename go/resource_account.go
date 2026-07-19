// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type AccountResource struct{ client *APIClient }

func (r *AccountResource) RetrieveAccess(ctx context.Context) (*GetApiAccessResponse, error) {
	v, _, e := r.client.APIKeysAPI.GetApiAccess(ctx).Execute()
	return v, e
}
func (r *AccountResource) Retrieve(ctx context.Context, organizationID ...string) (*GetAccountResponse, error) {
	q := r.client.PlatformsAPI.GetAccount(ctx)
	if len(organizationID) > 0 {
		q = q.OrgId(organizationID[0])
	}
	v, _, e := q.Execute()
	return v, e
}
