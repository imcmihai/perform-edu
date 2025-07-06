import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PerformEDU - Meditatii si Cursuri pentru Elevi",
  description: "Meditatii si Cursuri dedicate elevilor din ciclul primar si gimnazial la Matematica, Romana, Engleza, Franceza, Germana, Fizica, Sah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
