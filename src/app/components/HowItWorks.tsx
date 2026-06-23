import { motion } from 'motion/react';
import { Search, CalendarDays, Car } from 'lucide-react';
import { Link } from 'react-router';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Kies Jouw Auto',
    description:
      'Blader door onze vloot van performance-auto\'s. Filter op vermogen, type of beschikbaarheid.',
    tag: 'Online \u00B7 App \u00B7 Telefoon',
  },
  {
    number: '02',
    icon: CalendarDays,
    title: 'Plan De Periode',
    description:
      'Bepaal de duur en gewenste ophaallocatie. E\u00E9n dag, een weekend of langer \u2014 jouw keuze.',
    tag: '1 dag tot meerdere weken',
  },
  {
    number: '03',
    icon: Car,
    title: 'Rijd Weg',
    description:
      'De auto staat klaar of wordt gebracht. Sleutels, verzekering, volledige tank \u2014 alles geregeld.',
    tag: 'Levering in <2 uur',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const stepsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.05 },
  },
};

const stepCard = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="bg-[#FAFAFA] scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 sm:py-20 lg:py-32">
        {/* Section Header */}
        <div className="mb-12 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[12px] tracking-[0.2em] uppercase text-[#7A1C1C] mb-5"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Werkwijze
          </motion.p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <h2
                className="text-[clamp(2.5rem,6vw,4.5rem)] text-[#0A0A0A] tracking-[-0.03em]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, lineHeight: 1.0 }}
              >
                In 3 stappen
              </h2>
              <h2
                className="text-[clamp(2.5rem,6vw,4.5rem)] text-[#7A1C1C]/30 tracking-[-0.03em]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, lineHeight: 1.0 }}
              >
                onderweg.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#4A4A4A] max-w-[380px] lg:pb-2"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.7 }}
            >
              Wij hebben het verhuurproces teruggebracht tot wat het moet zijn: snel, helder en zonder rompslomp.
            </motion.p>
          </div>
        </div>

        {/* Steps - animated cards */}
        <motion.div
          variants={stepsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={stepCard}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex flex-col overflow-hidden bg-white border border-[#EAEAEA] p-7 lg:p-9"
              >
                {/* Oversized ghost number */}
                <span
                  className="pointer-events-none absolute -top-4 right-1 select-none leading-none text-[#7A1C1C]/[0.07] transition-colors duration-500 group-hover:text-[#7A1C1C]/[0.12]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(5.5rem,8vw,8.5rem)', letterSpacing: '-0.04em' }}
                >
                  {step.number}
                </span>

                {/* Icon badge */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#DCC9C9] bg-[#FAF3F3] text-[#7A1C1C] transition-all duration-300 group-hover:scale-105 group-hover:border-[#7A1C1C] group-hover:bg-[#7A1C1C] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>

                {/* Step label */}
                <span
                  className="relative mb-2.5 text-[12px] uppercase tracking-[0.18em] text-[#7A1C1C]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                >
                  Stap {step.number}
                </span>

                {/* Title */}
                <h3
                  className="relative mb-3.5 uppercase text-[#0A0A0A]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '20px', letterSpacing: '0.005em', lineHeight: 1.25 }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="relative mb-8 flex-1 text-[#3A3A3A]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.7 }}
                >
                  {step.description}
                </p>

                {/* Tag */}
                <div className="relative mt-auto">
                  <span
                    className="inline-block border border-[#D4D4D4] px-4 py-2 uppercase text-[#4A4A4A] transition-colors duration-300 group-hover:border-[#7A1C1C] group-hover:text-[#7A1C1C]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', letterSpacing: '0.06em' }}
                  >
                    {step.tag}
                  </span>
                </div>

                {/* Accent line grows on hover */}
                <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#7A1C1C] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="border-t border-[#E0E0E0]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-10 lg:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p
                className="text-[#0A0A0A] mb-1 uppercase"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}
              >
                Vragen over het proces?
              </p>
              <p
                className="text-[#4A4A4A]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px' }}
              >
                Onze experts staan 24/7 voor je klaar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center border border-[#0A0A0A] text-[#0A0A0A] px-8 py-3.5 uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', letterSpacing: '0.08em' }}
              >
                Contact Opnemen
              </Link>
              <Link
                to="/aanbod"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#7A1C1C] text-white px-8 py-3.5 uppercase hover:bg-[#651717] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', letterSpacing: '0.08em' }}
              >
                Direct Reserveren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
