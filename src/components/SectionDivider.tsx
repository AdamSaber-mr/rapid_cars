import { motion } from 'motion/react';

interface SectionDividerProps {
  variant?: 'default' | 'fade' | 'dots';
}

export function SectionDivider({ variant = 'default' }: SectionDividerProps) {
  if (variant === 'fade') {
    return (
      <div className="relative h-24 sm:h-32 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--color-gold))]/40 to-transparent" />
        </motion.div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="relative h-16 sm:h-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-gold))]/40" />
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--color-gold))]/60" />
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 shadow-lg shadow-[hsl(var(--color-gold))]/30" />
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--color-gold))]/60" />
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-gold))]/40" />
        </motion.div>
      </div>
    );
  }

  // Default variant - elegant line with center decoration
  return (
    <div className="relative h-20 sm:h-24 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center px-4 sm:px-8"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--color-gold))]/50 to-transparent" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
        className="relative z-10 bg-[hsl(var(--color-dark))] px-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-[hsl(var(--color-gold))]/50" />
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-[hsl(var(--color-gold))]/50 to-[hsl(var(--color-gold))]" />
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 shadow-lg shadow-[hsl(var(--color-gold))]/50" />
          <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-[hsl(var(--color-gold))]/50 to-[hsl(var(--color-gold))]" />
          <div className="w-1 h-1 rounded-full bg-[hsl(var(--color-gold))]/50" />
        </div>
      </motion.div>
    </div>
  );
}
