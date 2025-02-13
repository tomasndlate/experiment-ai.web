import { auth } from '@/lib/auth';
import React from 'react'

export default async function DashboardPage() {
    const session = await auth();

  return (
    <div>DashboardPage
        <p>{session?.user?.name}</p>
        <p>x credits</p>
    </div>
  )
}