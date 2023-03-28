import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

const SALAD_COST = 0.5;
const MEAT_COST = 2;
const BACON_COST = 1.5;
const CHEESE_COST = 1;

const Total = () => {
  const order = useSelector((state: RootState) => state.order.value);

  const sum = order.filter(x => x === 'salad').length * SALAD_COST +
    order.filter(x => x === 'meat').length * MEAT_COST +
    order.filter(x => x === 'bacon').length * BACON_COST +
    order.filter(x => x === 'cheese').length * CHEESE_COST;

  return (
    <label className="mt-2 text-2xl font-bold">$ {sum}</label>
  );
};

export default Total;