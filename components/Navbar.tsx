import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bg-gray-100 py-2 px-4'>
      <Link  href='/'>Home</Link>
      <div className='flex flex-row space-x-2'>
        <Link href='/order'>New Order</Link>
        <Link href='/checkout'>Checkout</Link>
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;