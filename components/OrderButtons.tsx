'use client';

import OrderButton from './OrderButton';
import Total from './Total';

const OrderButtons = () => {

  return (
    <div className="w-[200px] divide-y-2 mx-auto">
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
        <Total />
      </div>
  );
};

export default OrderButtons;