import { auth } from '@/lib/auth';
import React from 'react'
import CreditsCard from './credits-card';
import { redirect } from 'next/navigation';
import { getUserbyId } from '@/services/user-service';

export default async function CreditsPage() {
    const session = await auth();
    if (!session?.user?.id) redirect('/');
    const user = await getUserbyId(session.user.id);

  return (
    <div className='w-full h-full p-6 max-w-screen-2xl m-auto flex flex-col gap-6'>
      <section>
        <h1 className='text-xl font-semibold'>Choose the best Credits Package for you</h1>
        <p className='text-md'>Try out the basic package with one time payment. Get more credits to enjoy more experimens.</p>
      </section>
      <section className='
        w-full h-96 grid grid-cols-1 gap-4
        xl:grid-cols-[.4fr,1fr]'>
        <div className='w-full h-full flex flex-col gap-2'>
          <p className='font-semibold'>Current Credits:</p>
          <div className='h-full w-full flex justify-between items-center px-14 py-20 text-white rounded-md
            bg-[linear-gradient(to_right,_rgb(9,9,11,.95),_rgb(9,9,11,.89),_rgb(9,9,11,.9))] shadow-lg'>
                <div className='flex flex-col gap-2'>
                    <p className='flex items-center text-sm gap-2'><span className='text-2xl font-semibold'>{user?.credits}</span>credits</p>
                    <p className='text-xs font-thin text-white'>Credits balance</p>
                </div>
            </div>
        </div>
        <div className='w-full h-full flex flex-col gap-2'>
          <p className='font-semibold'>Plans:</p>
          <div className='
            w-full h-full grid grid-cols-1 gap-4
            md:grid-cols-3'>
            <CreditsCard price={50} />
            <CreditsCard price={120} />
            <CreditsCard price={250} />
          </div>
        </div>
      </section>
    </div>
  )
}