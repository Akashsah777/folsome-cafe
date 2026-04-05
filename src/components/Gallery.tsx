import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Sparkles } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Tandoori Chicken Platter', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Coffee Latte Art', span: 'col-span-1 row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Mutton Gosh Biryani', span: 'col-span-1 row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Chicken Dum Biryani', span: 'col-span-1 row-span-2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Chicken Momo', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Refreshing Mocktail', span: 'col-span-1 row-span-1' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 relative overflow-hidden">
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
              <Sparkles size={10} /> Visual Story <Sparkles size={10} />
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
            A Glimpse of <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">Folsom Cafe</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group overflow-hidden rounded-[2.5rem] cursor-pointer ${image.span} will-change-transform border border-white/5 shadow-2xl`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl"
                >
                  <ZoomIn size={28} />
                </motion.div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  View Full Size
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/95 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-14 h-14 bg-white/5 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all z-[110] border border-white/10"
            >
              <X size={28} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery Preview"
                className="max-w-full max-h-full object-contain rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
