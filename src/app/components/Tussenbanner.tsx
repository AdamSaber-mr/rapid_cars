import { motion } from 'motion/react';
import { Link } from 'react-router';

export function Tussenbanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[600px]">
        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1690483707837-7c478da34968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByb2FkJTIwZHV0Y2glMjBoaWdod2F5JTIwZXZlbmluZ3xlbnwxfHx8fDE3NzE1NzgzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sportwagen op de weg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Side */}
        <div className="flex items-center px-6 lg:px-20 py-14 sm:py-16 lg:py-32">
          <div className="max-w-[480px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[12px] tracking-[0.2em] uppercase text-[#7A1C1C] mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              De Ervaring
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] text-white tracking-[-0.025em] mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: 1.15 }}
            >
              Klaar voor een onvergetelijke rit?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-base sm:text-lg mb-10 sm:mb-12"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.7 }}
            >
              Kies jouw sportieve auto vandaag en ervaar waar RapidCars voor staat.
              Geen compromissen, alleen prestaties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/aanbod"
                className="inline-flex items-center gap-3 bg-[#7A1C1C] text-white px-10 py-4 text-[14px] tracking-[0.04em] uppercase hover:bg-[#651717] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Bekijk Aanbod
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
