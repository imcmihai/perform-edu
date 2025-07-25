import AboutHero from '../../components/despre/AboutHero';
import Values from '../../components/despre/Values';
import Team from '../../components/despre/Team';
import Results from '../../components/despre/Results';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre EliteMind Academy - Centrul Educational din Sectorul 6",
  description: "Descoperiți povestea EliteMind Academy, misiunea noastră, valorile și echipa de profesori dedicați excelenței educaționale în Sectorul 6, București.",
  alternates: {
    canonical: "https://elitemindacademy.ro/despre"
  },
  keywords: "despre elitemind academy, centru educational sector 6, profesori meditatii bucuresti, misiune educationala, valori academice"
};

export default function Despre() {
  return (
    <main>
      <AboutHero />
      <Values />
      <Team />
      <Results />
    </main>
  );
}

