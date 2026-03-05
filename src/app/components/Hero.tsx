import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1672024110512-f7028b49db28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzcxNTc4MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sportwagen op donkere achtergrond"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16">
          <div className="max-w-[800px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-[13px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Premium Autoverhuur - Nederland
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[clamp(2.5rem,7vw,5.5rem)] text-white tracking-[-0.03em] mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: 1.05 }}
            >
              Direct geregeld.
              <br />
              Morgen rijden.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/70 text-base md:text-xl max-w-[480px] mb-10 md:mb-12"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.6 }}
            >
              Sportieve auto's, flexibel en zonder gedoe. Huur vandaag, rijd morgen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/aanbod"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#7A1C1C] text-white px-10 py-4 text-[14px] tracking-[0.04em] uppercase hover:bg-[#651717] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Bekijk Aanbod
              </Link>
              <a
                href="#hoe-het-werkt"
                className="inline-flex w-full sm:w-auto items-center justify-center border border-white/30 text-white px-10 py-4 text-[14px] tracking-[0.04em] uppercase hover:bg-white/10 transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Hoe Het Werkt
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
