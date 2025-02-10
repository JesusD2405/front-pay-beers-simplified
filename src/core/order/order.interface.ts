import { ItemInterface } from "../item/item.interface";

export interface OrderInterface {
  created: Date;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: ItemInterface[];
  rounds: any[];
}
