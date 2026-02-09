import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

interface HeroProps {
  backgroundImage: string;
  videoUrl?: string;
}

export function Hero({ backgroundImage, videoUrl }: HeroProps) {
  const ref = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={ref} className="relative h-[85vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image with Overlay and Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        {videoUrl && !videoError ? (
          <>
            {/* Fallback image while video loads */}
            {!videoLoaded && (
              <img
                src={backgroundImage}
                alt="Luxury car"
                className="w-full h-full object-cover"
              />
            )}
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => {
                setVideoError(true);
                setVideoLoaded(false);
              }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </>
        ) : (
          <img
            src={backgroundImage}
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-3 sm:mb-4 md:mb-6 max-w-4xl mx-auto"
        >
          <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Luxe Auto's Huren,
          </span>
          <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 bg-clip-text text-transparent mt-1 sm:mt-2">
            Snel en Betrouwbaar
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-[hsl(var(--color-text-secondary))] mb-6 sm:mb-8 max-w-2xl mx-auto px-2 leading-relaxed"
        >
          Ontdek onze exclusieve collectie premium voertuigen. Van sportieve coupés tot luxe SUV's.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/aanbod"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg hover:shadow-xl hover:shadow-[hsl(var(--color-gold))]/30 transition-all group w-full sm:w-auto font-medium text-sm sm:text-base"
            >
              Bekijk Aanbod
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto font-medium text-sm sm:text-base"
            >
              Doe een Aanvraag
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
        aria-label="Scroll naar content"
      >
        <span className="text-xs sm:text-sm font-medium hidden sm:block">Scroll voor meer</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[hsl(var(--color-gold))]/40 flex items-center justify-center group-hover:border-[hsl(var(--color-gold))] transition-colors bg-black/20 backdrop-blur-sm"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--color-gold))]" />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[hsl(var(--color-dark))] to-transparent pointer-events-none" />
    </div>
  );
}