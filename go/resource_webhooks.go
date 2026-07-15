// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import "context"

type WebhooksResource struct{ client *APIClient }

func (r *WebhooksResource) ListEndpoints(ctx context.Context) (*ListWebhookEndpoints200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.ListWebhookEndpoints(ctx).Execute()
	return v, e
}
func (r *WebhooksResource) CreateEndpoint(ctx context.Context, p CreateWebhookEndpointRequest, o MutationOptions) (*CreateWebhookEndpoint200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.CreateWebhookEndpoint(ctx).IdempotencyKey(o.IdempotencyKey).CreateWebhookEndpointRequest(p).Execute()
	return v, e
}
func (r *WebhooksResource) UpdateEndpoint(ctx context.Context, id string, p UpdateWebhookEndpointRequest, o MutationOptions) (*DeleteWebhookEndpoint200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.UpdateWebhookEndpoint(ctx, id).IdempotencyKey(o.IdempotencyKey).UpdateWebhookEndpointRequest(p).Execute()
	return v, e
}
func (r *WebhooksResource) DeleteEndpoint(ctx context.Context, id string, o MutationOptions) (*DeleteWebhookEndpoint200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.DeleteWebhookEndpoint(ctx, id).IdempotencyKey(o.IdempotencyKey).Execute()
	return v, e
}
func (r *WebhooksResource) RotateSecret(ctx context.Context, id string, o MutationOptions) (*CreateWebhookEndpoint200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.RotateWebhookEndpointSecret(ctx, id).IdempotencyKey(o.IdempotencyKey).Execute()
	return v, e
}
func (r *WebhooksResource) ListEvents(ctx context.Context) (*ListWebhookEvents200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.ListWebhookEvents(ctx).Execute()
	return v, e
}
func (r *WebhooksResource) RetrieveEvent(ctx context.Context, id string) (*GetWebhookEvent200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.GetWebhookEvent(ctx, id).Execute()
	return v, e
}
func (r *WebhooksResource) ReplayEvent(ctx context.Context, id string, o MutationOptions) (*ReplayWebhookEvent200Response, error) {
	v, _, e := r.client.PlatformWebhooksAPI.ReplayWebhookEvent(ctx, id).IdempotencyKey(o.IdempotencyKey).Execute()
	return v, e
}
