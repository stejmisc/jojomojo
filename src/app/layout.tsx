import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Socials from "./components/Socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thephoolishgirl",
  description: "Heritage ~ Culture ~ Travel ~ Sustainable living",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Socials />
      </body>
    </html>
  );
}
