import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Flame, Utensils } from 'lucide-react';

const FloatingElement = memo(({ children, delay = 0, x = 0, y = 0 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => (
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

function AnimatedCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center will-change-transform">
      <h3 className="text-4xl md:text-5xl font-display font-bold text-text mb-2 uppercase tracking-tight">
        {count}
        {suffix}
      </h3>
      <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingElement x={5} y={15} delay={0.2}>
        <div className="p-4 bg-primary/5 backdrop-blur-xl rounded-2xl border border-primary/10 shadow-2xl">
          <Utensils className="text-primary" size={24} />
        </div>
      </FloatingElement>
      <FloatingElement x={90} y={80} delay={0.5}>
        <div className="p-3 bg-fire/5 backdrop-blur-xl rounded-full border border-fire/10 shadow-2xl">
          <Flame className="text-fire" size={20} />
        </div>
      </FloatingElement>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-fire/30"></div>
                <span className="label-micro">
                  <Sparkles size={10} /> Our Legacy <Sparkles size={10} />
                </span>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-display font-bold text-text leading-tight mb-8 uppercase tracking-tight">
                A Family <br />
                <span className="text-primary italic font-serif lowercase tracking-normal">Dining Tradition</span>
              </h3>
              
              <p className="text-text-muted text-lg md:text-xl leading-relaxed font-medium tracking-wide text-balance">
                At Folsom Cafe and Restaurant, we believe in the power of good food to bring families together. 
                Our journey started with a simple idea: to create a warm, inviting space where every generation 
                can share unforgettable moments over delicious, home-style meals and our signature 
                international flavors.
              </p>
              <p className="text-text-muted text-lg md:text-xl leading-relaxed mt-6 font-medium tracking-wide">
                From our kitchen to your table, every dish is crafted with love, using the freshest ingredients 
                to ensure every family gathering is a celebration of taste and togetherness.
              </p>
            </div>

            <div className="pt-12 border-t border-text/10 grid grid-cols-3 gap-8">
              <AnimatedCounter target={1000} suffix="+" label="Guests" />
              <AnimatedCounter target={50} suffix="+" label="Dishes" />
              <AnimatedCounter target={5} suffix="⭐" label="Years" />
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, type: "spring" }}
            className="relative h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden group shadow-2xl border border-text/5"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Grilling Meat"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-10 right-10 z-20 bg-background/40 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-fire/20 rounded-2xl flex items-center justify-center shadow-inner">
                  <Flame className="text-fire animate-pulse" size={32} />
                </div>
                <div>
                  <p className="label-micro mb-2">Established</p>
                  <p className="text-3xl font-display font-bold text-text uppercase tracking-tight">2020</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
