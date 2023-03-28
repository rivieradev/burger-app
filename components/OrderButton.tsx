'use client';

type Props = {
  ingredient: string;
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

const OrderButton = ({ ingredient, count, onDecrement, onIncrement }: Props) => {

  return (
    <div className="flex flex-row justify-between items-center mt-1">
      <label className="">{ingredient}</label>
      <div className="flex flex-row items-center space-x-3">
        <button
          className="border rounded-sm px-2 py-1 hover:bg-sky-200"
          onClick={onDecrement}
        >-</button>
        <span>{count}</span>
        <button
          className="border rounded-sm px-2 py-1 hover:bg-sky-200"
          onClick={onIncrement}
          >+</button>
      </div>
    </div>
  );
};

export default OrderButton;