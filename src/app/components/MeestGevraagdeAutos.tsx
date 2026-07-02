import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { cars } from './carData';
import type { Car } from './carData';

const SECTION_FONT = 'Inter, sans-serif';
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface ShowcaseCar {
  id: string;
  title: string;
  image: string;
  price: string;
  category: string;
  car?: Car;
  isPlaceholder?: boolean;
}

const priceBySlug: Record<string, string> = {
  'volkswagen-golf-r': '€325',
  'volkswagen-golf-gti': '€245',
  'audi-rs3-sedan': '€425',
};

const placeholderConfigs = [
  { title: 'Nieuwe performance auto', price: '€295' },
  { title: 'Nieuwe weekend special', price: '€275' },
  { title: 'Nieuwe signature drop', price: '€365' },
  { title: 'Nieuwe hot hatch', price: '€255' },
  { title: 'Nieuwe premium sedan', price: '€395' },
  { title: 'Nieuwe track-ready optie', price: '€445' },
  { title: 'Nieuwe daily sport', price: '€225' },
];

const showcaseCars: ShowcaseCar[] = [
  ...cars.map((car) => ({
    id: car.slug,
    title: car.name,
    image: car.image,
    price: priceBySlug[car.slug] ?? '€295',
    category: car.category,
    car,
  })),
  ...placeholderConfigs.map((item, index) => ({
    id: `placeholder-${index + 1}`,
    title: item.title,
    image: cars[index % cars.length].image,
    price: item.price,
    category: 'Binnenkort',
    isPlaceholder: true,
  })),
];

function ShowcaseCard({ item }: { item: ShowcaseCar }) {
  const content = (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-[#333333] bg-[#242424] transition-colors duration-300 hover:border-[#454545]">
      <div className="relative aspect-[1/1] overflow-hidden bg-[#2A2A2A]">
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out ${
            item.isPlaceholder ? 'opacity-70 saturate-[0.85]' : 'group-hover/card:scale-[1.06]'
          }`}
        />
        {item.isPlaceholder && (
          <span
            className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#C5C5C5] backdrop-blur"
            style={{ fontWeight: 600 }}
          >
            Binnenkort
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-3 px-4 py-3.5 lg:px-5 lg:py-4">
        <div className="min-w-0">
          <h3
            className="truncate text-[15px] text-white lg:text-[16px]"
            style={{ fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            {item.title}
          </h3>
          <p className="mt-0.5 text-[12px] text-[#8A8A8A] lg:text-[12.5px]">{item.category}</p>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-[15px] text-white lg:text-[16px]" style={{ fontWeight: 600 }}>
            {item.price}
          </span>
          <span className="block text-[10.5px] text-[#7E7E7E]">per dag</span>
        </div>
      </div>

      <div className="mt-auto px-4 pb-4 lg:px-5 lg:pb-5">
        <div className="flex items-center justify-between gap-2 bg-[#7A1C1C] px-4 py-3.5 text-white transition-colors duration-300 group-hover/card:bg-[#651717]">
          <span
            className="text-[13px] uppercase tracking-[0.08em]"
            style={{ fontWeight: 600 }}
          >
            Bekijk detailpagina
          </span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </article>
  );

  if (item.car) {
    return (
      <Link to={`/auto/${item.car.slug}`} className="block h-full cursor-pointer">
        {content}
      </Link>
    );
  }

  return <div className="block h-full cursor-default">{content}</div>;
}

export function MeestGevraagdeAutos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 8);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 8);
    setProgress(scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scrollByCard = (direction: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const amount = first ? first.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  const arrowClasses =
    'absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#3A3A3A] bg-[#2A2A2A] text-white shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#0A0A0A] sm:flex lg:h-12 lg:w-12';

  return (
    <section
      id="aanbod"
      className="scroll-mt-24 border-t border-[#262626] bg-[#181818] py-20 sm:py-24 lg:py-32"
      style={{ fontFamily: SECTION_FONT }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-8 flex items-end justify-between gap-6 lg:mb-10"
        >
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-[-0.025em] text-white"
            style={{ fontWeight: 600, lineHeight: 1.1 }}
          >
            Trending <span className="text-white">Auto&apos;s</span>
          </h2>
          <Link
            to="/aanbod"
            className="hidden shrink-0 items-center gap-1.5 text-[14px] text-[#9A9A9A] transition-colors hover:text-white sm:inline-flex"
            style={{ fontWeight: 500 }}
          >
            Bekijk alles
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.05 }}
        >
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden pt-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {showcaseCars.map((item) => (
              <div
                key={item.id}
                className="w-[82%] shrink-0 snap-start transition-transform duration-300 ease-out sm:w-[47%] lg:w-[31.5%] lg:hover:-translate-y-1.5"
              >
                <ShowcaseCard item={item} />
              </div>
            ))}
          </div>

          <AnimatePresence>
            {canLeft && (
              <motion.button
                key="left"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                onClick={() => scrollByCard(-1)}
                className={`${arrowClasses} left-3`}
                aria-label="Vorige auto's"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.8} />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {canRight && (
              <motion.button
                key="right"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                onClick={() => scrollByCard(1)}
                className={`${arrowClasses} right-3`}
                aria-label="Volgende auto's"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobiel: scroll-indicator + bekijk alles */}
        <div className="mt-7 flex flex-col items-center gap-5 sm:hidden">
          <div className="h-[3px] w-28 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-white/60 transition-[width] duration-150 ease-out"
              style={{ width: `${Math.round((0.12 + progress * 0.88) * 100)}%` }}
            />
          </div>
          <Link
            to="/aanbod"
            className="inline-flex items-center gap-1.5 text-[14px] text-[#9A9A9A] transition-colors hover:text-white"
            style={{ fontWeight: 500 }}
          >
            Bekijk alles
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
