'use client';
import { IOrder } from "@/typings"

const OrderCard = ({ id, ingredients, price } : IOrder) => {

  const uniqueIngredients: string[] = [...new Set(ingredients)];

  return (
    <div className="flex flex-row justify-between items-center border bg-gray-200 rounded-md py-2 px-4 my-4">
      <ul className="flex flex-row space-x-1 justify-between items-center">
        {uniqueIngredients.map(x => (
          <li
            key={`ing-${x}`} 
            className='p-1 rounded-full bg-sky-300'
          >{`${x} x ${ingredients.filter(i => x === i).length}`}
          </li>
        ))}
      </ul>
      <span className="p-1 bg-green-600 rounded-md font-bold text-white">{`Total $ ${price}`}</span>
    </div>
  );
};

export default OrderCard