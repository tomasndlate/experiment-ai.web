// import { addTask } from "@/actions/actions";
import { auth, signOut } from "@/lib/auth";
// import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await auth();
  if (!session) redirect("/signin");

  // const tasks = await prisma.task.findMany();
  const handleSignOut = async () => {
    "use server";
    await signOut();
  }
  
  return (
    <div>
      <h1>ML Subscription Model for {session.user?.email}</h1>
      <form action="">
        <input type="text" name="title" placeholder="Item name..." />
        <button type="submit">Add task</button>
      </form>
      {/* <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul> */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
