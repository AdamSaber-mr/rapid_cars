import golfRImage from "@/assets/dfb736f1fc4a9204456d2c2a0349e8a9c64afbe9.png";
import audiRS3Image from "@/assets/8ec90a03904bbd76791a145fc447f94a85f29019.png";
import golfGTIImage from "@/assets/4bc2b5a66799dc4e59a71cf1bc4de3b8397c2838.png";
import golfGTIDetail1 from "@/assets/a5e04d2fadcd00beba808c5bd9be8194789e5066.png";
import golfGTIDetail2 from "@/assets/15e1b513343d0acaf41cabb66419ac77d7bcffb6.png";
import golfGTIDetail3 from "@/assets/af2e0ec6148599439d6187427f8a48c99ab05de0.png";
import golfRDetail1 from "@/assets/63cef2a2616c8b43fc48f973cccbeb0a531dbafd.png";
import golfRDetail2 from "@/assets/83f0ceac341d66e5fca23953c212e3fa55cb2077.png";
import golfRDetail3 from "@/assets/f0c6b4b5b31ccec9184f0215ad7ba945f528cf9b.png";
import audiRS3Detail1 from "@/assets/ac0803e9fbff1c8fcb2bfa272b523655cc98b709.png";

export interface Car {
  id: number;
  slug: string;
  name: string;
  category: string;
  color: string;
  tagline: string;
  detailTagline: string;
  specs: string;
  power: string;
  drivetrain: string;
  drivetrainShort: string;
  acceleration: string;
  transmission: string;
  whyText: string;
  features: string[];
  rentalText: string;
  image: string;
  gallery: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    slug: 'volkswagen-golf-r',
    name: 'Volkswagen Golf R',
    category: 'Hot Hatch',
    color: 'Zwart',
    tagline: 'Onopvallend snel, altijd klaar',
    detailTagline: 'AWD grip, snelle launch, daily sport.',
    specs: '2.0 TSI Turbo',
    power: '320 pk',
    drivetrain: '4Motion AWD',
    drivetrainShort: '4Motion',
    acceleration: '0-100 in 4.7s',
    transmission: 'Automaat (DSG)',
    whyText: 'Perfect als je een sportieve hatchback wil die snel is en overal grip heeft.',
    features: ['Sportstoelen (R)', 'Apple CarPlay / Android Auto', 'Cruise control', 'Parkeersensoren'],
    rentalText: 'Beschikbaarheid wisselt. Stuur ons een bericht en we reageren snel.',
    image: golfRImage,
    gallery: [
      golfRImage,
      golfRDetail1,
      golfRDetail2,
      golfRDetail3,
    ],
  },
  {
    id: 2,
    slug: 'volkswagen-golf-gti',
    name: 'Volkswagen Golf GTI',
    category: 'Hot Hatch',
    color: 'Rood',
    tagline: 'De klassieker, scherper dan ooit',
    detailTagline: 'Hot hatch vibe. Snel en strak.',
    specs: '2.0 TSI Turbo',
    power: '245 pk',
    drivetrain: 'Voorwielaandrijving',
    drivetrainShort: 'FWD',
    acceleration: '0-100 in 6.2s',
    transmission: 'Automaat (DSG)',
    whyText: 'De perfecte mix van fun, sport en comfort — ideaal voor city & weekend.',
    features: ['Sportinterieur (GTI-stijl)', 'Apple CarPlay / Android Auto', 'Rijmodi', 'Parkeersensoren'],
    rentalText: 'Wil je \'m voor een dag, weekend of langer? App ons je periode.',
    image: golfGTIImage,
    gallery: [
      golfGTIImage,
      golfGTIDetail1,
      golfGTIDetail2,
      golfGTIDetail3,
    ],
  },
  {
    id: 3,
    slug: 'audi-rs3-sedan',
    name: 'Audi RS3 Sedan',
    category: 'Sedan',
    color: 'Wit',
    tagline: '400 pk vijfcilinder krachtpatser',
    detailTagline: 'Brute power. Iconisch geluid.',
    specs: '2.5 TFSI 5-cilinder',
    power: '400 pk',
    drivetrain: 'Quattro AWD',
    drivetrainShort: 'Quattro',
    acceleration: '0-100 in 3.8s',
    transmission: 'Automaat (S tronic)',
    whyText: 'Voor wie echt iets speciaals wil: super snel, super strak en pure performance.',
    features: ['RS sportstoelen', 'Apple CarPlay / Android Auto', 'Performance rijmodi', 'Parkeercamera / sensoren'],
    rentalText: 'Deze is vaak snel weg. Check beschikbaarheid via WhatsApp voor de snelste reactie.',
    image: audiRS3Image,
    gallery: [
      audiRS3Image,
      audiRS3Detail1,
    ],
  },
];
