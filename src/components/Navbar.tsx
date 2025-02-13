import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function Navbar() {

  const session = await auth();

  const handleSignOut = async () => {
    "use server";
    await signOut();
  }
  
  return (
    <nav className='w-full h-20 bg-white-950 flex px-5 text-black justify-between items-center'>
        <h1 className='text-lg font-semibold'>
            <span className="hidden md:inline-block">ML Subscription Models</span>
            <span className="inline-block md:hidden">MLS Models</span>
        </h1>
        {session ? (
          <div className='flex gap-2 items-center text-sm'>
            <p>{session.user?.name}</p>
            <button onClick={handleSignOut}>Sign out</button>
            <Link href="/dashboard"><p>Dashboard</p></Link>
          </div>
        ) : (
          <div className='flex gap-2 items-center text-sm'>
            <Link href="/signin"><p>Log in</p></Link>
            <Link href="/signin" className="px-4 py-2 bg-zinc-950 text-white rounded-full"><p>Sign up</p></Link>
          </div>
        )}
        
    </nav>
  )
}