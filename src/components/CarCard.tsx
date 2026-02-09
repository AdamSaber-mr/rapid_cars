import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

interface CarCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export function CarCard({ name, category, description, image, featured = false }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[hsl(var(--color-dark-lighter))] rounded-2xl overflow-hidden border border-white/10 hover:border-[hsl(var(--color-gold))]/50 transition-all duration-300 flex flex-col h-full"
    >
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2.5 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black text-xs sm:text-sm font-medium rounded-full"
        >
          Featured
        </motion.div>
      )}
      
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--color-dark-lighter))] via-transparent to-transparent" />
        
        {/* Hover overlay - alleen op desktop */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[hsl(var(--color-gold))]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          <span className="text-xs sm:text-sm text-[hsl(var(--color-gold))] font-medium">{category}</span>
        </motion.div>
        <h3 className="mb-3 text-lg sm:text-xl text-[hsl(var(--color-text-primary))]">{name}</h3>
        <p className="text-sm sm:text-base text-[hsl(var(--color-text-secondary))] mb-5 sm:mb-6 flex-1 line-clamp-3">
          {description}
        </p>
        
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-3 sm:py-2.5 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg sm:rounded-md hover:shadow-lg hover:shadow-[hsl(var(--color-gold))]/30 transition-all text-sm font-medium sm:bg-none sm:from-transparent sm:to-transparent sm:text-[hsl(var(--color-gold))] sm:p-0 sm:justify-start group/link"
        >
          <span className="sm:hidden">Vraag Beschikbaarheid</span>
          <span className="hidden sm:inline">Vraag beschikbaarheid aan</span>
          <ArrowRight className="w-4 h-4 sm:group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}