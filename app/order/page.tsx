'use client';

import Burger from "@/components/burger/Burger";
import OrderButtons from "@/components/OrderButtons";
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

const Order = () => {
  const order = useSelector((state: RootState) => state.order.value);
  return (
    <>
      <Burger ingredients={order}/>
      <OrderButtons />
    </>
  );
};

export default Order;