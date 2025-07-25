import Hero from "@/components/acasa/Hero";
import Benefits from "@/components/acasa/Benefits";
import Disciplines from "@/components/acasa/Disciplines";
import FinalCTA from "@/components/acasa/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EliteMind Academy - Meditatii si Cursuri pentru Elevi in Sectorul 6",
  description: "Centru educational specializat in meditatii la matematica, romana, engleza, germana, fizica si sah pentru elevi din ciclul primar si gimnazial in Sectorul 6, Bucuresti.",
  alternates: {
    canonical: "https://elitemindacademy.ro/"
  },
  keywords: "meditatii matematica, meditatii romana, cursuri engleza, cursuri germana, meditatii sectorul 6, cursuri elevi bucuresti",
  openGraph: {
    title: "EliteMind Academy - Meditatii si Cursuri pentru Elevi in Sectorul 6",
    description: "Centru educational specializat in meditatii la matematica, romana, engleza, germana, fizica si sah pentru elevi din ciclul primar si gimnazial in Sectorul 6, Bucuresti.",
    url: "https://elitemindacademy.ro/",
    type: "website",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "EliteMind Academy - Centru Educational Sectorul 6"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteMind Academy - Meditatii si Cursuri pentru Elevi in Sectorul 6",
    description: "Centru educational specializat in meditatii la matematica, romana, engleza, germana, fizica si sah pentru elevi din Sectorul 6, Bucuresti.",
    images: ["/images/twitter-home.jpg"]
  }
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Disciplines />
      <FinalCTA />
    </div>
  );
}
