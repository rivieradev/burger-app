'use client';

import ConnectedBurger from "@/components/burger/ConnectedBurger";
import OrderButtons from "@/components/OrderButtons";

const Order = () => {
  return (
    <section className="min-h-screen flex flex-row p-12 justify-center items-center">
      <ConnectedBurger />
      <OrderButtons />
    </section>
  );
};

export default Order;