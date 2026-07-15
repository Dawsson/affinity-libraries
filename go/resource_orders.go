// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type OrdersResource struct{ client *APIClient }
type OrderListParams struct {
	ExternalOrderID   string
	PatientExternalID string
}

func (r *OrdersResource) List(ctx context.Context, p ...OrderListParams) (*ListOrders200Response, error) {
	q := r.client.PlatformOrdersAPI.ListOrders(ctx)
	if len(p) > 0 {
		if p[0].ExternalOrderID != "" {
			q = q.ExternalOrderId(p[0].ExternalOrderID)
		}
		if p[0].PatientExternalID != "" {
			q = q.PatientExternalId(p[0].PatientExternalID)
		}
	}
	v, _, e := q.Execute()
	return v, e
}
func (r *OrdersResource) Retrieve(ctx context.Context, id string) (*CreateOrder200Response, error) {
	v, _, e := r.client.PlatformOrdersAPI.GetOrder(ctx, id).Execute()
	return v, e
}
func (r *OrdersResource) Create(ctx context.Context, p CreateOrderRequest, o MutationOptions) (*CreateOrder200Response, error) {
	v, _, e := r.client.PlatformOrdersAPI.CreateOrder(ctx).IdempotencyKey(o.IdempotencyKey).CreateOrderRequest(p).Execute()
	return v, e
}
func (r *OrdersResource) Update(ctx context.Context, id string, p UpdateOrderRequest, o MutationOptions) (*CreateOrder200Response, error) {
	v, _, e := r.client.PlatformOrdersAPI.UpdateOrder(ctx, id).IdempotencyKey(o.IdempotencyKey).UpdateOrderRequest(p).Execute()
	return v, e
}
func (r *OrdersResource) Submit(ctx context.Context, id string, o MutationOptions) (*CreateOrder200Response, error) {
	v, _, e := r.client.PlatformOrdersAPI.SubmitOrder(ctx, id).IdempotencyKey(o.IdempotencyKey).Execute()
	return v, e
}
func (r *OrdersResource) Cancel(ctx context.Context, id string, p CancelOrderRequest, o MutationOptions) (*CreateOrder200Response, error) {
	v, _, e := r.client.PlatformOrdersAPI.CancelOrder(ctx, id).IdempotencyKey(o.IdempotencyKey).CancelOrderRequest(p).Execute()
	return v, e
}
func (r *OrdersResource) ListEvents(ctx context.Context, id string) (*ListOrderEvents200Response, error) {
	v, _, e := r.client.PlatformOrdersAPI.ListOrderEvents(ctx, id).Execute()
	return v, e
}
