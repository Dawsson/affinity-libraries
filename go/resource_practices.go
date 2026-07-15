// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type PracticesResource struct{ client *APIClient }

func (r *PracticesResource) List(ctx context.Context) (*ListPractices200Response, error) {
	v, _, e := r.client.PracticesAPI.ListPractices(ctx).Execute()
	return v, e
}
func (r *PracticesResource) Retrieve(ctx context.Context, id string) (*CreatePractice200Response, error) {
	v, _, e := r.client.PracticesAPI.GetPractice(ctx, id).Execute()
	return v, e
}
func (r *PracticesResource) Create(ctx context.Context, p CreatePracticeRequest, o MutationOptions) (*CreatePractice200Response, error) {
	v, _, e := r.client.PracticesAPI.CreatePractice(ctx).IdempotencyKey(o.IdempotencyKey).CreatePracticeRequest(p).Execute()
	return v, e
}
func (r *PracticesResource) Update(ctx context.Context, id string, o MutationOptions) (*CreatePractice200Response, error) {
	v, _, e := r.client.PracticesAPI.UpdatePractice(ctx, id).IdempotencyKey(o.IdempotencyKey).Execute()
	return v, e
}
