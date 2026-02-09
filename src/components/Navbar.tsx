import { Link, useLocation } from 'react-router';
import { Car, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--color-dark))]/95 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 md:gap-3 group" onClick={closeMenu}>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gradient-to-br from-[hsl(var(--color-gold))] to-yellow-600 p-2.5 md:p-2.5 rounded-lg"
            >
              <Car className="w-6 h-6 md:w-6 md:h-6 text-black" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[hsl(var(--color-gold))] to-white bg-clip-text text-transparent">
              RapidCars
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="relative transition-colors text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-text-primary))]"
            >
              Home
              {isActive('/') && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </Link>
            <Link
              to="/aanbod"
              className="relative transition-colors text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-text-primary))]"
            >
              Aanbod
              {isActive('/aanbod') && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </Link>
            <Link
              to="/over-ons"
              className="relative transition-colors text-[hsl(var(--color-text-secondary))] hover:text-[hsl(var(--color-text-primary))]"
            >
              Over Ons
              {isActive('/over-ons') && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className={`px-6 py-2.5 rounded-lg transition-all block ${
                  isActive('/contact')
                    ? 'bg-[hsl(var(--color-gold))] text-black'
                    : 'bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black hover:shadow-lg hover:shadow-[hsl(var(--color-gold))]/20'
                }`}
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 bg-[hsl(var(--color-dark))]/98 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-[hsl(var(--color-gold))]/20 to-yellow-600/20 text-[hsl(var(--color-gold))] border-l-4 border-[hsl(var(--color-gold))]' 
                    : 'text-[hsl(var(--color-text-secondary))] hover:bg-white/5'
                }`}
              >
                Home
              </Link>
              <Link
                to="/aanbod"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive('/aanbod') 
                    ? 'bg-gradient-to-r from-[hsl(var(--color-gold))]/20 to-yellow-600/20 text-[hsl(var(--color-gold))] border-l-4 border-[hsl(var(--color-gold))]' 
                    : 'text-[hsl(var(--color-text-secondary))] hover:bg-white/5'
                }`}
              >
                Aanbod
              </Link>
              <Link
                to="/over-ons"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive('/over-ons') 
                    ? 'bg-gradient-to-r from-[hsl(var(--color-gold))]/20 to-yellow-600/20 text-[hsl(var(--color-gold))] border-l-4 border-[hsl(var(--color-gold))]' 
                    : 'text-[hsl(var(--color-text-secondary))] hover:bg-white/5'
                }`}
              >
                Over Ons
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block px-6 py-3 bg-gradient-to-r from-[hsl(var(--color-gold))] to-yellow-600 text-black rounded-lg text-center font-medium hover:shadow-lg hover:shadow-[hsl(var(--color-gold))]/30 transition-all"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}