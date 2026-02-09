import { motion } from 'motion/react';
import { Search, Calendar, Key, Star } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Kies je Auto',
      description: 'Blader door onze exclusieve collectie en vind de perfecte auto voor jouw gelegenheid.',
      number: '01',
    },
    {
      icon: Calendar,
      title: 'Selecteer je Periode',
      description: 'Kies de datum en tijdstip voor ophalen en terugbrengen. Flexibel en eenvoudig.',
      number: '02',
    },
    {
      icon: Key,
      title: 'Bevestig & Ontvang',
      description: 'Doe je aanvraag, wij regelen de rest. Ontvang je droomauto op de afgesproken tijd.',
      number: '03',
    },
    {
      icon: Star,
      title: 'Geniet van je Rit',
      description: 'Ervaar luxe en comfort. Rijd met vertrouwen en stijl, waar je ook heen gaat.',
      number: '04',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="relative"
        >
          {/* Connection line (hidden on mobile and last item) */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-[hsl(var(--color-gold))]/50 to-transparent" />
          )}

          <div className="bg-[hsl(var(--color-dark-lighter))] p-8 rounded-2xl border border-white/10 hover:border-[hsl(var(--color-gold))]/30 transition-all relative z-10">
            {/* Step Number */}
            <div className="absolute top-4 right-4 md:-top-4 md:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 rounded-full flex items-center justify-center font-bold text-black text-sm sm:text-base">
              {step.number}
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[hsl(var(--color-gold))]/20 to-yellow-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6"
            >
              <step.icon className="w-8 h-8 text-[hsl(var(--color-gold))]" />
            </motion.div>

            <h3 className="mb-3">{step.title}</h3>
            <p className="text-[hsl(var(--color-text-secondary))]">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}