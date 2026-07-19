// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type OrdersResource struct{ client *APIClient }
type OrderListParams struct {
	ExternalOrderID   string
	PatientExternalID string
}

func (r *OrdersResource) List(ctx context.Context, p ...OrderListParams) (*ListOrdersResponse, error) {
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
func (r *OrdersResource) Retrieve(ctx context.Context, id string) (*GetOrderResponse, error) {
	v, _, e := r.client.PlatformOrdersAPI.GetOrder(ctx, id).Execute()
	return v, e
}
func (r *OrdersResource) CreateTestDraft(ctx context.Context, p CreateOrderRequestAnyOf, o ...MutationOptions) (*CreateOrderResponse, error) {
	body := CreateOrderRequest{CreateOrderRequestAnyOf: &p}
	v, _, e := r.client.PlatformOrdersAPI.CreateOrder(ctx).IdempotencyKey(idempotencyKey(o...)).CreateOrderRequest(body).Execute()
	return v, e
}
func (r *OrdersResource) ReleasePrescription(ctx context.Context, p CreateOrderRequestAnyOf1, o ...MutationOptions) (*CreateOrderResponse, error) {
	body := CreateOrderRequest{CreateOrderRequestAnyOf1: &p}
	v, _, e := r.client.PlatformOrdersAPI.CreateOrder(ctx).IdempotencyKey(idempotencyKey(o...)).CreateOrderRequest(body).Execute()
	return v, e
}
func (r *OrdersResource) Update(ctx context.Context, id string, p UpdateOrderRequest, o ...MutationOptions) (*UpdateOrderResponse, error) {
	v, _, e := r.client.PlatformOrdersAPI.UpdateOrder(ctx, id).IdempotencyKey(idempotencyKey(o...)).UpdateOrderRequest(p).Execute()
	return v, e
}
func (r *OrdersResource) Submit(ctx context.Context, id string, o ...MutationOptions) (*SubmitOrderResponse, error) {
	v, _, e := r.client.PlatformOrdersAPI.SubmitOrder(ctx, id).IdempotencyKey(idempotencyKey(o...)).Execute()
	return v, e
}
func (r *OrdersResource) Cancel(ctx context.Context, id string, p CancelOrderRequest, o ...MutationOptions) (*CancelOrderResponse, error) {
	v, _, e := r.client.PlatformOrdersAPI.CancelOrder(ctx, id).IdempotencyKey(idempotencyKey(o...)).CancelOrderRequest(p).Execute()
	return v, e
}
func (r *OrdersResource) ListEvents(ctx context.Context, id string) (*ListOrderEventsResponse, error) {
	v, _, e := r.client.PlatformOrdersAPI.ListOrderEvents(ctx, id).Execute()
	return v, e
}
