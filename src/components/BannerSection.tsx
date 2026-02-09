import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function BannerSection() {
  return (
    <section className="py-20 bg-[hsl(var(--color-dark-lighter))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1770064747916-1efbb1973ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Luxury car interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          </div>

          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(var(--color-gold))]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-[hsl(var(--color-gold))]/20 rounded-full blur-3xl"
          />

          {/* Content */}
          <div className="relative z-10 py-12 sm:py-20 md:py-32 px-6 sm:px-8 md:px-16">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 mb-3 sm:mb-6"
              >
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[hsl(var(--color-gold))]" />
                <span className="text-[hsl(var(--color-gold))] uppercase tracking-wider text-xs sm:text-sm font-semibold">
                  Exclusief Aanbod
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-3 sm:mb-6 text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
              >
                Klaar om Luxe te{' '}
                <span className="bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 bg-clip-text text-transparent">
                  Ervaren?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-lg md:text-xl text-gray-300 mb-5 sm:mb-8 leading-relaxed"
              >
                <span className="hidden sm:inline">Van sportieve performance tot ultieme comfort - onze collectie premium voertuigen staat voor je klaar. Reserveer vandaag nog en ervaar het verschil.</span>
                <span className="sm:hidden">Onze collectie premium voertuigen staat voor je klaar. Reserveer vandaag nog!</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    to="/aanbod"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg hover:shadow-xl hover:shadow-[hsl(var(--color-gold))]/30 transition-all group w-full text-sm sm:text-base font-medium"
                  >
                    Ontdek het Aanbod
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg hover:bg-white/20 transition-all w-full text-sm sm:text-base font-medium"
                  >
                    Plan een Bezichtiging
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-3 sm:gap-8 mt-6 sm:mt-12 pt-5 sm:pt-8 border-t border-white/20"
              >
                <div>
                  <div className="text-xl sm:text-3xl font-bold text-[hsl(var(--color-gold))] mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Premium Auto's</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-bold text-[hsl(var(--color-gold))] mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Beschikbaar</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-bold text-[hsl(var(--color-gold))] mb-1">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Tevredenheid</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}