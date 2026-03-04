import { motion } from 'motion/react';
import { Link } from 'react-router';

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[12px] tracking-[0.2em] uppercase text-[#7A1C1C] mb-6"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Aan De Slag
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.25rem,5vw,4rem)] text-[#0A0A0A] tracking-[-0.03em] mb-8"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: 1.1 }}
          >
            Klaar om te rijden?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A4A4A] text-lg mb-14 max-w-[480px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.7 }}
          >
            Bekijk ons aanbod, kies jouw auto en rijd morgen al weg. Het is zo simpel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/aanbod"
              className="inline-flex items-center justify-center bg-[#7A1C1C] text-white px-12 py-4 text-[14px] tracking-[0.04em] uppercase hover:bg-[#651717] transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Bekijk Aanbod
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-[#0A0A0A] text-[#0A0A0A] px-12 py-4 text-[14px] tracking-[0.04em] uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Neem Contact Op
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}