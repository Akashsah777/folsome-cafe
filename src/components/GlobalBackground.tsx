import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { Flame, Utensils, ChefHat, Beef, Coffee, Wine, Sparkles, Zap, Timer, Soup, Pizza, Sandwich, Fish, IceCream, Beer, GlassWater, Drumstick, Egg, Cherry, Apple, Citrus, Hop, Shrimp } from 'lucide-react';

const floatingIcons = [
  { Icon: Flame, x: 5, y: 10, size: 20, color: 'text-fire/5', delay: 0, duration: 12 },
  { Icon: Utensils, x: 92, y: 8, size: 18, color: 'text-primary/5', delay: 1, duration: 15 },
  { Icon: ChefHat, x: 88, y: 88, size: 24, color: 'text-herb/5', delay: 2, duration: 18 },
  { Icon: Beef, x: 8, y: 82, size: 20, color: 'text-fire/5', delay: 3, duration: 14 },
  { Icon: Coffee, x: 95, y: 48, size: 16, color: 'text-primary/5', delay: 4, duration: 16 },
  { Icon: Wine, x: 4, y: 52, size: 18, color: 'text-secondary/5', delay: 5, duration: 20 },
  { Icon: Sparkles, x: 48, y: 3, size: 14, color: 'text-fire/5', delay: 6, duration: 10 },
  { Icon: Zap, x: 52, y: 94, size: 22, color: 'text-primary/5', delay: 7, duration: 15 },
  { Icon: Timer, x: 28, y: 28, size: 18, color: 'text-herb/5', delay: 8, duration: 22 },
  { Icon: Soup, x: 72, y: 22, size: 20, color: 'text-secondary/5', delay: 9, duration: 17 },
  { Icon: Pizza, x: 18, y: 38, size: 16, color: 'text-fire/5', delay: 10, duration: 14 },
  { Icon: Sandwich, x: 82, y: 62, size: 22, color: 'text-primary/5', delay: 11, duration: 19 },
  { Icon: Fish, x: 35, y: 85, size: 18, color: 'text-herb/5', delay: 12, duration: 16 },
  { Icon: IceCream, x: 65, y: 15, size: 20, color: 'text-secondary/5', delay: 13, duration: 14 },
  { Icon: Beer, x: 12, y: 25, size: 22, color: 'text-fire/5', delay: 14, duration: 18 },
  { Icon: GlassWater, x: 85, y: 35, size: 16, color: 'text-primary/5', delay: 15, duration: 20 },
  { Icon: Drumstick, x: 45, y: 75, size: 24, color: 'text-herb/5', delay: 16, duration: 15 },
  { Icon: Egg, x: 75, y: 45, size: 18, color: 'text-secondary/5', delay: 17, duration: 17 },
  { Icon: Cherry, x: 25, y: 65, size: 14, color: 'text-fire/5', delay: 18, duration: 13 },
  { Icon: Apple, x: 55, y: 55, size: 20, color: 'text-primary/5', delay: 19, duration: 19 },
  { Icon: Citrus, x: 40, y: 10, size: 18, color: 'text-secondary/5', delay: 20, duration: 21 },
  { Icon: Hop, x: 60, y: 90, size: 22, color: 'text-herb/5', delay: 21, duration: 23 },
  { Icon: Shrimp, x: 15, y: 55, size: 20, color: 'text-fire/5', delay: 22, duration: 17 },
];

export const GlobalBackground = React.memo(() => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [0, 1920], [-20, 20]);
  const parallaxY = useTransform(smoothMouseY, [0, 1080], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      {/* Colorful Animated Background Blobs with Parallax */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 150, 0],
            y: [0, -100, 0],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-1/4 w-[40rem] md:w-[70rem] h-[40rem] md:h-[70rem] bg-primary/15 rounded-full blur-[100px] md:blur-[160px] opacity-60 will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            x: [0, -150, 0],
            y: [0, 150, 0],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 -right-1/4 w-[45rem] md:w-[80rem] h-[45rem] md:h-[80rem] bg-fire/15 rounded-full blur-[120px] md:blur-[200px] opacity-60 will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -150, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] md:w-[90rem] h-[50rem] md:h-[90rem] bg-herb/10 rounded-full blur-[150px] md:blur-[250px] opacity-40 will-change-transform"
        />
      </motion.div>
      
      {/* Light Rays */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            initial={{ rotate: -45, x: '-100%', opacity: 0 }}
            animate={{ 
              x: ['-100%', '200%'],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 15 + i * 2, 
              repeat: Infinity, 
              delay: i * 4,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-32 h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-3xl will-change-transform"
            style={{ left: `${i * 25}%` }}
          />
        ))}
      </div>

      {/* Steam/Smoke Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`steam-${i}`}
            initial={{ y: '110%', x: `${10 + i * 12}%`, scale: 1, opacity: 0 }}
            animate={{ 
              y: '-10%',
              x: [`${10 + i * 12}%`, `${10 + i * 12 + (i % 2 === 0 ? 5 : -5)}%`, `${10 + i * 12}%`],
              scale: [1, 1.5, 2],
              opacity: [0, 0.4, 0]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className="absolute w-40 h-40 bg-white/10 rounded-full blur-[60px] will-change-transform"
          />
        ))}
      </div>

      {/* Embers/Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`ember-${i}`}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: '110%', 
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0 
            }}
            animate={{ 
              y: '-10%',
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.8, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-fire/40 rounded-full blur-[1px] shadow-[0_0_10px_rgba(255,123,0,0.5)]"
          />
        ))}
      </div>

      {/* Floating Icons with Parallax */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
            x: [0, 5, -5, 0]
          }}
          style={{
            x: useTransform(smoothMouseX, [0, 1920], [-(index % 5) * 5, (index % 5) * 5]),
            y: useTransform(smoothMouseY, [0, 1080], [-(index % 3) * 5, (index % 3) * 5]),
            left: `${item.x}%`,
            top: `${item.y}%`
          }}
          transition={{ 
            opacity: { duration: 2, delay: item.delay },
            scale: { duration: 2, delay: item.delay },
            y: { duration: item.duration, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: item.duration * 1.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: item.duration * 1.2, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`absolute ${item.color} pointer-events-none z-10`}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply bg-noise" />
      <div className="absolute inset-0 opacity-[0.6] bg-pattern" />
      
      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-40" />
    </div>
  );
});
