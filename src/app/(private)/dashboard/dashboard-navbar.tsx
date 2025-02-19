"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardNavbar() {

    const pathname = usePathname()
    const isActive = (path: string) => pathname.startsWith(path)

  return (
    <nav className='w-full h-10 py-1 flex justify-start items-center px-6 text-zinc-500 bg-white border-b border-zinc-200'>

            <Link href={"/dashboard/models"} 
            className={`
                flex h-full w-fit px-3 items-center hover:text-zinc-950 rounded-md
                ${isActive("/dashboard/models") ? "text-emerald-600" : ""}
            `}>Models</Link>

            <Link href={"/dashboard/credits"} 
                className={`
                flex h-full w-fit px-3 items-center hover:text-zinc-950 rounded-md
                ${isActive("/dashboard/credits") ? "text-emerald-600" : ""}
            `}>Credits</Link>

    </nav>
  )
}
