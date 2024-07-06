import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NewsSection from "./components/NewsSection";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelwMAS",
  description: "A Travel App ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <NewsSection/>
       <Footer/>
      </body>
    </html>
  );
}
