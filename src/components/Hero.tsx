import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flame, UtensilsCrossed, Star } from 'lucide-react';

const FloatingElement = React.memo(({ children, delay = 0, x = 0, y = 0 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [y, y - 20, y],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      opacity: { duration: 1, delay },
      scale: { duration: 1, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }}
    className="absolute pointer-events-none z-10 will-change-transform"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    {children}
  </motion.div>
));

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating Decorative Elements */}
      <FloatingElement x={15} y={25} delay={0.5}>
        <div className="w-16 h-16 bg-fire/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-fire/20 shadow-xl">
          <Flame className="text-fire animate-pulse" size={32} />
        </div>
      </FloatingElement>
      <FloatingElement x={80} y={20} delay={0.8}>
        <div className="w-20 h-20 bg-herb/10 backdrop-blur-md rounded-full flex items-center justify-center border border-herb/20 shadow-xl">
          <UtensilsCrossed className="text-herb" size={36} />
        </div>
      </FloatingElement>
      <FloatingElement x={10} y={70} delay={1.1}>
        <div className="w-14 h-14 bg-secondary/10 backdrop-blur-md rotate-12 rounded-xl flex items-center justify-center border border-secondary/20 shadow-xl">
          <Star className="text-secondary fill-secondary" size={28} />
        </div>
      </FloatingElement>
      <FloatingElement x={85} y={75} delay={1.4}>
        <div className="w-12 h-12 bg-primary/10 backdrop-blur-md -rotate-12 rounded-full flex items-center justify-center border border-primary/20 shadow-xl">
          <Sparkles className="text-primary" size={24} />
        </div>
      </FloatingElement>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-6xl flex flex-col items-center">


          <div className="relative mb-12 will-change-transform">
            <motion.h1
              initial={{ opacity: 0, scale: 1.5, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                type: "spring", 
                stiffness: 120, 
                damping: 12,
                delay: 0.2 
              }}
              className="text-[18vw] md:text-[15vw] lg:text-[12rem] font-display text-text leading-[0.95] tracking-tight uppercase flex flex-col items-center"
            >
              <span className="relative">
                FOLSOM
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-4 bg-fire/40 -z-10 skew-x-[-20deg]"
                />
              </span>
              <motion.span 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-primary italic font-serif text-[10vw] md:text-[8vw] lg:text-[7rem] tracking-normal mt-2 md:mt-4 lowercase"
              >
                Cafe & Restaurant
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-2xl text-text-muted mb-12 font-medium tracking-wide max-w-2xl leading-relaxed text-balance"
          >
            Your favorite <span className="text-primary font-bold">family destination</span> for authentic flavors and unforgettable dining traditions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#menu"
              className="group relative px-12 py-5 bg-primary text-white font-black tracking-widest rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(230,57,70,0.4)] hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              <span className="relative z-10">EXPLORE MENU</span>
              <div className="absolute inset-0 bg-fire translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#booking"
              className="px-12 py-5 bg-surface border-2 border-text text-text font-black tracking-widest rounded-full hover:bg-text hover:text-white transition-all hover:shadow-xl w-full sm:w-auto text-center"
            >
              BOOK A TABLE
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-text-muted mb-6 font-black" style={{ writingMode: 'vertical-rl' }}>SCROLL DOWN</span>
        <motion.div
          animate={{ height: [0, 60, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 bg-primary"
        />
      </motion.div>
    </section>
  );
}
