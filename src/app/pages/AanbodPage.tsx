import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Gauge, Zap, Timer } from 'lucide-react';
import { cars } from '../components/carData';
import type { Car } from '../components/carData';
import { BeschikbaarheidModal } from '../components/BeschikbaarheidModal';

export function AanbodPage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Header */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[12px] tracking-[0.2em] uppercase text-[#7A1C1C] mb-5"
              style={{ fontWeight: 600 }}
            >
              Ons Aanbod
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.25rem,5vw,4rem)] text-[#0A0A0A] tracking-[-0.03em] mb-5"
              style={{ fontWeight: 600, lineHeight: 1.1 }}
            >
              Kies jouw auto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#4A4A4A] max-w-[480px]"
              style={{ fontWeight: 400, fontSize: '16px', lineHeight: 1.7 }}
            >
              Sportieve auto's, klaar om te rijden. Vraag direct beschikbaarheid aan via WhatsApp of het formulier.
            </motion.p>
          </div>
        </section>

        {/* Car Grid */}
        <section className="pb-24 lg:pb-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  {/* Image */}
                  <Link to={`/auto/${car.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-[#F5F5F5] mb-5">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Category Tag */}
                    <div
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] tracking-[0.1em] uppercase text-[#0A0A0A]"
                      style={{ fontWeight: 500 }}
                    >
                      {car.category}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="mb-4">
                    <Link to={`/auto/${car.slug}`}>
                      <h3
                        className="text-[#0A0A0A] mb-1 hover:text-[#7A1C1C] transition-colors duration-300"
                        style={{ fontWeight: 600, fontSize: '20px', letterSpacing: '-0.01em' }}
                      >
                        {car.name}
                      </h3>
                    </Link>
                    <p
                      className="text-[#4A4A4A] mb-4"
                      style={{ fontWeight: 400, fontSize: '14px' }}
                    >
                      {car.tagline}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-[#9A9A9A]" strokeWidth={1.5} />
                        <span
                          className="text-[#4A4A4A]"
                          style={{ fontWeight: 400, fontSize: '13px' }}
                        >
                          {car.power}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#9A9A9A]" strokeWidth={1.5} />
                        <span
                          className="text-[#4A4A4A]"
                          style={{ fontWeight: 400, fontSize: '13px' }}
                        >
                          {car.drivetrain}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Timer className="w-3.5 h-3.5 text-[#9A9A9A]" strokeWidth={1.5} />
                        <span
                          className="text-[#4A4A4A]"
                          style={{ fontWeight: 400, fontSize: '13px' }}
                        >
                          {car.acceleration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(car)}
                    className="flex items-center justify-between w-full bg-[#0A0A0A] text-white px-5 py-3.5 hover:bg-[#7A1C1C] transition-colors duration-300"
                    style={{ fontWeight: 500, fontSize: '13px', letterSpacing: '0.03em' }}
                  >
                    <span className="uppercase">Vraag beschikbaarheid</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#FAFAFA] border-t border-[#EBEBEB]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p
                  className="text-[#0A0A0A] mb-1"
                  style={{ fontWeight: 600, fontSize: '18px', letterSpacing: '-0.01em' }}
                >
                  Niet gevonden wat je zoekt?
                </p>
                <p
                  className="text-[#4A4A4A]"
                  style={{ fontWeight: 400, fontSize: '14px' }}
                >
                  Neem contact met ons op — we denken graag mee.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#0A0A0A] text-[#0A0A0A] px-8 py-3.5 uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300"
                style={{ fontWeight: 500, fontSize: '13px', letterSpacing: '0.04em' }}
              >
                Contact opnemen
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <BeschikbaarheidModal
        car={selectedCar}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}