import { Hero } from '../components/Hero';
import { CarCard } from '../components/CarCard';
import { HowItWorks } from '../components/HowItWorks';
import { BannerSection } from '../components/BannerSection';
import { SectionDivider } from '../components/SectionDivider';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router';
import { cars } from '../data/cars';
import { motion } from 'motion/react';

export function Home() {
  const featuredCars = cars.filter(car => car.featured).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div>
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1710823367826-02e38b3c9f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBibGFja3xlbnwxfHx8fDE3NzA1NjI3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
        videoUrl="https://player.vimeo.com/external/422718819.hd.mp4?s=19bce9df6c534e5b5de143c0fb1b7a20698a6d0e&profile_id=175"
      />

      {/* Duidelijke overgang met intro animatie */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative -mt-16 sm:-mt-20 mb-12 sm:mb-16 md:mb-20 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Decoratieve lijn met icoon */}
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[hsl(var(--color-gold))]/50" />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 flex items-center justify-center shadow-lg shadow-[hsl(var(--color-gold))]/30"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black rotate-90" />
              </motion.div>
              <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[hsl(var(--color-gold))]/50" />
            </div>
            
            {/* Welkom tekst */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base text-[hsl(var(--color-gold))] font-medium tracking-wide uppercase"
            >
              Welkom bij RapidCars
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* 1. About Section - Waarom Kiezen voor RapidCars? */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 sm:mb-6 text-lg sm:text-3xl md:text-4xl">Waarom Kiezen voor RapidCars?</h2>
            <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--color-text-secondary))] max-w-3xl mx-auto px-4">
              <span className="hidden sm:inline">Bij RapidCars draait alles om kwaliteit, exclusiviteit en een onvergetelijke ervaring. Wij bieden de mooiste auto's voor elke gelegenheid.</span>
              <span className="sm:hidden">Premium auto's voor elke gelegenheid.</span>
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[hsl(var(--color-dark-lighter))] p-8 rounded-2xl border border-white/10 hover:border-[hsl(var(--color-gold))]/30 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              >
                <Shield className="w-7 h-7 text-black" />
              </motion.div>
              <h3 className="mb-4">Premium Kwaliteit</h3>
              <p className="text-[hsl(var(--color-text-secondary))]">
                Alle auto's in onze vloot zijn zorgvuldig geselecteerd en perfect onderhouden 
                voor de beste rijervaring.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[hsl(var(--color-dark-lighter))] p-8 rounded-2xl border border-white/10 hover:border-[hsl(var(--color-gold))]/30 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              >
                <Clock className="w-7 h-7 text-black" />
              </motion.div>
              <h3 className="mb-4">Snel & Flexibel</h3>
              <p className="text-[hsl(var(--color-text-secondary))]">
                Last-minute reservering? Geen probleem. Wij zorgen ervoor dat jouw droomauto 
                snel beschikbaar is.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[hsl(var(--color-dark-lighter))] p-8 rounded-2xl border border-white/10 hover:border-[hsl(var(--color-gold))]/30 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              >
                <Star className="w-7 h-7 text-black" />
              </motion.div>
              <h3 className="mb-4">Exclusieve Service</h3>
              <p className="text-[hsl(var(--color-text-secondary))]">
                Persoonlijke begeleiding en maatwerk. Niet de auto die je zoekt? 
                Wij regelen het voor je.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="default" />

      {/* 2. How It Works - Hoe Werkt Het? */}
      <section className="py-12 sm:py-16 md:py-20 bg-[hsl(var(--color-dark-lighter))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-3xl md:text-4xl">Hoe Werkt Het?</h2>
            <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--color-text-secondary))] max-w-3xl mx-auto px-4">
              <span className="hidden sm:inline">In vier eenvoudige stappen rijd je met jouw droomauto. Wij maken het proces zo soepel mogelijk.</span>
              <span className="sm:hidden">In vier stappen rijd je met jouw droomauto.</span>
            </p>
          </motion.div>

          <HowItWorks />
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* 3. Banner Section */}
      <BannerSection />

      <SectionDivider variant="fade" />

      {/* 4. Featured Cars - Uitgelichte Auto's */}
      <section className="py-12 sm:py-16 md:py-20 bg-[hsl(var(--color-dark-lighter))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="mb-3 sm:mb-4 text-xl sm:text-3xl md:text-4xl">Uitgelichte Auto's</h2>
              <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--color-text-secondary))]">
                <span className="hidden sm:inline">Ontdek een selectie uit onze premium collectie</span>
                <span className="sm:hidden">Onze premium collectie</span>
              </p>
            </div>
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/aanbod"
                className="hidden md:inline-flex items-center gap-2 text-[hsl(var(--color-gold))] hover:gap-3 transition-all group"
              >
                Bekijk alle auto's
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center md:hidden"
          >
            <Link
              to="/aanbod"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg hover:shadow-xl hover:shadow-[hsl(var(--color-gold))]/30 transition-all"
            >
              Bekijk alle auto's
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="default" />

      {/* 5. CTA Section - Kan je jouw droomauto niet vinden? */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[hsl(var(--color-dark-lighter))] to-[hsl(var(--color-dark))] rounded-3xl p-12 md:p-16 border border-[hsl(var(--color-gold))]/20 relative overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--color-gold))]/5 rounded-full blur-3xl"
            />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="mb-4 sm:mb-6 text-lg sm:text-3xl md:text-4xl">Kan je jouw droomauto niet vinden?</h2>
              <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--color-text-secondary))] mb-6 sm:mb-8 px-4">
                <span className="hidden sm:inline">Geen zorgen! Wij hebben een uitgebreid netwerk en kunnen bijna elke auto regelen. Doe een aanvraag en wij nemen snel contact met je op.</span>
                <span className="sm:hidden">Wij regelen bijna elke auto voor je. Doe een aanvraag!</span>
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg hover:shadow-xl hover:shadow-[hsl(var(--color-gold))]/30 transition-all group"
                >
                  Doe een Aanvraag
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}