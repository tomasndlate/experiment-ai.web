// import { addTask } from "@/actions/actions";
// import { auth, signOut } from "@/lib/auth";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { prisma } from "@/lib/prisma";
// import { redirect } from "next/navigation";

export default async function Home() {

  // const session = await auth();
  // // if (!session) redirect("/signin");

  // // const tasks = await prisma.task.findMany();
  // const handleSignOut = async () => {
  //   "use server";
  //   await signOut();
  // }
  
  return (
    <>
    <main className="">

      {/* HERO */}
      <div className='
      px-6 py-6 flex text-white min-h-[500px] h-fit justify-start items-center bg-[length:200%_200%] animate-gradient-move
      md:px-16 md:py-16 md:justify-center
      bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]'>
        {/* LEFT */}
        <article className="
        w-full max-w-3xl h-fit flex flex-col justify-center gap-4 items-start text-start
        md:items-center md:text-center
        ">
          <h1 className='text-4xl md:text-5xl font-bold'>Machine Learning models to make predictions.</h1>
          <p className='text-lg'>Subscription-based service using Stripe, with user authentication via Auth.js. Lambda to power models, and Next.js client and server-side, host in Vercel.</p>
          <a href="https://github.com/tomasndlate/ml-spam-detector" target="_blank" rel="noopener noreferrer" 
            className='inline-block w-fit px-6 py-3 rounded-full bg-zinc-950'>Project Documentation</a>
          <p className='text-md text-slate-200'>Join the 1 other users already in the community!</p>
        </article>
      </div>

      <div className="px-6 py-6 flex justify-center items-center gap-4 text-center">
        <h3>Developed by Tomas Ndlate </h3>
        <a href="https://github.com/tomasndlate" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tomasndlate/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

    </main>
      {/* <div>
        <h1>ML Subscription Model for {session?.user?.email}</h1>
        <form action="">
          <input type="text" name="title" placeholder="Item name..." />
          <button type="submit">Add task</button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
            ))}
            </ul>
        <button onClick={handleSignOut}>Sign Out</button>
      </div> */}
    </>
  );
}
