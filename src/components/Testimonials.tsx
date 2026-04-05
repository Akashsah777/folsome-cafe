import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Family Man',
    text: 'Folsom Cafe and Restaurant is our go-to spot for family dinners. The kids love the burgers, and the Folsom Special Platter is a must-try for adults!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Thapa',
    role: 'Local Guide',
    text: 'The best family restaurant in town. The Chicken Dum Biryani has an authentic flavor that reminds me of home. Great service and cozy vibes.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sanjay Gurung',
    role: 'Regular Customer',
    text: 'Always a delightful experience at Folsom. Whether it is a quick lunch or a big family celebration, they never disappoint with their quality and hospitality.',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-primary/30"></div>
            <span className="label-micro">
              <Sparkles size={10} /> Reviews <Sparkles size={10} />
            </span>
            <div className="h-px w-8 bg-primary/30"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-text uppercase tracking-tight leading-tight"
          >
            What Our <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">Guests Say</span>
          </motion.h3>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="bg-background/40 backdrop-blur-3xl p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden min-h-[450px] flex items-center">
            <Quote className="absolute top-10 left-10 text-primary/5 w-40 h-40 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col items-center text-center relative z-10"
              >
                <div className="flex gap-2 mb-10">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-fire text-fire" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-2xl md:text-4xl text-text font-serif italic leading-tight mb-12 tracking-tight">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-text uppercase tracking-tight">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="label-micro">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-8 mt-16">
            <button
              onClick={handlePrev}
              className="group w-16 h-16 rounded-full bg-background/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(230,57,70,0.2)]"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentIndex === index ? 'w-12 bg-primary' : 'w-3 bg-white/10 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="group w-16 h-16 rounded-full bg-background/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(230,57,70,0.2)]"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
