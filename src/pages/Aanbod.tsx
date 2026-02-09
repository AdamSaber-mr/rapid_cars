import { CarCard } from '../components/CarCard';
import { cars } from '../data/cars';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Aanbod() {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(cars.map(car => car.category)))];

  const filteredCars = filter === 'all' 
    ? cars 
    : cars.filter(car => car.category === filter);

  return (
    <div className="pt-32 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Ons Aanbod</h1>
          <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--color-text-secondary))] max-w-3xl mx-auto px-4">
            <span className="hidden sm:inline">Ontdek onze complete collectie premium voertuigen. Van elektrische innovatie tot klassieke sportwagens - voor elk moment de perfecte auto.</span>
            <span className="sm:hidden">Ontdek onze premium collectie.</span>
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 rounded-lg transition-all text-sm sm:text-base font-medium ${
                filter === category
                  ? 'bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black shadow-lg'
                  : 'bg-[hsl(var(--color-dark-lighter))] text-[hsl(var(--color-text-secondary))] hover:bg-[hsl(var(--color-dark-lighter))]/60 border border-white/10 active:scale-95'
              }`}
            >
              {category === 'all' ? 'Alle Auto\'s' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Cars Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CarCard
                  name={car.name}
                  category={car.category}
                  description={car.description}
                  image={car.image}
                  featured={car.featured}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-[hsl(var(--color-text-secondary))]">
              Geen auto's gevonden in deze categorie.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-[hsl(var(--color-dark-lighter))] rounded-2xl p-12 border border-white/10 text-center"
        >
          <h3 className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl">Niet gevonden wat je zoekt?</h3>
          <p className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] mb-6 max-w-2xl mx-auto px-4">
            <span className="hidden sm:inline">Ons aanbod is groter dan wat je hier ziet. Neem contact met ons op en wij helpen je de perfecte auto te vinden.</span>
            <span className="sm:hidden">Neem contact op voor meer opties.</span>
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg hover:shadow-xl hover:shadow-[hsl(var(--color-gold))]/30 transition-all"
            >
              Neem Contact Op
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}