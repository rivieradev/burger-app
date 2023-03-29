'use client';

import OrderButton from './OrderButton';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/orderSlice';
import type { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';

const SALAD_COST = 0.5;
const MEAT_COST = 2;
const BACON_COST = 1.5;
const CHEESE_COST = 1;

const OrderButtons = () => {
  const order = useSelector((state: RootState) => state.order.value);
  const dispatch = useDispatch();

  const router = useRouter();

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

  const goToCheckoutHandler = () => {
    if (sum === 0)
      return;

    router.push('/checkout');
  };

  return (
    <div className="w-[300px] divide-y-2 mx-auto">
      {["salad", "meat", "bacon", "cheese"].map(ing => (
        <OrderButton
          key={`button-${ing}`}
          ingredient={ing}
          onIncrement={() => incrementHandler(ing)}
          onDecrement={() => decrementHandler(ing)}
          count={order.filter(x => x === ing).length}
      />
      ))}
      <div className='flex flex-row justify-between items-center mt-2'>
        <label className="mt-2 text-2xl font-bold">$ {sum}</label>
        <button
          className='bg-blue-500 font-bold text-white
          hover:bg-green-600 p-2 rounded-xl
          transition duration-150 ease-in-out
          disabled:bg-gray-400 disabled:hover:bg-gray-400
          disabled:cursor-not-allowed'
          onClick={goToCheckoutHandler}
          disabled={sum === 0}
        >Go to Checkout</button>
      </div>
    </div>
  );
};

export default OrderButtons;