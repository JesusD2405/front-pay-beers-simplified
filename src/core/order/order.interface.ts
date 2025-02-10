export interface OrderInterface {
  created: Date;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: any[];
  rounds: any[];
}
