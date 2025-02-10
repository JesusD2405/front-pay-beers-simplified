"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

// Core
import { OrderRepository } from "@/core/order/order.repository";
import { OrderModel } from "@/core/order/order.model";

// Components
import HeaderOrder from "./components/HeaderOrder";
import ContentOrder from "./components/ContentOrder";
import FooterOrder from "./components/FooterOrder";

const OrderPreview: NextPage = () => {
  const [order, setOrder] = useState<OrderModel | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const getOrder = async () => {
    setLoading(true);
    try {
      const orderRepository = new OrderRepository();
      const orderData = await orderRepository.get();
      setOrder(orderData);
    } catch (error) {
      console.error(error);
      setOrder(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrder();
  }, []);

  if (!loading && !order)
    return (
      <p className="text-black text-center">
        Ha ocurrido un error, por favor intente nuevamente...
      </p>
    );

  return loading ? (
    <p className="text-black text-center">Cargando order...</p>
  ) : (
    <div className="m-5 p-5 rounded overflow-hidden shadow-lg bg-white">
      <HeaderOrder created={order?.created} paid={order?.paid} />
      <ContentOrder items={order?.items} />
      <FooterOrder
        discounts={order?.discounts}
        subtotal={order?.subtotal}
        taxes={order?.taxes}
      />
    </div>
  );
};

export default OrderPreview;
