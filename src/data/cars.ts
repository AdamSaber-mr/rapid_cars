export interface Car {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Volkswagen Golf R',
    category: 'Hot Hatch',
    description: 'Krachtige hot hatch met 320 pk. Perfect voor dagelijks gebruik met sportieve prestaties.',
    image: 'https://images.unsplash.com/photo-1748466245975-98793c8ebb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xrc3dhZ2VuJTIwZ29sZiUyMHIlMjBibHVlfGVufDF8fHx8MTc3MDY0NDY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: '2',
    name: 'Mercedes-Benz GLE',
    category: 'Luxe SUV',
    description: 'Ruime en comfortabele SUV met moderne technologie. Ideaal voor familie en zakelijke ritten.',
    image: 'https://images.unsplash.com/photo-1647763815022-ea4d2da643d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGdsZSUyMHN1diUyMHdoaXRlfGVufDF8fHx8MTc3MDY0NDY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: '3',
    name: 'BMW M3 Competition',
    category: 'Sportwagen',
    description: 'Iconische sportsedan met 510 pk. De ultieme combinatie van comfort en prestaties.',
    image: 'https://images.unsplash.com/photo-1707406768629-580a49c251a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBtMyUyMGJsYWNrfGVufDF8fHx8MTc3MDY0NDY4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: '4',
    name: 'Volkswagen Golf GTI',
    category: 'Hot Hatch',
    description: 'De klassieker onder de hot hatches met 245 pk. Sportief, praktisch en betrouwbaar.',
    image: 'https://images.unsplash.com/photo-1678476727289-3b70c3a7f59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xrc3dhZ2VuJTIwZ29sZiUyMGd0aSUyMHJlZHxlbnwxfHx8fDE3NzA1NDQzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '5',
    name: 'Audi S3 Sportback',
    category: 'Hot Hatch',
    description: 'Compacte krachtpatser met Quattro aandrijving. Stijlvol en razendsnel.',
    image: 'https://images.unsplash.com/photo-1610475426780-97170243d2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpJTIwczMlMjBibGFjayUyMHNwb3J0fGVufDF8fHx8MTc3MDY0NDY4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '6',
    name: 'Mercedes-AMG A45 S',
    category: 'Hot Hatch',
    description: 'De krachtigste hot hatch ter wereld met 421 pk. Pure performance in compact formaat.',
    image: 'https://images.unsplash.com/photo-1611760399750-bf3b95ac8f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGFtZyUyMGE0NSUyMHJlZHxlbnwxfHx8fDE3NzA2NDQ2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '7',
    name: 'Audi RS3 Sportback',
    category: 'Hot Hatch',
    description: '5-cilinder turbomotor met 400 pk. Herkenbaar geluid en razendsnelle acceleratie.',
    image: 'https://images.unsplash.com/photo-1650835639741-a9293012b7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpJTIwcnMzJTIwZ3JheSUyMHNwb3J0fGVufDF8fHx8MTc3MDY0NDY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '8',
    name: 'BMW M2 Competition',
    category: 'Sportwagen',
    description: 'Compacte sportcoupé met 410 pk. De perfecte balans tussen vermogen en bestuurbaarheid.',
    image: 'https://images.unsplash.com/photo-1688160294694-f77a27dda666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBtMiUyMGNvbXBldGl0aW9uJTIwYmx1ZXxlbnwxfHx8fDE3NzA2NDUxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '9',
    name: 'Volkswagen Arteon R',
    category: 'Sportsedan',
    description: 'Elegante sportsedan met 320 pk en 4Motion. Comfort en performance in perfecte harmonie.',
    image: 'https://images.unsplash.com/photo-1711912497223-376369a3c4ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xrc3dhZ2VuJTIwYXJ0ZW9uJTIwciUyMHdoaXRlfGVufDF8fHx8MTc3MDY0NTE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '10',
    name: 'Audi RS6 Avant',
    category: 'Performance Estate',
    description: 'De ultieme familiewagen met 600 pk. Razendsnelle stationwagon voor elke gelegenheid.',
    image: 'https://images.unsplash.com/photo-1576592271938-ae6057a2d607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpJTIwcnM2JTIwYXZhbnQlMjBibGFja3xlbnwxfHx8fDE3NzA2NDUxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
