import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reservation', href: '#booking' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? 'glass py-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-b border-surface-light'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
            <Sparkles size={20} />
          </div>
          <span className="text-xl md:text-2xl font-display font-semibold text-text uppercase tracking-normal leading-none">
            FOLSOM <span className="text-primary block md:inline">Cafe & Restaurant</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black text-text-muted hover:text-primary transition-all uppercase tracking-[0.4em] relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onOpenBooking}
            className="group relative px-8 py-3 bg-primary text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(230,57,70,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Table <span className="text-lg">→</span>
            </span>
            <div className="absolute inset-0 bg-fire translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text hover:text-primary transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-3xl border-t border-white/5 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-black text-text hover:text-primary transition-all uppercase tracking-[0.4em] flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-0 h-px bg-primary group-hover:w-12 transition-all duration-500"></span>
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-5 bg-primary text-white font-black uppercase tracking-[0.3em] text-xs rounded-2xl hover:bg-fire transition-all text-center mt-4 shadow-xl"
              >
                Book a Table Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
