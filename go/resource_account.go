// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type AccountResource struct{ client *APIClient }

func (r *AccountResource) RetrieveAccess(ctx context.Context) (*GetApiAccess200Response, error) {
	v, _, e := r.client.APIKeysAPI.GetApiAccess(ctx).Execute()
	return v, e
}
func (r *AccountResource) Retrieve(ctx context.Context, organizationID ...string) (*GetPlatformOrganization200Response, error) {
	q := r.client.PlatformsAPI.GetPlatformOrganization(ctx)
	if len(organizationID) > 0 {
		q = q.OrgId(organizationID[0])
	}
	v, _, e := q.Execute()
	return v, e
}
