import { ai_models } from '@/lib/ai-models';
import { auth } from '@/lib/auth';
import { getUserbyId } from '@/services/user-service';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function ModelsPage() {
    const session = await auth();
    if (!session?.user?.id) redirect('/');
    const user = await getUserbyId(session.user.id);

  return (
    <div className='w-full h-full p-6 max-w-screen-2xl m-auto flex flex-col gap-6'>
        <section>
            <h1 className='text-xl font-semibold'>Experiment your models</h1>
            <p className='text-md'>Try out the models you most interested in. Each usage cost 1 credit.</p>
        </section>
        <div className='w-full h-fit'>
            <section className='
            h-fit w-full flex flex-col p-10 gap-6 text-white rounded-md
            md:flex-row md:justify-between md:items-center md:px-14 md:py-20
            bg-[linear-gradient(to_right,_rgb(9,9,11,.95),_rgb(9,9,11,.89),_rgb(9,9,11,.9))] shadow-lg'>
                <div className='flex flex-col gap-2'>
                    <p className='text-md font-thin text-white'>{session?.user?.name}, your available credits are</p>
                    <p className='flex items-center text-md gap-2'><span className='text-3xl font-semibold'>{user?.credits}</span>credits</p>
                </div>
                <div>
                    <Link href="/dashboard/credits" className='inline-block w-fit px-6 py-3 text-sm rounded-full text-zinc-950 bg-white'>Buy Credits</Link>
                </div>
            </section>
        </div>
        <section className='w-full h-fit flex flex-col gap-4'>
            <h3 className='font-semibold'>Pick your model</h3>
            <div className='
            w-full h-fit grid grid-cols-1 gap-4
            md:grid-cols-2'>
                {Object.keys(ai_models).map(slug => (
                    <div key={slug} className='w-full h-fit p-6 flex flex-col gap-4 bg-white rounded-md shadow-lg'>
                        <div>
                            <h4 className='text-lg font-semibold'>{ai_models[slug].name}</h4>
                            <p>{ai_models[slug].description}</p>
                        </div>
                        <Link href={`models/${slug}`} className='w-fit h-fit self-end px-6 py-1 text-sm rounded-full text-white bg-zinc-950'>Experiment</Link>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}