import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function PrivateLayout({children}: Readonly<{children: React.ReactNode}>) {
    const session = await auth();
    if (!session) redirect('/');
  return (
    <>
    {/* <header>
        <Navbar />
    </header> */}
    <main>
        {children}
    </main>
    </>
  )
}
