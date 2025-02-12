import Navbar from "@/components/Navbar";

export default async function PublicLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </>
    
  );
}
