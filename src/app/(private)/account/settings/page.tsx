import { auth } from '@/lib/auth';
import React from 'react'

export default async function SettingsPage() {
    const session = await auth();
    
  return (
    <div>SettingsPage
        <p>{session?.user?.name}</p>
    </div>
  )
}