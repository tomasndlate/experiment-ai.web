import { addTask } from "@/actions/actions";
import { prisma } from "@/lib/db";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  
  return (
    <div>
      <h1>ML Subscription Model</h1>
      <form action={addTask}>
        <input type="text" name="title" placeholder="Item name..." />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
