'use client';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/orderSlice';
import type { RootState } from '@/store/store';

type Props = {
  ingredient: string;
};

const OrderButton = ({ ingredient }: Props) => {
  const order = useSelector((state: RootState) => state.order.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment(ingredient));
  };

  const decrementHandler = () => {
    dispatch(decrement(ingredient));
  };

  return (
    <div className="flex flex-row justify-between items-center mt-1">
      <label className="">{ingredient}</label>
      <div className="flex flex-row items-center space-x-3">
        <button
          className="border rounded-sm px-2 py-1 hover:bg-sky-200"
          onClick={decrementHandler}
        >-</button>
        <span>{order.filter(x => x === ingredient).length}</span>
        <button
          className="border rounded-sm px-2 py-1 hover:bg-sky-200"
          onClick={incrementHandler}
          >+</button>
      </div>
    </div>
  );
};

export default OrderButton;