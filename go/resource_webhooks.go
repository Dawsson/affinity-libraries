// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"errors"
	"strconv"
	"strings"
	"time"
)

type WebhooksResource struct{ client *APIClient }

func (r *WebhooksResource) ListEndpoints(ctx context.Context) (*ListWebhookEndpointsResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.ListWebhookEndpoints(ctx).Execute()
	return v, e
}
func (r *WebhooksResource) CreateEndpoint(ctx context.Context, p CreateWebhookEndpointRequest, o ...MutationOptions) (*CreateWebhookEndpointResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.CreateWebhookEndpoint(ctx).IdempotencyKey(idempotencyKey(o...)).CreateWebhookEndpointRequest(p).Execute()
	return v, e
}
func (r *WebhooksResource) UpdateEndpoint(ctx context.Context, id string, p UpdateWebhookEndpointRequest, o ...MutationOptions) (*UpdateWebhookEndpointResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.UpdateWebhookEndpoint(ctx, id).IdempotencyKey(idempotencyKey(o...)).UpdateWebhookEndpointRequest(p).Execute()
	return v, e
}
func (r *WebhooksResource) DeleteEndpoint(ctx context.Context, id string, o ...MutationOptions) (*DeleteWebhookEndpointResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.DeleteWebhookEndpoint(ctx, id).IdempotencyKey(idempotencyKey(o...)).Execute()
	return v, e
}
func (r *WebhooksResource) RotateSecret(ctx context.Context, id string, o ...MutationOptions) (*RotateWebhookEndpointSecretResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.RotateWebhookEndpointSecret(ctx, id).IdempotencyKey(idempotencyKey(o...)).Execute()
	return v, e
}
func (r *WebhooksResource) ListEvents(ctx context.Context) (*ListWebhookEventsResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.ListWebhookEvents(ctx).Execute()
	return v, e
}
func (r *WebhooksResource) RetrieveEvent(ctx context.Context, id string) (*GetWebhookEventResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.GetWebhookEvent(ctx, id).Execute()
	return v, e
}
func (r *WebhooksResource) ReplayEvent(ctx context.Context, id string, o ...MutationOptions) (*ReplayWebhookEventResponse, error) {
	v, _, e := r.client.PlatformWebhooksAPI.ReplayWebhookEvent(ctx, id).IdempotencyKey(idempotencyKey(o...)).Execute()
	return v, e
}
func (r *WebhooksResource) ConstructEvent(payload []byte, signature, secret string, tolerance time.Duration) (map[string]any, error) {
	parts := map[string]string{}
	for _, part := range strings.Split(signature, ",") {
		pair := strings.SplitN(part, "=", 2)
		if len(pair) == 2 {
			parts[pair[0]] = pair[1]
		}
	}
	timestamp, err := strconv.ParseInt(parts["t"], 10, 64)
	if err != nil {
		return nil, errors.New("invalid Affinity-Signature header")
	}
	if tolerance == 0 {
		tolerance = 5 * time.Minute
	}
	age := time.Since(time.Unix(timestamp, 0))
	if age < -tolerance || age > tolerance {
		return nil, errors.New("webhook signature timestamp is outside the tolerance window")
	}
	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(strconv.FormatInt(timestamp, 10) + "."))
	mac.Write(payload)
	supplied, err := hex.DecodeString(parts["v1"])
	if err != nil || !hmac.Equal(mac.Sum(nil), supplied) {
		return nil, errors.New("webhook signature verification failed")
	}
	event := map[string]any{}
	if err := json.Unmarshal(payload, &event); err != nil {
		return nil, err
	}
	return event, nil
}
