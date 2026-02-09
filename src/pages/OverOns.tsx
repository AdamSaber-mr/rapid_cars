import { motion } from 'motion/react';
import { Award, Users, Car, Heart } from 'lucide-react';

export function OverOns() {
  const stats = [
    { number: '500+', label: 'Tevreden Klanten' },
    { number: '50+', label: 'Premium Auto\'s' },
    { number: '5+', label: 'Jaren Ervaring' },
    { number: '100%', label: 'Klanttevredenheid' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'Wij selecteren alleen de beste voertuigen voor onze klanten.',
    },
    {
      icon: Users,
      title: 'Persoonlijke Service',
      description: 'Elk contact is uniek. Wij luisteren naar jouw wensen.',
    },
    {
      icon: Car,
      title: 'Exclusiviteit',
      description: 'Toegang tot premium auto\'s die je nergens anders vindt.',
    },
    {
      icon: Heart,
      title: 'Passie',
      description: 'Auto\'s zijn onze passie. Die delen we graag met jou.',
    },
  ];

  return (
    <div className="pt-32 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Over RapidCars</h1>
            <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--color-text-secondary))] max-w-3xl mx-auto px-4">
              <span className="hidden sm:inline">Jouw toegang tot de meest exclusieve en luxe auto's. Wij maken dromen werkelijkheid, één rit per keer.</span>
              <span className="sm:hidden">Toegang tot exclusieve luxe auto's.</span>
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center bg-[hsl(var(--color-dark-lighter))] p-4 sm:p-6 rounded-xl border border-white/10"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-[hsl(var(--color-text-secondary))]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-[hsl(var(--color-dark-lighter))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Ons Verhaal</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[hsl(var(--color-text-secondary))]">
                <p className="hidden sm:block">
                  RapidCars begon met een simpele gedachte: iedereen verdient de kans om 
                  in een droomauto te rijden. Wat startte als een passieproject is uitgegroeid 
                  tot een premium autoverhuurbedrijf dat bekend staat om kwaliteit en service.
                </p>
                <p className="hidden sm:block">
                  Wij geloven dat een auto meer is dan transport - het is een ervaring, 
                  een statement, een moment om te onthouden. Daarom selecteren wij alleen 
                  de meest bijzondere voertuigen en zorgen we voor een service die net zo 
                  premium is als onze auto's.
                </p>
                <p className="sm:hidden">
                  RapidCars maakt droomauto's toegankelijk. Van passieproject naar premium autoverhuurbedrijf. 
                  Wij geloven dat een auto meer is dan transport - het is een ervaring. 
                  Daarom selecteren wij alleen de meest bijzondere voertuigen.
                </p>
                <p>
                  Of je nu een speciale gelegenheid viert, indruk wilt maken bij een 
                  zakelijke afspraak, of gewoon wilt genieten van pure rijplezier - 
                  wij hebben de perfecte auto voor jou.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Luxury cars collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--color-dark))]/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Onze Waarden</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[hsl(var(--color-text-secondary))] max-w-3xl mx-auto px-4">
              <span className="hidden sm:inline">Dit is waar we voor staan en wat ons onderscheidt.</span>
              <span className="sm:hidden">Wat ons onderscheidt.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[hsl(var(--color-dark-lighter))] p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-[hsl(var(--color-gold))]/30 transition-all"
              >
                <div className="bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                </div>
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">{value.title}</h3>
                <p className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[hsl(var(--color-dark-lighter))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Ons Team</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[hsl(var(--color-text-secondary))] max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              <span className="hidden sm:inline">Een gepassioneerd team van auto-liefhebbers die er alles aan doen om jouw ervaring onvergetelijk te maken.</span>
              <span className="sm:hidden">Gepassioneerde auto-liefhebbers voor jouw ervaring.</span>
            </p>
            <div className="bg-[hsl(var(--color-dark))] p-8 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl border border-white/10">
              <p className="text-xl sm:text-2xl md:text-3xl text-[hsl(var(--color-gold))] mb-3 sm:mb-4">
                "Wij maken van elke rit een luxe ervaring"
              </p>
              <p className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))]">
                - Het RapidCars Team
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}