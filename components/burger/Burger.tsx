import Salad from './Salad';
import Meat from './Meat';
import Cheese from './Cheese';
import Bacon from './Bacon';
import LowBread from './LowBread';
import TopBread from './TopBread';

type Props = {
  ingredients: string[];
};

const Burger = ({ ingredients }: Props) => {
  return (
    <div className='mt-10 space-y-1'>
      <TopBread />
      {ingredients.map((ingredient, index) => {
        switch (ingredient)
        {
          case "salad":
            return <Salad key={index}/>;
          case "meat":
            return <Meat key={index}/>;
          case "cheese":
            return <Cheese key={index}/>;
          case "bacon":
            return <Bacon key={index}/>;
          default:
            throw Error("Invalid");
        }  
      })}
      <LowBread />
    </div>
  )
}

export default Burger;