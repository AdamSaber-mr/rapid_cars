import { useState } from 'react';
import { X, MessageCircle, Copy, Check, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import type { Car } from './carData';

interface BeschikbaarheidModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BeschikbaarheidModal({ car, isOpen, onClose }: BeschikbaarheidModalProps) {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  if (!car) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi RapidCars, ik wil graag beschikbaarheid checken voor de ${car.name}. Kunnen jullie mij helpen?`
  );
  const whatsappUrl = `https://wa.me/31683851363?text=${whatsappMessage}`;

  const handleCopySnapchat = () => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = 'rapidcarss';
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    } catch {
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormRoute = () => {
    onClose();
    navigate(`/contact?auto=${encodeURIComponent(car.name)}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-3 sm:px-4 py-3 sm:py-4 overflow-y-auto overflow-x-hidden"
          >
            <div
              className="relative w-full max-w-[460px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button — half sticking out top-right */}
              <button
                onClick={onClose}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#7A1C1C] rounded-full shadow-lg hover:bg-[#651717] transition-colors z-30"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>

              <div className="bg-white rounded-xl sm:rounded-none max-h-[88svh] overflow-y-auto overflow-x-hidden">
                {/* Car Image Strip */}
                <div className="relative h-[140px] sm:h-[170px] overflow-hidden bg-[#F5F5F5]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6">
                    <p
                      className="text-white/70 text-[10px] tracking-[0.15em] uppercase mb-1"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      Vraag beschikbaarheid
                    </p>
                    <h3
                      className="text-white"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(24px,6vw,36px)', letterSpacing: '-0.02em' }}
                    >
                      {car.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                <p
                  className="text-[#4A4A4A] mb-5 sm:mb-7"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: 1.55 }}
                >
                  Kies hoe je contact wilt opnemen. We reageren altijd binnen een paar uur.
                </p>

                {/* WhatsApp — Primary */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 w-full bg-[#25D366] text-white px-5 py-3.5 mb-2.5 hover:bg-[#20BD5A] transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1">
                    <span
                      className="block text-white"
                      style={{ fontWeight: 600, fontSize: '13px' }}
                    >
                      WhatsApp
                    </span>
                    <span
                      className="block text-white/80"
                      style={{ fontWeight: 400, fontSize: '11px' }}
                    >
                      Snelste reactie — direct chatten
                    </span>
                  </div>
                </a>

                {/* Snapchat — Secondary */}
                <button
                  onClick={handleCopySnapchat}
                  className="flex items-center gap-3.5 w-full bg-[#FFFC00] text-[#0A0A0A] px-5 py-3.5 mb-2.5 hover:bg-[#F5F200] transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.188.06-.016.12-.036.18-.06.18-.06.36-.09.51-.09.18 0 .36.06.48.12.18.12.3.27.36.48.09.21.06.48-.09.72-.06.12-.18.21-.33.33a4.86 4.86 0 0 1-.72.39 6.07 6.07 0 0 1-.84.27c-.12.03-.24.06-.33.09-.3.09-.39.18-.45.27.06.12.18.3.33.48.03.06.09.12.12.18.93 1.32 2.1 2.29 3.51 2.88.03.018.12.054.21.084.18.06.42.15.45.39.06.27-.15.51-.48.69-.69.33-1.56.57-2.4.66a.93.93 0 0 0-.21.06c-.09.06-.12.18-.15.36-.02.06-.03.12-.06.18-.09.27-.27.48-.72.48-.18 0-.39-.03-.63-.06a6.04 6.04 0 0 0-1.08-.12c-.36 0-.66.06-1.05.18-.48.18-1.02.48-1.71.84a6.5 6.5 0 0 1-2.88.78c-.06 0-.12 0-.18-.006h-.12a6.55 6.55 0 0 1-2.88-.78c-.69-.36-1.23-.66-1.74-.84-.36-.12-.69-.18-1.05-.18-.42 0-.78.06-1.08.12-.24.03-.45.06-.63.06-.42 0-.63-.18-.72-.48-.03-.06-.03-.12-.06-.18-.03-.18-.06-.3-.15-.36a.93.93 0 0 0-.21-.06c-.84-.09-1.74-.33-2.4-.66-.36-.18-.54-.42-.48-.69.03-.24.27-.33.45-.39.09-.03.18-.06.21-.084 1.41-.59 2.58-1.56 3.51-2.88.03-.06.09-.12.12-.18.15-.18.27-.36.33-.48-.06-.09-.15-.18-.45-.27a2.6 2.6 0 0 0-.33-.09c-.27-.06-.57-.15-.87-.27a5.62 5.62 0 0 1-.69-.39c-.15-.12-.27-.21-.33-.33-.15-.24-.18-.51-.09-.72.06-.21.18-.36.36-.48.12-.06.3-.12.48-.12.15 0 .33.03.51.09.06.024.12.04.18.06.27.06.63.18.93.18.18 0 .3-.03.39-.09-.006-.15-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.848C7.86 1.069 11.216.793 12.206.793Z" />
                  </svg>
                  <div className="flex-1 text-left">
                    <span
                      className="block"
                      style={{ fontWeight: 600, fontSize: '13px' }}
                    >
                      Snapchat: rapidcarss
                    </span>
                    <span
                      className="block text-[#0A0A0A]/60"
                      style={{ fontWeight: 400, fontSize: '11px' }}
                    >
                      {copied ? 'Gekopieerd!' : 'Klik om gebruikersnaam te kopieren'}
                    </span>
                  </div>
                  {copied ? (
                    <Check className="w-4 h-4 text-[#25D366] flex-shrink-0" strokeWidth={2} />
                  ) : (
                    <Copy className="w-4 h-4 text-[#0A0A0A]/40 flex-shrink-0" strokeWidth={1.5} />
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-4">
                  <div className="flex-1 h-px bg-[#E8E8E8]" />
                  <span
                    className="text-[#9A9A9A]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px' }}
                  >
                    of
                  </span>
                  <div className="flex-1 h-px bg-[#E8E8E8]" />
                </div>

                {/* Form route */}
                <button
                  onClick={handleFormRoute}
                  className="flex items-center gap-3 w-full text-left px-5 py-3 border border-[#E0E0E0] text-[#4A4A4A] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <FileText className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                  <span style={{ fontWeight: 400, fontSize: '14px' }}>
                    Liever mailen? Vul het formulier in
                  </span>
                </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
