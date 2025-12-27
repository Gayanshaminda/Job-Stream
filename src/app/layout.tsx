import Header from "@/app/components/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Job Stream - Find Your Dream Job",
  description: "Find your dream job easily with Job Stream.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>
        <Header />
        {children}
       
      </body>
    </html>
  );
}

//<footer className="container py-8 text-gray-500 text-center">
//Job Board &copy; 2024 - All rights reserved
//</footer>