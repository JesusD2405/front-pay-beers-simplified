"use client";
import { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";

// Core
import { OrderRepository } from "@/core/order/order.repository";
import { OrderModel } from "@/core/order/order.model";

// Components
import { HeaderOrder } from "./components/HeaderOrder";
import { ContentOrder } from "./components/ContentOrder";
import { FooterOrder } from "./components/FooterOrder";

const OrderPreview: NextPage = () => {
  const [order, setOrder] = useState<OrderModel | null>(null);

  const getOrder = async () => {
    try {
      const orderRepository = new OrderRepository();
      const orderData = await orderRepository.get();
      console.log("-- orderData ", orderData);
      setOrder(orderData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="m-5 p-5 rounded overflow-hidden shadow-lg bg-white">
      <Suspense fallback={<p>Loading Orden...</p>}>
        <HeaderOrder />
        <ContentOrder />
        <FooterOrder />
      </Suspense>
    </div>
  );
};

export default OrderPreview;
