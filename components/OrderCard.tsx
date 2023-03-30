'use client';
import { IOrder } from "@/typings"

const OrderCard = ({ id, ingredients, price } : IOrder) => {

  let uniqueIngredients: string[] = [];

  ingredients.forEach(x => {
    if (!uniqueIngredients.includes(x)) {
      uniqueIngredients = [...uniqueIngredients, x];
    }
  });


  return (
    <div className="flex flex-row justify-between items-center w-1/2 border bg-gray-200 rounded-md py-2 px-4 my-4">
      <ul className="flex flex-row space-x-1 justify-between items-center">
        {uniqueIngredients.map(x => (
          <li key={`ing-${x}`}>{`${x} x ${ingredients.filter(i => x === i).length}`}</li>
        ))}
      </ul>
      <span>{`Total $ ${price}`}</span>
    </div>
  );
};

export default OrderCard