import Link from 'next/link'
import React from 'react'

export default async function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <>
    <nav className='w-full h-10 py-1 flex justify-start items-center px-6 bg-white border-b border-zinc-200'>
            <Link href={"/dashboard/models"} className='flex h-full w-fit px-3 items-center hover:bg-stone-200 rounded-md'>Models</Link>
            <Link href={"/dashboard/credits"} className='flex h-full w-fit px-3 items-center hover:bg-stone-200 rounded-md'>Credits</Link>
    </nav>
    <main>
        {children}
    </main>
    </>
  )
}
