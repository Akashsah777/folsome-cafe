import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, User, CheckCircle2 } from 'lucide-react';

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass p-8 md:p-12 rounded-[2.5rem] max-w-lg w-full relative shadow-[0_0_50px_rgba(230,57,70,0.1)]"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-text-muted hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-10 text-center">
                    <h3 className="text-4xl font-display font-bold text-text mb-3 uppercase tracking-tight">
                      Book a <span className="text-primary italic font-serif lowercase tracking-normal">Table</span>
                    </h3>
                    <p className="text-text-muted font-medium">Join us for an unforgettable dining experience.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-muted flex items-center gap-2">
                        <User size={16} className="text-primary" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-background border border-surface-light rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-text-muted flex items-center gap-2">
                          <Users size={16} className="text-primary" /> Guests
                        </label>
                        <select
                          required
                          className="w-full bg-background border border-surface-light rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Person' : 'People'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-text-muted flex items-center gap-2">
                          <Calendar size={16} className="text-primary" /> Date
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full bg-background border border-surface-light rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-muted flex items-center gap-2">
                        <Clock size={16} className="text-primary" /> Time
                      </label>
                      <input
                        type="time"
                        required
                        className="w-full bg-background border border-surface-light rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-4 bg-primary text-background font-bold rounded-full hover:bg-primary-hover transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Confirm Reservation
                          <motion.span
                            className="inline-block"
                            group-hover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h4 className="text-3xl font-serif font-bold text-text">Booking Confirmed!</h4>
                  <p className="text-text-muted max-w-sm">
                    Thank you for choosing Folsom Cafe and Restaurant. We've sent a confirmation to your email.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
