'use client';
import { useOrders } from "@/hooks/useOrders";
import OrderCard from './OrderCard';

const OrdersList = () => {
  const { orders } = useOrders();

  return (
    <div className="min-h-screen my-auto">
      {orders?.map(x => (
        <OrderCard id={x.id} ingredients={x.ingredients} price={x.price} key={x.id}/>
      ))}
    </div>
  );
};

export default OrdersList;