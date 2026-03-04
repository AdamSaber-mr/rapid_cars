import { motion } from 'motion/react';
import { Clock, Zap, Shield, Phone } from 'lucide-react';

const usps = [
  {
    icon: Clock,
    title: '24/7 bereikbaar',
    description: 'Altijd direct contact',
  },
  {
    icon: Zap,
    title: '<24u levering',
    description: 'Morgen al rijden',
  },
  {
    icon: Shield,
    title: '100% verzekerd',
    description: 'Volledig gedekt',
  },
  {
    icon: Phone,
    title: 'Direct persoonlijk contact',
    description: 'Geen chatbots',
  },
];

const stats = [
  { value: '24/7', label: 'Bereikbaar' },
  { value: '<24u', label: 'Levering' },
  { value: '100%', label: 'Verzekerd' },
  { value: '25+', label: "Auto's" },
];

export function WhyRapidCars() {
  return (
    <section id="waarom" className="bg-white">
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1748343438203-cf652d0e3f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdWRpJTIwUlMlMjBiYWRnZSUyMGRldGFpbCUyMGNsb3NldXAlMjBjYXJib258ZW58MXx8fHwxNzcxNTc5ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Audi RS detail"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(2rem,4.5vw,3.25rem)] text-[#0A0A0A] tracking-[-0.025em] mb-7"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, lineHeight: 1.1 }}
            >
              Niet zomaar een
              <br />
              verhuurder.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#4A4A4A] mb-12 max-w-[480px]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.7 }}
            >
              RapidCars staat voor snelheid, flexibiliteit en betrouwbaarheid zonder
              gedoe. We begrijpen dat je niet wilt wachten. Daarom zorgen we dat je
              binnen 24 uur achter het stuur zit van een sportieve auto die bij jou past.
            </motion.p>

            {/* USPs */}
            <div className="space-y-6">
              {usps.map((usp, index) => {
                const Icon = usp.icon;
                return (
                  <motion.div
                    key={usp.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#D4D4D4] flex items-center justify-center">
                      <Icon className="w-[18px] h-[18px] text-[#0A0A0A]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span
                        className="text-[#0A0A0A] block"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '15px', lineHeight: 1.3 }}
                      >
                        {usp.title}
                      </span>
                      <span
                        className="text-[#4A4A4A]"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: 1.4 }}
                      >
                        {usp.description}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip — visually separated */}
      <div className="border-t border-[#EBEBEB]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`text-center ${
                  index > 0 ? 'lg:border-l lg:border-[#EBEBEB]' : ''
                }`}
              >
                <div
                  className="text-[clamp(2.25rem,5vw,3.5rem)] text-[#0A0A0A] mb-1.5"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, letterSpacing: '-0.03em' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[12px] text-[#4A4A4A] tracking-[0.15em] uppercase"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
