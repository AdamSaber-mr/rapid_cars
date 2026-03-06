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

        {/* Number Row - hidden on mobile, visible on sm+ */}
        <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-10 lg:mb-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.number + '-box'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border border-[#D4D4D4] px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-start"
            >
              <span
                className="text-[#0A0A0A]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.01em' }}
              >
                {step.number}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Steps Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex flex-col rounded-2xl sm:rounded-none border border-[#EAEAEA] sm:border-0 p-5 sm:p-0 bg-white sm:bg-transparent"
              >
                {/* Step number - visible on mobile only */}
                <div className="sm:hidden mb-4">
                  <div className="border border-[#D4D4D4] px-4 py-3 inline-block">
                    <span
                      className="text-[#0A0A0A]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.01em' }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-5">
                  <Icon className="w-5 h-5 text-[#9A9A9A]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-[#0A0A0A] mb-3 uppercase"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.01em' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#4A4A4A] mb-6 flex-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: 1.65 }}
                >
                  {step.description}
                </p>

                {/* Tag */}
                <div className="mt-auto">
                  <span
                    className="inline-block border border-[#D4D4D4] px-3.5 py-1.5 text-[#4A4A4A] uppercase"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '0.06em' }}
                  >
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
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
