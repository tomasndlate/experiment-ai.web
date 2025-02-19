// import Link from 'next/link'
import React from 'react'
import DashboardNavbar from './dashboard-navbar'

export default function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <>
    <DashboardNavbar />
    <main>
        {children}
    </main>
    </>
  )
}
