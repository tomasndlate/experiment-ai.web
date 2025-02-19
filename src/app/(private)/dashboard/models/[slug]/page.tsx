import AIModel from "./ai-model";


export default async function ModelPage({ params, }: { 
    params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;


  return (
    <div>

      <div>My Post: {slug}</div>
      <AIModel />
    </div>
)
}