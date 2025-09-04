import CursuriHero from '../../components/cursuri/CursuriHero';
import CourseList from '../../components/cursuri/CourseList';
// import Pricing from '../../components/cursuri/Pricing';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursuri și Meditatii Specializate - EliteMind Academy Sectorul 6",
  description: "Explorați gama noastră completă de cursuri și meditatii: matematică, română, limbi străine, fizică și șah pentru elevi din clasele primare și gimnaziale.",
  alternates: {
    canonical: "https://elitemindacademy.ro/cursuri"
  },
  keywords: "cursuri matematica, meditatii romana, cursuri engleza, cursuri germana, cursuri fizica, cursuri sah, preturi meditatii, pachete educationale"
};

export default function CursuriPage() {
  return (
    <main>
      <CursuriHero />
      <CourseList />
      {/* <Pricing /> */}
    </main>
  );
}
