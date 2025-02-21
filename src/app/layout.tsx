import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "MLS Models",
  description: "Machine Learning Subscription models to make predictions.",
  icons:{
    icon:"/images/icon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
