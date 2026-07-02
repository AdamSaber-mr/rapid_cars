import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const SECTION_FONT = 'Inter, sans-serif';
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface Review {
  name: string;
  location: string;
  car: string;
  quote: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: 'Karim Benali',
    location: 'Amsterdam',
    car: 'Volkswagen Golf R',
    quote:
      'Vlekkeloos geregeld van begin tot eind. De auto stond op tijd klaar en reed werkelijk fantastisch. Zeker voor herhaling vatbaar.',
    rating: 5,
  },
  {
    name: 'Mehdi Ouazzani',
    location: 'Utrecht',
    car: 'Audi RS3 Sedan',
    quote:
      'Perfecte service en heldere communicatie. Geen verborgen kosten, gewoon een schone auto en een topervaring op de weg.',
    rating: 5,
  },
  {
    name: 'Youssef El Amrani',
    location: 'Rotterdam',
    car: 'Volkswagen Golf GTI',
    quote:
      'Snel, sportief en zonder gedoe. Precies wat RapidCars belooft. Het reserveren was zo gepiept en de auto was smetteloos.',
    rating: 5,
  },
];

const avatarColors = ['#2563EB', '#0D9488', '#7C3AED', '#DB2777', '#D97706', '#059669'];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      className="border-t border-[#262626] bg-[#181818] py-16 sm:py-28 lg:py-44"
      style={{ fontFamily: SECTION_FONT }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16"
        >
          <h2
            className="max-w-[640px] text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.025em] text-white"
            style={{ fontWeight: 600, lineHeight: 1.1 }}
          >
            Wat onze rijders zeggen
          </h2>

          {/* Rating badge */}
          <div className="flex shrink-0 items-center gap-4 self-start rounded-2xl border border-[#333333] bg-[#242424] px-5 py-4 sm:self-auto">
            <div className="text-[34px] leading-none text-white" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
              4.9
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F5B301] text-[#F5B301]" strokeWidth={0} />
                ))}
              </div>
              <div className="mt-1.5 text-[12.5px] text-[#9A9A9A]">128 geverifieerde reviews</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {reviews.map((review, index) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: index * 0.12 }}
              className="flex h-full flex-col rounded-2xl border border-[#333333] bg-[#242424] p-8 lg:p-10"
            >
              {/* Header — profile photo + name */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[17px] text-white"
                  style={{ fontWeight: 600, backgroundColor: avatarColors[index % avatarColors.length] }}
                  aria-hidden
                >
                  {getInitials(review.name)}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-[16px] text-white" style={{ fontWeight: 600 }}>
                    {review.name}
                  </div>
                  <div className="mt-0.5 truncate text-[13px] text-[#8A8A8A]">
                    {review.location} · {review.car}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-5 mt-7 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#F5B301] text-[#F5B301]" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="flex-1 text-[16px] text-[#CFCFCF] lg:text-[17px]"
                style={{ fontWeight: 400, lineHeight: 1.65 }}
              >
                “{review.quote}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
