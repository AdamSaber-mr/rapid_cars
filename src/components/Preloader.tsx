import { motion, AnimatePresence } from 'motion/react';
import { Car } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-[hsl(var(--color-dark))] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="inline-block bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 p-6 rounded-2xl"
              >
                <Car className="w-16 h-16 text-black" />
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--color-gold))] to-white bg-clip-text text-transparent mb-6"
            >
              RapidCars
            </motion.h1>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-[hsl(var(--color-text-secondary))]"
            >
              Luxe wordt geladen...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
