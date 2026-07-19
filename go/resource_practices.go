// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type PracticesResource struct{ client *APIClient }

func (r *PracticesResource) List(ctx context.Context) (*ListPracticesResponse, error) {
	v, _, e := r.client.PracticesAPI.ListPractices(ctx).Execute()
	return v, e
}
func (r *PracticesResource) Retrieve(ctx context.Context, id string) (*GetPracticeResponse, error) {
	v, _, e := r.client.PracticesAPI.GetPractice(ctx, id).Execute()
	return v, e
}
func (r *PracticesResource) Create(ctx context.Context, p CreatePracticeRequest, o ...MutationOptions) (*CreatePracticeResponse, error) {
	v, _, e := r.client.PracticesAPI.CreatePractice(ctx).IdempotencyKey(idempotencyKey(o...)).CreatePracticeRequest(p).Execute()
	return v, e
}
func (r *PracticesResource) Update(ctx context.Context, id string, p UpdatePracticeRequest, o ...MutationOptions) (*UpdatePracticeResponse, error) {
	v, _, e := r.client.PracticesAPI.UpdatePractice(ctx, id).IdempotencyKey(idempotencyKey(o...)).UpdatePracticeRequest(p).Execute()
	return v, e
}
