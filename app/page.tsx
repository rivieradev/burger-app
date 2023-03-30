import OrdersList from '@/components/OrdersList';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex flex-col flex-1 min-h-screen justify-center space-y-3'>
      <h1
        className='text-center font-bold text-2xl'
      >My Orders
      </h1>
      <OrdersList />
    </main>
  );
};
