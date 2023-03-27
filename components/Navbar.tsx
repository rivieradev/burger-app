import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bg-gray-200 p-2'>
      <span>Home</span>
      <div className='flex flex-row space-x-2'>
        <Link href='/order'>New Order</Link>
        <span>Checkout</span>
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;