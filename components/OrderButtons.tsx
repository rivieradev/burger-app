'use client';

import OrderButton from './OrderButton';

const OrderButtons = () => {

  return (
    <div className="w-[200px] divide-y-2 mx-auto mt-7">
        <OrderButton
          ingredient="salad"
        />
        <OrderButton
          ingredient="meat"
        />
        <OrderButton
          ingredient="bacon"
        />
        <OrderButton
          ingredient="cheese"
        />
      </div>
  );
};

export default OrderButtons;