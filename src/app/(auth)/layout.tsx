import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {

  // if user log in, redirect to home page
  const session = await auth();
  if (session) redirect("/");

  return (
    <main>
        {children}
    </main>
  );
}
