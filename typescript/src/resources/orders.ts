// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

import type { ListOrdersStatusEnum, PlatformOrdersApi } from "../apis/PlatformOrdersApi";
import type { CancelOrderRequest } from "../models/CancelOrderRequest";
import type { CreateOrderRequest } from "../models/CreateOrderRequest";
import type { UpdateOrderRequest } from "../models/UpdateOrderRequest";
import type { CreateOrderRequestAnyOf } from "../models/CreateOrderRequestAnyOf";
import type { CreateOrderRequestAnyOf1 } from "../models/CreateOrderRequestAnyOf1";
import { idempotencyKey, type MutationOptions } from "./request-options";
export interface OrderListParams {
  externalOrderId?: string;
  patientExternalId?: string;
  practiceId?: string;
  status?: ListOrdersStatusEnum;
  limit?: number;
  startingAfter?: string;
  endingBefore?: string;
}
export class OrdersResource {
  constructor(private readonly api: PlatformOrdersApi) {}
  list(params: OrderListParams = {}) {
    return this.api.listOrders(params);
  }
  retrieve(orderId: string) {
    return this.api.getOrder({ orderId });
  }
  createTestDraft(params: CreateOrderRequestAnyOf, options: MutationOptions = {}) {
    return this.api.createOrder({
      createOrderRequest: params as CreateOrderRequest,
      idempotencyKey: idempotencyKey(options),
    });
  }
  releasePrescription(params: CreateOrderRequestAnyOf1, options: MutationOptions = {}) {
    return this.api.createOrder({
      createOrderRequest: params as CreateOrderRequest,
      idempotencyKey: idempotencyKey(options),
    });
  }
  update(orderId: string, params: UpdateOrderRequest, options: MutationOptions = {}) {
    return this.api.updateOrder({
      orderId,
      updateOrderRequest: params,
      idempotencyKey: idempotencyKey(options),
    });
  }
  submit(orderId: string, options: MutationOptions = {}) {
    return this.api.submitOrder({ orderId, idempotencyKey: idempotencyKey(options) });
  }
  cancel(orderId: string, params: CancelOrderRequest, options: MutationOptions = {}) {
    return this.api.cancelOrder({
      orderId,
      cancelOrderRequest: params,
      idempotencyKey: idempotencyKey(options),
    });
  }
  listEvents(orderId: string) {
    return this.api.listOrderEvents({ orderId });
  }
}
