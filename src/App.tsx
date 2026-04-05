/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { GlobalBackground } from './components/GlobalBackground';
import { Menu } from './components/Menu';
import { SignatureDishes } from './components/SignatureDishes';
import { Booking } from './components/Booking';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text overflow-x-hidden relative selection:bg-primary selection:text-white">
      <GlobalBackground />

      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <Menu />
        <Booking />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-[90] hidden md:block">
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsBookingModalOpen(true)}
          className="group relative w-20 h-20 bg-primary text-white rounded-[2rem] shadow-[0_20px_50px_rgba(230,57,70,0.4)] flex items-center justify-center overflow-hidden transition-all"
        >
          <div className="relative z-10 flex flex-col items-center gap-1">
            <CalendarDays size={24} />
            <span className="text-[8px] font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Book</span>
          </div>
          <div className="absolute inset-0 bg-fire translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-white/20 rounded-[2rem] scale-90"
          />
        </motion.button>
      </div>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}
