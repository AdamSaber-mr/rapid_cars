import { Hero } from '../components/Hero';
import { WhyRapidCars } from '../components/WhyRapidCars';
import { HowItWorks } from '../components/HowItWorks';
import { Tussenbanner } from '../components/Tussenbanner';
import { MeestGevraagdeAutos } from '../components/MeestGevraagdeAutos';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyRapidCars />
      <HowItWorks />
      <Tussenbanner />
      <MeestGevraagdeAutos />
      <FinalCTA />
    </>
  );
}
