export class OrderModel {
  created: Date;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: any[];
  rounds: any[];

  constructor(
    created: Date,
    paid: boolean,
    subtotal: number,
    taxes: number,
    discounts: number,
    items: any[],
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
