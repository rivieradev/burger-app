'use client';

import Burger from './Burger';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

const ConnectedBurger = () => {
  const order = useSelector((state: RootState) => state.order.value);

  return (
    <Burger ingredients={order} />
  );
};

export default ConnectedBurger;