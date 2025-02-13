import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {

  // if user log in, redirect to home page
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <main className="
    grid grid-cols-1 h-full w-full min-h-dvh
    lg:grid-cols-[.8fr_1fr]
    ">
        {children}
        <div className="
        hidden h-full w-full bg-[length:200%_200%] animate-gradient-move
        lg:block
        bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]
        "></div>
    </main>
  );
}
