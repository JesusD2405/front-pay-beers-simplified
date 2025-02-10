import { OrderMapper } from "./order.mapper";
import { OrderModel } from "./order.model";
import { getOrders } from "@/api/orders";

export class OrderRepository {
  private mapper = new OrderMapper();

  constructor() {}

  async get(): Promise<OrderModel | null> {
    let order: OrderModel | null = null;

    try {
      const { data } = await getOrders();
      order = this.mapper.mapFrom(data);
    } catch (error) {
      console.error(error);
    }

    return order;
  }
}
