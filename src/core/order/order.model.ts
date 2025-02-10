import { ItemModel } from "../item/item.model";

export class OrderModel {
  created: Date;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: ItemModel[];
  rounds: any[];

  constructor(
    created: Date,
    paid: boolean,
    subtotal: number,
    taxes: number,
    discounts: number,
    items: ItemModel[],
    rounds: any[]
  ) {
    this.created = created;
    this.paid = paid;
    this.subtotal = subtotal;
    this.taxes = taxes;
    this.discounts = discounts;
    this.items = items;
    this.rounds = rounds;
  }
}
