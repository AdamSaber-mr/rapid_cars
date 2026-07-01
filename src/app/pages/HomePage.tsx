import { Hero } from '../components/Hero';
import { WhyRapidCars } from '../components/WhyRapidCars';
import { HowItWorks } from '../components/HowItWorks';
import { Tussenbanner } from '../components/Tussenbanner';
import { MeestGevraagdeAutos } from '../components/MeestGevraagdeAutos';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyRapidCars />
      <MeestGevraagdeAutos />
      <HowItWorks />
      <Testimonials />
      <Tussenbanner />
    </>
  );
}
