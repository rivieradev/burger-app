'use client';

import OrderButton from './OrderButton';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/orderSlice';
import type { RootState } from '@/store/store';

const SALAD_COST = 0.5;
const MEAT_COST = 2;
const BACON_COST = 1.5;
const CHEESE_COST = 1;

const OrderButtons = () => {
  const order = useSelector((state: RootState) => state.order.value);
  const dispatch = useDispatch();

  const incrementHandler = (ingredient: string) => {
    if (order.filter(x => x === ingredient).length > 2)
      return;
    dispatch(increment(ingredient));
  };

  const decrementHandler = (ingredient: string) => {
    dispatch(decrement(ingredient));
  };

  const sum = order.filter(x => x === 'salad').length * SALAD_COST +
    order.filter(x => x === 'meat').length * MEAT_COST +
    order.filter(x => x === 'bacon').length * BACON_COST +
    order.filter(x => x === 'cheese').length * CHEESE_COST;

  return (
    <div className="w-[200px] divide-y-2 mx-auto">
        <OrderButton
          ingredient="salad"
          onIncrement={() => incrementHandler("salad")}
          onDecrement={() => decrementHandler("salad")}
          count={order.filter(x => x === "salad").length}
        />
        <OrderButton
          ingredient="meat"
          onIncrement={() => incrementHandler("meat")}
          onDecrement={() => decrementHandler("meat")}
          count={order.filter(x => x === "meat").length}
        />
        <OrderButton
          ingredient="bacon"
          onIncrement={() => incrementHandler("bacon")}
          onDecrement={() => decrementHandler("bacon")}
          count={order.filter(x => x === "bacon").length}
        />
        <OrderButton
          ingredient="cheese"
          onIncrement={() => incrementHandler("cheese")}
          onDecrement={() => decrementHandler("cheese")}
          count={order.filter(x => x === "cheese").length}
        />
        <label className="mt-2 text-2xl font-bold">$ {sum}</label>
      </div>
  );
};

export default OrderButtons;