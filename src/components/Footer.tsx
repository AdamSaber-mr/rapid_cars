import { Car, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--color-dark-lighter))] border-t border-white/10 mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 p-2 rounded-lg">
                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[hsl(var(--color-gold))] to-white bg-clip-text text-transparent">
                RapidCars
              </span>
            </div>
            <p className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] pr-0 sm:pr-4">
              Luxe auto's huren, snel en betrouwbaar. Voor elke gelegenheid het perfecte voertuig.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg text-[hsl(var(--color-text-primary))]">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-gold))] transition-colors">
                Home
              </Link>
              <Link to="/aanbod" className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-gold))] transition-colors">
                Aanbod
              </Link>
              <Link to="/over-ons" className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-gold))] transition-colors">
                Over Ons
              </Link>
              <Link to="/contact" className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-gold))] transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg text-[hsl(var(--color-text-primary))]">Volg Ons</h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(var(--color-dark))] p-3 rounded-lg hover:bg-gradient-to-br hover:from-[hsl(var(--color-gold))] hover:to-yellow-600 transition-all active:scale-95 group"
              >
                <Instagram className="w-5 h-5 text-[hsl(var(--color-text-secondary))] group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(var(--color-dark))] p-3 rounded-lg hover:bg-gradient-to-br hover:from-[hsl(var(--color-gold))] hover:to-yellow-600 transition-all active:scale-95 group"
              >
                <Send className="w-5 h-5 text-[hsl(var(--color-text-secondary))] group-hover:text-black transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[hsl(var(--color-text-secondary))]">
          <p>&copy; 2026 RapidCars. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}