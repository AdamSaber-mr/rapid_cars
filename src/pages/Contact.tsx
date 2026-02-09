import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    startDate: '',
    endDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission with animation
    setTimeout(() => {
      alert('Bedankt voor je aanvraag! We nemen zo snel mogelijk contact met je op.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        car: '',
        startDate: '',
        endDate: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactCards = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Snel antwoord nodig? Chat met ons via WhatsApp.',
      link: 'https://wa.me/31612345678',
      linkText: 'Start Chat',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Stuur ons een email voor vragen of reserveringen.',
      link: 'mailto:info@rapidcars.nl',
      linkText: 'info@rapidcars.nl',
    },
    {
      icon: Phone,
      title: 'Telefoon',
      description: 'Bel ons voor directe assistentie.',
      link: 'tel:+31612345678',
      linkText: '+31 6 12 34 56 78',
    },
  ];

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
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Neem Contact Op</h1>
          <p className="text-sm sm:text-lg md:text-xl text-[hsl(var(--color-text-secondary))] max-w-3xl mx-auto px-4">
            <span className="hidden sm:inline">Klaar om je droomauto te huren? Vul het formulier in en wij nemen zo snel mogelijk contact met je op.</span>
            <span className="sm:hidden">Vul het formulier in en we nemen contact op.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : undefined}
                rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="block bg-[hsl(var(--color-dark-lighter))] p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:border-[hsl(var(--color-gold))]/30 transition-all active:scale-95 sm:active:scale-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-lg sm:text-xl">{card.title}</h3>
                    <p className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] mb-3">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm sm:text-base text-[hsl(var(--color-gold))] font-medium">
                      {card.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-[hsl(var(--color-dark-lighter))] p-8 rounded-2xl border border-white/10">
              <h3 className="mb-6 text-base sm:text-lg md:text-xl">Aanvraagformulier</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="name" className="block text-sm mb-2 text-[hsl(var(--color-text-secondary))]">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[hsl(var(--color-dark))] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[hsl(var(--color-gold))] transition-colors"
                    placeholder="Jouw naam"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="email" className="block text-sm mb-2 text-[hsl(var(--color-text-secondary))]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[hsl(var(--color-dark))] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[hsl(var(--color-gold))] transition-colors"
                    placeholder="jouw@email.nl"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }} className="mb-6">
                <label htmlFor="phone" className="block text-sm mb-2 text-[hsl(var(--color-text-secondary))]">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[hsl(var(--color-dark))] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[hsl(var(--color-gold))] transition-colors"
                  placeholder="+31 6 12 34 56 78"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="mb-6">
                <label htmlFor="car" className="block text-sm mb-2 text-[hsl(var(--color-text-secondary))]">
                  Gewenste Auto
                </label>
                <input
                  type="text"
                  id="car"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[hsl(var(--color-dark))] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[hsl(var(--color-gold))] transition-colors"
                  placeholder="Bijvoorbeeld: Porsche 911 of vergelijkbaar"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="startDate" className="block text-sm mb-2 text-[hsl(var(--color-text-secondary))]">
                    Startdatum
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[hsl(var(--color-dark))] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[hsl(var(--color-gold))] transition-colors"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="endDate" className="block text-sm mb-2 text-[hsl(var(--color-text-secondary))]">
                    Einddatum
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[hsl(var(--color-dark))] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[hsl(var(--color-gold))] transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }} className="mb-6">
                <label htmlFor="message" className="block text-sm mb-2 text-[hsl(var(--color-text-secondary))]">
                  Extra Wensen of Opmerkingen
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[hsl(var(--color-dark))] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[hsl(var(--color-gold))] transition-colors resize-none"
                  placeholder="Vertel ons meer over je wensen..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg hover:shadow-xl hover:shadow-[hsl(var(--color-gold))]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-black border-t-transparent rounded-full mx-auto"
                  />
                ) : (
                  'Verstuur Aanvraag'
                )}
              </motion.button>

              <p className="text-sm text-[hsl(var(--color-text-secondary))] mt-4 text-center">
                We behandelen je gegevens vertrouwelijk en nemen binnen 24 uur contact met je op.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}