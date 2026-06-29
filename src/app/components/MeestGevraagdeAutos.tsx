import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  CarFront,
  MapPin,
  UserRound,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';
import { cars } from './carData';
import type { Car } from './carData';

const SECTION_FONT = 'Outfit, Inter, sans-serif';

interface ShowcaseCar {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  city: string;
  deposit: string;
  age: string;
  plate: string;
  actionLabel: string;
  car?: Car;
  isPlaceholder?: boolean;
}

const realCarMeta: Record<string, Omit<ShowcaseCar, 'id' | 'title' | 'subtitle' | 'image' | 'car'>> = {
  'volkswagen-golf-r': {
    badge: 'Nederlands kenteken',
    price: '€325,00',
    city: 'Amsterdam',
    deposit: '€1500',
    age: '21+',
    plate: 'Nederlands kenteken',
    actionLabel: 'Boek nu',
  },
  'volkswagen-golf-gti': {
    badge: 'Nederlands kenteken',
    price: '€245,00',
    city: 'Amsterdam',
    deposit: '€1000',
    age: '21+',
    plate: 'Nederlands kenteken',
    actionLabel: 'Boek nu',
  },
  'audi-rs3-sedan': {
    badge: 'Nederlands kenteken',
    price: '€425,00',
    city: 'Amsterdam',
    deposit: '€2000',
    age: '23+',
    plate: 'Nederlands kenteken',
    actionLabel: 'Boek nu',
  },
};

const placeholderConfigs = [
  {
    title: 'Nieuwe performance auto',
    subtitle: 'Binnenkort live in onze collectie.',
    price: '€295,00',
    city: 'Rotterdam',
    deposit: '€1500',
    age: '21+',
    plate: 'Nederlands kenteken',
    badge: 'Binnenkort',
  },
  {
    title: 'Nieuwe weekend special',
    subtitle: 'Nog even wachten, deze komt eraan.',
    price: '€275,00',
    city: 'Utrecht',
    deposit: '€1000',
    age: '21+',
    plate: 'Nederlands kenteken',
    badge: 'Binnenkort',
  },
  {
    title: 'Nieuwe signature drop',
    subtitle: 'Volgende toevoeging voor de homepage.',
    price: '€365,00',
    city: 'Amsterdam',
    deposit: '€2000',
    age: '23+',
    plate: 'Nederlands kenteken',
    badge: 'Binnenkort',
  },
  {
    title: 'Nieuwe hot hatch',
    subtitle: 'Extra snelle hatchback volgt snel.',
    price: '€255,00',
    city: 'Den Haag',
    deposit: '€1000',
    age: '21+',
    plate: 'Kilometervrij',
    badge: 'Kilometervrij',
  },
  {
    title: 'Nieuwe premium sedan',
    subtitle: 'Performance met een strakke look.',
    price: '€395,00',
    city: 'Amsterdam',
    deposit: '€2000',
    age: '23+',
    plate: 'Nederlands kenteken',
    badge: 'Binnenkort',
  },
  {
    title: 'Nieuwe track-ready optie',
    subtitle: 'Meer beleving, meer vermogen, meer stijl.',
    price: '€445,00',
    city: 'Eindhoven',
    deposit: '€2500',
    age: '25+',
    plate: 'Nederlands kenteken',
    badge: 'Binnenkort',
  },
  {
    title: 'Nieuwe daily sport',
    subtitle: 'Sportief genoeg voor elke dag.',
    price: '€225,00',
    city: 'Rotterdam',
    deposit: '€1000',
    age: '21+',
    plate: 'Kilometervrij',
    badge: 'Kilometervrij',
  },
];

const showcaseCars: ShowcaseCar[] = [
  ...cars.map((car) => ({
    id: car.slug,
    title: car.name,
    subtitle: car.tagline,
    image: car.image,
    car,
    ...realCarMeta[car.slug],
  })),
  ...placeholderConfigs.map((item, index) => ({
    id: `placeholder-${index + 1}`,
    title: item.title,
    subtitle: item.subtitle,
    image: cars[index % cars.length].image,
    price: item.price,
    city: item.city,
    deposit: item.deposit,
    age: item.age,
    plate: item.plate,
    badge: item.badge,
    actionLabel: 'Binnenkort beschikbaar',
    isPlaceholder: true,
  })),
];

const wrapIndex = (value: number, total: number) => {
  if (value < 0) {
    return (value % total + total) % total;
  }

  return value % total;
};

const getVisibleCars = (startIndex: number, count: number) =>
  Array.from({ length: count }, (_, offset) => showcaseCars[wrapIndex(startIndex + offset, showcaseCars.length)]);

const desktopCardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 90 : -90,
    scale: 0.985,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -90 : 90,
    scale: 0.985,
  }),
};

const mobileCardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 72 : -72,
    scale: 0.99,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -72 : 72,
    scale: 0.99,
  }),
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const headerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const gridCardReveal = {
  hidden: { opacity: 0, y: 52, scale: 0.96, rotateX: 12, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
  },
};

function StatItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5 lg:gap-3">
      <Icon className="mt-0.5 h-4 w-4 text-[#C25450] lg:h-[15px] lg:w-[15px]" strokeWidth={1.8} />
      <div>
        <p
          className="text-[11px] uppercase tracking-[0.18em] text-white/40 lg:text-[11px] lg:tracking-[0.2em]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          {label}
        </p>
        <p
          className="text-[14px] leading-[1.25] text-white/90 lg:mt-0.5 lg:text-[15px] lg:leading-[1.2]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function ShowcaseCard({ item }: { item: ShowcaseCar }) {
  const cardContent = (
    <article className="relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl bg-[#272727] shadow-[0_10px_40px_rgba(0,0,0,0.35)] lg:min-h-[575px] xl:min-h-[600px]">
      <div className="relative aspect-[1.46/1] overflow-hidden bg-[#151515] lg:aspect-[1.68/1]">
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out ${
            item.isPlaceholder ? 'opacity-60 saturate-[0.8]' : 'group-hover:scale-[1.07]'
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
        <div
          className="absolute bottom-4 right-4 z-10 bg-[#7A1C1C] px-4 py-2 text-[12px] font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.4)] lg:px-5 lg:py-2.5 lg:text-[14px]"
          style={{
            clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
          }}
        >
          {item.badge}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 lg:px-7 lg:pb-7 lg:pt-6">
        <div className="mb-4 lg:mb-5">
          <h3
            className="mb-1.5 text-[clamp(1.5rem,1.7vw,1.85rem)] tracking-[-0.03em] text-white lg:mb-1.5 lg:text-[1.7rem]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: 1.1 }}
          >
            {item.title}
          </h3>
          <span className="mb-2.5 block h-[2px] w-9 rounded-full bg-[#C25450]" />
          <p
            className="text-[0.95rem] leading-[1.55] text-white/60 lg:max-w-[26ch] lg:text-[14px] lg:leading-[1.5]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            {item.subtitle}
          </p>
        </div>

        <div className="mb-5 border-b border-white/10 pb-5 lg:mb-6 lg:pb-6">
          <span
            className="inline-block text-[1.65rem] tracking-[-0.04em] text-white lg:text-[1.85rem]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: 1 }}
          >
            {item.price}
          </span>
          <span className="ml-1.5 text-[0.95rem] text-white/50 lg:text-[1.05rem]">/ Dag</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4 lg:gap-x-6 lg:gap-y-5">
          <StatItem icon={MapPin} label="Locatie" value={item.city} />
          <StatItem icon={Wallet} label="Borg" value={item.deposit} />
          <StatItem icon={CarFront} label="Kenteken" value={item.plate} />
          <StatItem icon={UserRound} label="Leeftijd" value={item.age} />
        </div>

        <div className="mt-auto pt-4 lg:pt-5">
          <div
            className={`relative flex w-full items-center justify-center gap-2 overflow-hidden px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] lg:py-4 ${
              item.isPlaceholder
                ? 'border border-white/15 bg-transparent text-white/40'
                : 'bg-[#7A1C1C] text-white'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>{item.actionLabel}</span>
            {!item.isPlaceholder && <ArrowRight className="w-4" strokeWidth={2.2} />}
          </div>
        </div>
      </div>
    </article>
  );

  if (item.car) {
    return (
      <Link
        to={`/auto/${item.car.slug}`}
        className="group block h-full cursor-pointer"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="group block h-full cursor-default">
      {cardContent}
    </div>
  );
}

export function MeestGevraagdeAutos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [inView, setInView] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  const desktopVisibleCars = getVisibleCars(activeIndex, 3);
  const activeMobileCar = showcaseCars[activeIndex];

  const paginate = (nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((current) => wrapIndex(current + nextDirection, showcaseCars.length));
  };

  const jumpToIndex = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      id="aanbod"
      className="relative overflow-hidden bg-[#1E1E1E] py-16 text-white sm:py-20 lg:py-28"
      style={{ fontFamily: SECTION_FONT }}
    >
      <div className="relative mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerContainer}
          className="mb-12 text-center lg:mb-20"
        >
          <motion.h2
            variants={revealUp}
            className="text-[clamp(2rem,5vw,3.75rem)] tracking-[-0.03em] text-white"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: 1.0 }}
          >
            Trending <span className="text-[#C25450]/60">Auto&apos;s</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative hidden lg:block lg:mt-6"
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-[1560px] overflow-hidden px-2">
            <div className="grid grid-cols-3 gap-8 xl:gap-10">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                {desktopVisibleCars.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    custom={direction}
                    style={{ transformPerspective: 1200 }}
                    variants={hasRevealed ? desktopCardVariants : gridCardReveal}
                    initial={hasRevealed ? 'enter' : 'hidden'}
                    animate={hasRevealed ? 'center' : inView ? 'show' : 'hidden'}
                    exit="exit"
                    onAnimationComplete={() => {
                      if (!hasRevealed && inView && index === desktopVisibleCars.length - 1) {
                        setHasRevealed(true);
                      }
                    }}
                    transition={
                      hasRevealed
                        ? {
                            layout: { type: 'spring', stiffness: 220, damping: 28 },
                            x: { type: 'spring', stiffness: 210, damping: 28 },
                            opacity: { duration: 0.24 },
                            scale: { duration: 0.28 },
                          }
                        : { duration: 0.85, ease: EASE_OUT, delay: index * 0.15 }
                    }
                  >
                    <ShowcaseCard item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <div className="mx-auto flex max-w-[404px] justify-center">
            <div className="relative min-h-[530px] w-full">
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={activeMobileCar.id}
                  custom={direction}
                  variants={mobileCardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 210, damping: 27 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.22 },
                  }}
                  className="absolute inset-0"
                  drag="x"
                  dragDirectionLock
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={(_, info) => {
                    if (info.offset.x <= -42 || info.velocity.x <= -260) {
                      paginate(1);
                    } else if (info.offset.x >= 42 || info.velocity.x >= 260) {
                      paginate(-1);
                    }
                  }}
                  style={{ touchAction: 'pan-y' }}
                >
                  <ShowcaseCard item={activeMobileCar} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2.5 lg:mt-9"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
        >
          {showcaseCars.map((item, index) => (
            <button
              key={item.id}
              onClick={() => jumpToIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-7 bg-[#C25450]' : 'w-2.5 bg-white/25 hover:bg-white/45'
              }`}
              aria-label={`Ga naar auto ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
