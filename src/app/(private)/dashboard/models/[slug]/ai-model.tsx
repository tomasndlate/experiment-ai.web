"use client";
import { payCredits } from "./ai-model-actions";

export default function AIModel() {


  const handleUseCredits = async () => {
    payCredits(1)
    .then(() => {
      console.log('Used 1 credit');
    })
    .catch((e) => console.error(e));
  };

  return (
    <div>
      <form action={handleUseCredits}>
        <input type="text" />
      <button type="submit" className="bg-zinc-950 text-white">Simulate usage</button>
      </form>
    </div>
)
}