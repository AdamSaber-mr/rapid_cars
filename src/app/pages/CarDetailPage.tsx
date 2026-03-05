import { useState, useCallback, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Gauge, Zap, Timer, Settings, Check } from 'lucide-react';
import { cars } from '../components/carData';
import { BeschikbaarheidModal } from '../components/BeschikbaarheidModal';

export function CarDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const car = cars.find((c) => c.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset image index when navigating to a different car
  useEffect(() => {
    setActiveImageIndex(0);
  }, [slug]);

  if (!car) {
    return <Navigate to="/aanbod" replace />;
  }

  const otherCars = cars.filter((c) => c.id !== car.id);
  const gallery = car.gallery;
  const hasMultipleImages = gallery.length > 1;

  const goToPrev = useCallback(() => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery.length]);

  const goToNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  // Mobile specs use short drivetrain names
  const mobileSpecs = [
    { label: 'Vermogen', value: car.power },
    { label: '0-100', value: car.acceleration.replace('0-100 in ', '') },
    { label: 'Aandrijving', value: car.drivetrainShort },
    { label: 'Transmissie', value: car.transmission },
  ];

  // Desktop specs use full drivetrain names
  const desktopSpecs = [
    { label: 'Vermogen', value: car.power },
    { label: '0-100', value: car.acceleration.replace('0-100 in ', '') },
    { label: 'Aandrijving', value: car.drivetrain },
    { label: 'Transmissie', value: car.transmission },
  ];

  return (
    <>
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Back Navigation */}
        <div className="fixed top-[62px] lg:top-[72px] left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-black/5">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <Link
              to="/aanbod"
              className="inline-flex items-center gap-2 py-2.5 text-[#4A4A4A] hover:text-[#0A0A0A] transition-colors duration-300"
              style={{ fontSize: '13px', fontWeight: 500 }}
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Terug naar aanbod
            </Link>
          </div>
        </div>

        {/* ==================== DESKTOP LAYOUT ==================== */}
        <section className="hidden lg:block pt-[116px]">
          <div className="max-w-[1440px] mx-auto px-16">
            <div className="grid grid-cols-[1fr_360px] gap-14 xl:gap-16 items-stretch">

              {/* Left: Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                {/* Main Image with navigation */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={gallery[activeImageIndex]}
                      alt={`${car.name} - foto ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />

                  {/* Navigation arrows */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
                        style={{ opacity: 1 }}
                        aria-label="Vorige foto"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-200"
                        aria-label="Volgende foto"
                      >
                        <ChevronRight className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
                      </button>
                    </>
                  )}

                  {/* Image counter badge */}
                  {hasMultipleImages && (
                    <div
                      className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1"
                      style={{ fontSize: '11px', fontWeight: 500 }}
                    >
                      {activeImageIndex + 1} / {gallery.length}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Right: Info Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col"
              >
                <p
                  className="text-[#7A1C1C] text-[11px] tracking-[0.2em] uppercase mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {car.category} &middot; {car.color}
                </p>
                <h1
                  className="text-[#0A0A0A] text-[2rem] xl:text-[2.25rem] tracking-[-0.03em] mb-3"
                  style={{ fontWeight: 600, lineHeight: 1.1 }}
                >
                  {car.name}
                </h1>
                <p
                  className="text-[#4A4A4A] mb-6"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.65 }}
                >
                  {car.whyText}
                </p>

                {/* Specs 2x2 */}
                <div className="grid grid-cols-2 gap-px bg-[#EBEBEB] mb-6">
                  {desktopSpecs.map((spec) => (
                    <div key={spec.label} className="bg-[#FAFAFA] py-3.5 px-3 text-center">
                      <p
                        className="text-[#0A0A0A] mb-0.5"
                        style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em' }}
                      >
                        {spec.value}
                      </p>
                      <p
                        className="text-[#9A9A9A]"
                        style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features - vertical list */}
                <div className="mb-6">
                  <p
                    className="text-[#9A9A9A] text-[9px] tracking-[0.15em] uppercase mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    Features
                  </p>
                  <div className="flex flex-col gap-2">
                    {car.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#7A1C1C] flex-shrink-0" strokeWidth={2.5} />
                        <span
                          className="text-[#4A4A4A]"
                          style={{ fontSize: '14px', fontWeight: 400 }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center justify-center gap-3 w-full bg-[#7A1C1C] text-white py-4 hover:bg-[#651717] transition-colors duration-300"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  Check beschikbaarheid
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== DESKTOP GALLERY STRIP ==================== */}
        {hasMultipleImages && (
          <section className="hidden lg:block pt-5 pb-2">
            <div className="max-w-[1440px] mx-auto px-16">
              {/* Only spans the left column width */}
              <div style={{ maxWidth: 'calc(100% - 360px - 3.5rem)' }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex gap-2.5"
                >
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative flex-1 aspect-[16/10] overflow-hidden transition-all duration-300 ${
                        i === activeImageIndex
                          ? 'ring-2 ring-[#0A0A0A] ring-offset-2 opacity-100'
                          : 'opacity-40 hover:opacity-70'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${car.name} foto ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== DESKTOP CONTENT (below gallery) ==================== */}
        <section className="hidden lg:block py-12">
          <div className="max-w-[1440px] mx-auto px-16">
            <div className="max-w-[720px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p
                  className="text-[#7A1C1C] text-[12px] tracking-[0.2em] uppercase mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {car.detailTagline}
                </p>
                <p
                  className="text-[#4A4A4A]"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}
                >
                  {car.rentalText}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== MOBILE LAYOUT ==================== */}
        <section className="lg:hidden pt-[102px]">
          {/* Mobile Gallery - swipeable */}
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={gallery[activeImageIndex]}
                  alt={`${car.name} - foto ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Car name overlay */}
              <div className="absolute bottom-4 left-5">
                <p
                  className="text-white/60 text-[10px] tracking-[0.15em] uppercase mb-1"
                  style={{ fontWeight: 500 }}
                >
                  {car.category} &middot; {car.color}
                </p>
                <h1
                  className="text-white text-[1.5rem] tracking-[-0.03em]"
                  style={{ fontWeight: 600, lineHeight: 1.1 }}
                >
                  {car.name}
                </h1>
              </div>

              {/* Arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center"
                    aria-label="Vorige foto"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#0A0A0A]" strokeWidth={2} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center"
                    aria-label="Volgende foto"
                  >
                    <ChevronRight className="w-4 h-4 text-[#0A0A0A]" strokeWidth={2} />
                  </button>
                </>
              )}

              {/* Dots */}
              {hasMultipleImages && (
                <div className="absolute bottom-4 right-4 flex gap-1.5">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeImageIndex ? 'bg-white w-4' : 'bg-white/40 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Mobile Specs - 2x2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mx-6 bg-[#0A0A0A]"
          >
            <div className="grid grid-cols-2">
              {mobileSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`py-3 px-3 text-center ${
                    i < 2 ? 'border-b border-white/10' : ''
                  } ${i % 2 === 0 ? 'border-r border-white/10' : ''}`}
                >
                  <p
                    className="text-white mb-0"
                    style={{ fontSize: '13px', fontWeight: 600 }}
                  >
                    {spec.value}
                  </p>
                  <p
                    className="text-white/35"
                    style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                  >
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ==================== MOBILE CONTENT ==================== */}
        <section className="lg:hidden py-10">
          <div className="px-6">
            <div className="max-w-[720px]">
              {/* Tagline + why text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8"
              >
                <p
                  className="text-[#7A1C1C] text-[11px] tracking-[0.2em] uppercase mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {car.detailTagline}
                </p>
                <p
                  className="text-[#0A0A0A] text-[1.15rem] tracking-[-0.02em]"
                  style={{ fontWeight: 500, lineHeight: 1.4 }}
                >
                  {car.whyText}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mb-8"
              >
                <p
                  className="text-[#4A4A4A] text-[10px] tracking-[0.15em] uppercase mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Features
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {car.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 py-2 px-3 bg-[#FAFAFA] border border-[#F0F0F0]"
                    >
                      <Check className="w-3 h-3 text-[#7A1C1C] flex-shrink-0" strokeWidth={2.5} />
                      <span
                        className="text-[#0A0A0A]"
                        style={{ fontSize: '13px', fontWeight: 400 }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Rental text + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p
                  className="text-[#4A4A4A] mb-5"
                  style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.7 }}
                >
                  {car.rentalText}
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-[#7A1C1C] text-white px-7 py-3.5 hover:bg-[#651717] transition-colors duration-300"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}
                >
                  Check beschikbaarheid
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== BEKIJK OOK ==================== */}
        <section className="bg-[#FAFAFA] border-t border-[#EBEBEB] py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <p
              className="text-[12px] tracking-[0.15em] uppercase text-[#4A4A4A] mb-6 lg:mb-8"
              style={{ fontWeight: 600 }}
            >
              Bekijk ook
            </p>

            {/* Desktop cards */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-[800px]">
              {otherCars.map((otherCar, index) => (
                <motion.div
                  key={otherCar.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    to={`/auto/${otherCar.slug}`}
                    className="group block bg-white border border-[#EBEBEB] hover:border-[#D0D0D0] transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#F0F0F0]">
                      <img
                        src={otherCar.image}
                        alt={otherCar.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <h3
                          className="text-[#0A0A0A] mb-0.5"
                          style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em' }}
                        >
                          {otherCar.name}
                        </h3>
                        <p
                          className="text-[#4A4A4A]"
                          style={{ fontSize: '13px', fontWeight: 400 }}
                        >
                          {otherCar.power} &middot; {otherCar.acceleration}
                        </p>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center border border-[#E0E0E0] group-hover:border-[#7A1C1C] group-hover:bg-[#7A1C1C] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-[#4A4A4A] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCars.map((otherCar, index) => (
                <motion.div
                  key={otherCar.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    to={`/auto/${otherCar.slug}`}
                    className="group flex items-center gap-3.5 bg-white border border-[#EBEBEB] p-2.5 hover:border-[#D0D0D0] transition-all duration-300"
                  >
                    <div className="relative w-[130px] h-[88px] flex-shrink-0 overflow-hidden bg-[#F0F0F0]">
                      <img
                        src={otherCar.image}
                        alt={otherCar.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-[#0A0A0A] mb-0.5 truncate"
                        style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '-0.01em' }}
                      >
                        {otherCar.name}
                      </h3>
                      <p
                        className="text-[#4A4A4A]"
                        style={{ fontSize: '12px', fontWeight: 400 }}
                      >
                        {otherCar.power} &middot; {otherCar.acceleration}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#CCCCCC] flex-shrink-0 mr-1" strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <BeschikbaarheidModal
        car={car}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
