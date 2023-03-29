import { useEffect, useState } from 'react';
import { IOrder } from '@/typings.d';

export const useOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    } catch {}
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders };
};