import { Mapper } from "../base/mapper";
import { OrderInterface } from "./order.interface";
import { OrderModel } from "./order.model";

// Item
import { ItemMapper } from "../item/item.mapper";
import { ItemInterface } from "../item/item.interface";
import { ItemModel } from "../item/item.model";

export class OrderMapper extends Mapper<OrderInterface, OrderModel> {
  mapFrom(param: OrderInterface): OrderModel {
    const itemMapper = new ItemMapper();

    return {
      created: param.created,
      discounts: param.discounts,
      items: param.items.map((item: ItemInterface) => itemMapper.mapFrom(item)),
      paid: param.paid,
      rounds: param.rounds,
      subtotal: param.subtotal,
      taxes: param.taxes,
    };
  }

  mapTo(param: OrderModel): OrderInterface {
    const itemMapper = new ItemMapper();

    return {
      created: param.created,
      discounts: param.discounts,
      items: param.items.map((item: ItemModel) => itemMapper.mapTo(item)),
      paid: param.paid,
      rounds: param.rounds,
      subtotal: param.subtotal,
      taxes: param.taxes,
    };
  }
}
