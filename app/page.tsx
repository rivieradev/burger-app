import { Inter } from 'next/font/google';
import Burger from '@/components/burger/Burger';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Burger />
    </main>
  );
};
