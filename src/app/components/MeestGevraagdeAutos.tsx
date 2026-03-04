import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { cars } from './carData';

export function MeestGevraagdeAutos() {
  return (
    <section id="aanbod" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p
              className="text-[12px] tracking-[0.2em] uppercase text-[#7A1C1C] mb-5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Ons Aanbod
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] text-[#0A0A0A] tracking-[-0.025em]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: 1.1 }}
            >
              Onze auto's
            </h2>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <Link to={`/auto/${car.slug}`} className="block relative aspect-[4/3] overflow-hidden mb-5 bg-[#F5F5F5]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category Tag */}
                <div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] tracking-[0.1em] uppercase text-[#0A0A0A]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {car.category}
                </div>
              </Link>

              {/* Content */}
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-[#0A0A0A] mb-1"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '18px' }}
                  >
                    {car.name}
                  </h3>
                  <p
                    className="text-[#4A4A4A]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px' }}
                  >
                    {car.tagline}
                  </p>
                </div>
                <Link
                  to={`/auto/${car.slug}`}
                  className="mt-1 w-8 h-8 flex items-center justify-center border border-[#E0E0E0] group-hover:border-[#7A1C1C] group-hover:bg-[#7A1C1C] transition-all duration-300"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#4A4A4A] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bekijk Aanbod Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <Link
            to="/aanbod"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-10 py-4 text-[14px] tracking-[0.04em] uppercase hover:bg-[#7A1C1C] transition-colors duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Bekijk Volledig Aanbod
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}