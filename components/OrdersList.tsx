'use client';
import { useOrders } from "@/hooks/useOrders";

const OrdersList = () => {
  const { orders } = useOrders();

  return (
    <div>OrdersList</div>
  )
}

export default OrdersList