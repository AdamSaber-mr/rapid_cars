import { Fragment } from 'react';
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

// Reveal everything in source order — cards and the connectors between them —
// so the whole process builds up from left to right (top to bottom on mobile).
const stepsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};

const stepCard = {
  hidden: { opacity: 0, x: -26 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const connectorWrap = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const connectorLine = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

// Clean wavy line that bridges two steps edge to edge — horizontal between
// columns on desktop, vertical between stacked cards on mobile.
function StepConnector() {
  return (
    <>
      {/* Desktop: horizontal wave spanning the full gap */}
      <svg
        viewBox="0 0 80 32"
        fill="none"
        preserveAspectRatio="none"
        className="hidden h-8 w-full text-[#7A1C1C] sm:block"
        aria-hidden
      >
        <motion.path
          d="M0 16 C 13 4 27 28 40 16 S 67 4 80 16"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          variants={connectorLine}
        />
      </svg>

      {/* Mobile: vertical wave bridging the stacked cards */}
      <svg
        viewBox="0 0 24 48"
        fill="none"
        preserveAspectRatio="none"
        className="block h-16 w-6 text-[#7A1C1C] sm:hidden"
        aria-hidden
      >
        <motion.path
          d="M12 0 C 4 12 20 20 12 28 S 4 40 12 48"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          variants={connectorLine}
        />
      </svg>
    </>
  );
}

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

        {/* Steps - clean cards linked by a flowing arrow */}
        <motion.div
          variants={stepsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-stretch"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Fragment key={step.number}>
                <motion.div
                  variants={stepCard}
                  className="flex flex-1 flex-col rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] lg:p-8"
                >
                  {/* Step number */}
                  <div className="mb-4 sm:mb-5">
                    <span
                      className="inline-block border border-[#D4D4D4] px-3.5 py-2 text-[#0A0A0A]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.01em' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5">
                    <Icon className="h-6 w-6 text-[#9A9A9A]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-3 uppercase text-[#0A0A0A]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.01em', lineHeight: 1.3 }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-6 flex-1 text-[#4A4A4A]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.7 }}
                  >
                    {step.description}
                  </p>

                  {/* Tag */}
                  <div className="mt-auto">
                    <span
                      className="inline-block border border-[#D4D4D4] px-3.5 py-1.5 uppercase text-[#4A4A4A]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '12px', letterSpacing: '0.06em' }}
                    >
                      {step.tag}
                    </span>
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    variants={connectorWrap}
                    className="flex shrink-0 items-center justify-center sm:w-24 lg:w-36"
                    aria-hidden
                  >
                    <StepConnector />
                  </motion.div>
                )}
              </Fragment>
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
