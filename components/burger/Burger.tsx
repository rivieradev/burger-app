import Salad from './Salad';
import Meat from './Meat';
import Cheese from './Cheese';
import Bacon from './Bacon';
import LowBread from './LowBread';
import TopBread from './TopBread';

const Burger = () => {
  return (
    <div className='mt-10'>
      <TopBread />
      <Salad />
      <Cheese />
      <Bacon />
      <Salad />
      <Meat />
      <LowBread />
    </div>
  )
}

export default Burger;