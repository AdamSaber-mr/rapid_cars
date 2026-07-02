import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  carName: string;
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, carName, isOpen, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const hasMultiple = images.length > 1;

  // Sync naar de aangeklikte foto bij openen
  useEffect(() => {
    if (isOpen) setIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Toetsenbord + scroll lock zolang de viewer open is
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[120] bg-[#0A0A0A]/[0.97] flex flex-col"
          onClick={onClose}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 lg:px-8 py-4 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p
                className="text-white/40 text-[10px] tracking-[0.15em] uppercase"
                style={{ fontWeight: 500 }}
              >
                {carName}
              </p>
              {hasMultiple && (
                <p className="text-white" style={{ fontSize: '13px', fontWeight: 500 }}>
                  {index + 1} / {images.length}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200 rounded-full"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 relative flex items-center justify-center min-h-0 px-4 lg:px-24">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`${carName} - foto ${index + 1}`}
                className="max-w-full max-h-full object-contain select-none"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            {hasMultiple && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/15 backdrop-blur-sm transition-colors duration-200 rounded-full"
                  aria-label="Vorige foto"
                >
                  <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/15 backdrop-blur-sm transition-colors duration-200 rounded-full"
                  aria-label="Volgende foto"
                >
                  <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {hasMultiple && (
            <div
              className="flex-shrink-0 flex items-center justify-center gap-2 px-5 py-4 lg:py-5 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-16 h-11 lg:w-20 lg:h-14 flex-shrink-0 overflow-hidden transition-all duration-300 ${
                    i === index
                      ? 'ring-2 ring-white opacity-100'
                      : 'opacity-40 hover:opacity-75'
                  }`}
                  aria-label={`Foto ${i + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
