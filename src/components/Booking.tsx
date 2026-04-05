import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, User, CheckCircle2, Sparkles } from 'lucide-react';

export function Booking() {
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
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary/30"></div>
                <span className="label-micro">
                  <Sparkles size={10} /> Reservations <Sparkles size={10} />
                </span>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-display font-bold text-text uppercase tracking-tight leading-tight mb-8">
                Secure Your <br />
                <span className="text-primary italic font-serif lowercase tracking-normal">Table</span>
              </h3>
              
              <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-10 font-medium tracking-wide text-balance">
                Join us for an exceptional dining experience. Whether it's a romantic dinner, 
                a family celebration, or a business lunch, we'll make it special.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-background/40 backdrop-blur-xl rounded-[2rem] border border-white/5 shadow-xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Clock className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-text uppercase tracking-tight">Opening Hours</h4>
                    <p className="text-text-muted font-medium">Mon - Sun: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-background/40 backdrop-blur-3xl p-12 rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden min-h-[600px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="label-micro ml-4 mb-2">
                          <User size={12} /> Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="label-micro ml-4 mb-2">
                          <Users size={12} /> Guests
                        </label>
                        <select
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                            <option key={num} value={num} className="bg-background">
                              {num} {num === 1 ? 'Person' : 'People'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="label-micro ml-4 mb-2">
                          <Calendar size={12} /> Date
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="label-micro ml-4 mb-2">
                          <Clock size={12} /> Time
                        </label>
                        <input
                          type="time"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-text focus:outline-none focus:border-primary transition-all font-medium"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-5 bg-primary text-white font-black uppercase tracking-[0.3em] text-xs rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(230,57,70,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>Reserve Your Table Now <span className="text-lg">→</span></>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-fire translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mb-4 shadow-inner"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                    <h4 className="text-4xl font-display font-bold text-text uppercase tracking-tight">Booking Confirmed!</h4>
                    <p className="text-text-muted text-xl font-medium tracking-wide max-w-sm leading-relaxed">
                      Thank you for choosing Folsom Cafe and Restaurant. We've sent a confirmation to your email.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
