import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "./_components";
import "./globals.css";
import GlobalProvider from "@/context/globalContext";
import GlobalLayout from "./_components/layout/globalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Leaves",
  description: "Generated by Golden Leves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <GlobalLayout>
            <Navbar />
            {children}
            <Footer />
          </GlobalLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
