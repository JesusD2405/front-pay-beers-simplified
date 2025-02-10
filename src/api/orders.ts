import axios, { AxiosResponse } from "axios";
import ApiUrl from "./apiUrl";

import { OrderInterface } from "@/core/order/order.interface";

export const getOrders = async (): Promise<AxiosResponse<OrderInterface>> =>
  axios.get(`${ApiUrl}/api/v1/stocks`);
