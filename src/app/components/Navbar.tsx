import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { BrandLogo } from './BrandLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Aanbod', href: '/aanbod' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  // On non-homepage, always show scrolled (solid) style
  const showSolid = scrolled || !isHomepage;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Handle hash links on homepage
    if (href.startsWith('/#') && isHomepage) {
      const el = document.querySelector(href.replace('/', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link to="/" className="relative z-10 max-[360px]:scale-95 origin-left" onClick={() => setMobileOpen(false)}>
              <BrandLogo
                tone={showSolid || mobileOpen ? 'dark' : 'light'}
                size="sm"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 ${
                    showSolid
                      ? 'text-[#4A4A4A] hover:text-[#0A0A0A]'
                      : 'text-white/70 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              to="/aanbod"
              className={`hidden lg:inline-block text-[13px] tracking-[0.04em] uppercase px-6 py-2.5 transition-all duration-300 ${
                showSolid
                  ? 'bg-[#0A0A0A] text-white hover:bg-[#7A1C1C]'
                  : 'border border-white/40 text-white hover:bg-white hover:text-[#0A0A0A]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Reserveer Nu
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative z-10 p-2 transition-colors ${
                mobileOpen || showSolid ? 'text-[#0A0A0A]' : 'text-white'
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-sm"
          >
            <div className="h-full flex flex-col px-5 pt-[calc(env(safe-area-inset-top)+84px)] pb-[calc(env(safe-area-inset-bottom)+24px)]">
              <div className="flex-1 flex flex-col justify-center gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full rounded-xl border border-[#0A0A0A]/10 bg-[#0A0A0A]/[0.02] px-5 py-4 text-[#0A0A0A] text-[1.35rem] tracking-[-0.01em]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/aanbod"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-[#7A1C1C] text-white px-8 py-4 rounded-xl text-[13px] tracking-[0.08em] uppercase"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Reserveer Nu
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
