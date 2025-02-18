"use client";
import { loadStripe } from '@stripe/stripe-js';
import { buyCredits } from './actions';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CreditsCard({ price }: { price: 50 | 120 | 250 }) {

  const creditsPlans: Record<number, {cash: number, name: string, description: string}> = {
    50: {cash: 1, name: 'Hello, World!', description: 'Basic package to get started'},
    120: {cash: 2, name: 'Making It Rain', description: 'Get more credits to enjoy more experiments'},
    250: {cash: 3, name: 'Jeff Bezos Mode', description: 'Get the most credits to enjoy the most experiments'},
  }
  const plan = creditsPlans[price];

  const handleBuyCredits = async () => {
    buyCredits(price)
    .then(async (session) => {
      const stripe = await stripePromise;
      if (!stripe) return;
      await stripe.redirectToCheckout({ sessionId: session });
    })
  };

  return (
    <div className='h-full w-full flex flex-col justify-between border border-gray-300 p-4 rounded-md'>
      <section className='flex flex-col'>
        <h3 className='text-xl font-semibold'>{plan.name}</h3>
        <p>{plan.description}</p>
      </section>
      <section className='flex flex-col gap-4'>
        <p className='flex items-center text-sm gap-2'><span className='text-4xl font-semibold'>{price}</span> credits</p>
        <button 
          className='h-fit w-full bg-zinc-950 text-white py-2 px-4 rounded-lg'
          onClick={handleBuyCredits} type='submit'>Buy for {plan.cash}€</button>
      </section>
      
      
    </div>
  )
}
