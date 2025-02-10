import { Mapper } from "../base/mapper";
import { OrderInterface } from "./order.interface";
import { OrderModel } from "./order.model";

export class OrderMapper extends Mapper<OrderInterface, OrderModel> {
  mapFrom(param: OrderInterface): OrderModel {
    return {
      created: param.created,
      discounts: param.discounts,
      items: param.items,
      paid: param.paid,
      rounds: param.rounds,
      subtotal: param.subtotal,
      taxes: param.taxes,
    };
  }

  mapTo(param: OrderModel): OrderInterface {
    return {
      created: param.created,
      discounts: param.discounts,
      items: param.items,
      paid: param.paid,
      rounds: param.rounds,
      subtotal: param.subtotal,
      taxes: param.taxes,
    };
  }
}
