import { IOrder } from '@/typings.d';

let orders: IOrder[] = [
  {
    id : 1,
    ingredients: ["salad", "meat", "cheese"],
    price: 4
  },
  {
    id : 2,
    ingredients: ["salad", "meat", "cheese", "bacon"],
    price: 5
  }
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(orders));
}


export async function POST(request: Request) {
  console.log(request);
  const body = await request.json();
  const newOrder = {id: orders.length + 1, ingredients: body, price: 10};
  orders = [...orders, newOrder];
  return new Response(JSON.stringify(newOrder));
}