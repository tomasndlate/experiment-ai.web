import { auth } from '@/lib/auth';
import Link from 'next/link';
import React from 'react'

export default async function ModelsPage() {
    const session = await auth();

  return (
    <div>
        <div className='w-full h-fit p-2'>
            <section className='h-fit w-full flex justify-between items-center px-14 py-20 text-white rounded-md
            bg-[linear-gradient(to_right,_rgb(9,9,11,.95),_rgb(9,9,11,.89),_rgb(9,9,11,.9))] shadow-lg'>
                <div className='flex flex-col gap-2'>
                    <p className='font-thin text-white'>{session?.user?.name}, your available credits are</p>
                    <p className='flex items-center text-sm gap-2'><span className='text-2xl font-semibold'>1200</span>credits</p>
                </div>
                <div>
                    <Link href="/dashboard/credits" className='inline-block w-fit px-6 py-3 text-sm rounded-full text-zinc-950 bg-white'>Buy Credits</Link>
                </div>
            </section>
        </div>
        Models Section
    </div>
  )
}