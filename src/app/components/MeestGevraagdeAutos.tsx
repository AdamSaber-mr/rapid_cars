import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  CarFront,
  ChevronLeft,
  ChevronRight,
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
      <Icon className="mt-0.5 h-4 w-4 text-[#B96363] lg:h-[15px] lg:w-[15px]" strokeWidth={1.8} />
      <div>
        <p className="text-[12px] uppercase tracking-[0.18em] text-white/32 lg:text-[11px] lg:tracking-[0.22em]">
          {label}
        </p>
        <p className="text-[15px] font-semibold leading-[1.25] text-white/88 lg:mt-1 lg:text-[18px] lg:leading-[1.2]">
          {value}
        </p>
      </div>
    </div>
  );
}

function ShowcaseCard({ item }: { item: ShowcaseCar }) {
  const cardContent = (
    <article className="relative flex h-full min-h-[620px] flex-col overflow-hidden rounded-[18px] border border-white/8 bg-[#2F2B28] shadow-[0_28px_90px_rgba(0,0,0,0.4)] lg:min-h-[735px] xl:min-h-[770px]">
      <div className="relative aspect-[1.46/1] overflow-hidden bg-[#151515] lg:aspect-[1.68/1]">
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full object-cover transition-transform duration-700 ${
            item.isPlaceholder ? 'opacity-55 saturate-[0.8]' : 'group-hover:scale-[1.04]'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-black/8 to-transparent" />
        <div
          className="absolute bottom-4 right-4 z-10 bg-[#B96363] px-4 py-2 text-[12px] font-semibold text-white lg:px-5 lg:py-2.5 lg:text-[14px]"
          style={{
            clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
          }}
        >
          {item.badge}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5 lg:px-9 lg:pb-9 lg:pt-8">
        <div className="mb-6 lg:mb-6">
          <h3
            className="mb-1.5 text-[clamp(1.85rem,2vw,2.35rem)] tracking-[-0.04em] text-white lg:mb-2 lg:text-[2.15rem]"
            style={{ fontWeight: 700, lineHeight: 1.04 }}
          >
            {item.title}
          </h3>
          <p className="text-[1.02rem] leading-[1.55] text-white/68 lg:max-w-[24ch] lg:text-[15px] lg:leading-[1.45]">
            {item.subtitle}
          </p>
        </div>

        <div className="mb-6 border-b border-white/12 pb-6 lg:mb-8 lg:pb-8">
          <span
            className="text-[2rem] tracking-[-0.05em] text-white lg:text-[2.25rem]"
            style={{ fontWeight: 700, lineHeight: 1 }}
          >
            {item.price}
          </span>
          <span className="ml-1.5 text-[1.05rem] text-white/74 lg:text-[1.2rem]">/ Dag</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-5 lg:gap-x-7 lg:gap-y-7">
          <StatItem icon={MapPin} label="Locatie" value={item.city} />
          <StatItem icon={Wallet} label="Borg" value={item.deposit} />
          <StatItem icon={CarFront} label="Kenteken" value={item.plate} />
          <StatItem icon={UserRound} label="Leeftijd" value={item.age} />
        </div>

        <div className="mt-auto pt-5 lg:pt-7">
          <div
            className={`flex w-full items-center justify-center rounded-[14px] px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 lg:py-4 lg:text-[14px] ${
              item.isPlaceholder
                ? 'border border-white/10 bg-white/5 text-white/42'
                : 'bg-[#A84242] text-white group-hover:bg-[#933737]'
            }`}
          >
            {item.actionLabel}
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
      className="relative overflow-hidden bg-black py-24 text-white sm:py-30 lg:py-36"
      style={{ fontFamily: SECTION_FONT }}
    >
      <div className="relative mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center lg:mb-20"
        >
          <p
            className="mb-2 text-center text-[16px] leading-none text-white lg:mb-3 lg:text-[1.25rem]"
            style={{ fontWeight: 500 }}
          >
            Bekijk deze auto&apos;s
          </p>
          <h2
            className="text-center text-[22px] text-white sm:text-[3rem] lg:text-[4.35rem] xl:text-[4.7rem]"
            style={{ fontWeight: 800, lineHeight: 0.96, letterSpacing: '1px' }}
          >
            Trending Auto&apos;s
          </h2>
        </motion.div>

        <div className="relative hidden lg:block lg:mt-6">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-[-82px] top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-black/55 text-white/70 transition-all duration-300 hover:border-[#A84242] hover:bg-[#A84242] hover:text-white xl:left-[-102px]"
            aria-label="Vorige auto's"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-[-82px] top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-black/55 text-white/70 transition-all duration-300 hover:border-[#A84242] hover:bg-[#A84242] hover:text-white xl:right-[-102px]"
            aria-label="Volgende auto's"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
          </button>

          <div className="mx-auto max-w-[1560px] overflow-hidden px-2">
            <div className="grid grid-cols-3 gap-8 xl:gap-10">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                {desktopVisibleCars.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    custom={direction}
                    variants={desktopCardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      layout: { type: 'spring', stiffness: 220, damping: 28 },
                      x: { type: 'spring', stiffness: 210, damping: 28 },
                      opacity: { duration: 0.24 },
                      scale: { duration: 0.28 },
                    }}
                  >
                    <ShowcaseCard item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="mx-auto flex max-w-[404px] justify-center">
            <div className="relative min-h-[670px] w-full">
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
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5 lg:mt-9">
          {showcaseCars.map((item, index) => (
            <button
              key={item.id}
              onClick={() => jumpToIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-7 bg-[#B96363]' : 'w-2.5 bg-white/22 hover:bg-white/38'
              }`}
              aria-label={`Ga naar auto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
