import { motion } from 'motion/react';
import { Flame, Sparkles } from 'lucide-react';

const signatureDishes = [
  {
    id: 1,
    name: 'Folsom Special Platter',
    description: 'Our signature assortment of tandoori specialties, perfectly grilled and served with mint chutney.',
    price: 'Rs. 999',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 2,
    name: 'Chicken Dum Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and saffron in traditional dum style.',
    price: 'Rs. 495',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 3,
    name: 'Meat Lover Pizza',
    description: 'A hearty pizza loaded with tomato sauce, mozzarella, sausage, and generous portions of diced meat.',
    price: 'Rs. 575',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
];

export function SignatureDishes() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-primary/30"></div>
            <span className="label-micro">
              <Sparkles size={10} /> Chef's Selection <Sparkles size={10} />
            </span>
            <div className="h-px w-12 bg-primary/30"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-text uppercase tracking-tight leading-tight"
          >
            Signature <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">Dishes</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="group relative bg-background/40 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-primary/20 will-change-transform"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                  referrerPolicy="no-referrer"
                />
                {dish.popular && (
                  <div className="absolute top-6 right-6 z-20 bg-fire text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    <Flame size={14} className="animate-pulse" /> Popular
                  </div>
                )}
              </div>

              <div className="p-10 relative z-20">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-3xl font-display font-bold text-text uppercase tracking-tight group-hover:text-primary transition-colors">
                    {dish.name}
                  </h4>
                  <span className="text-2xl font-display font-bold text-primary tracking-tight">{dish.price}</span>
                </div>
                <p className="text-text-muted text-lg leading-relaxed mb-10 font-medium tracking-wide">
                  {dish.description}
                </p>
                <button className="group/btn relative w-full py-4 bg-white/5 border border-white/10 text-text font-black uppercase tracking-[0.2em] text-xs rounded-2xl overflow-hidden transition-all hover:bg-primary hover:text-white hover:border-primary">
                  <span className="relative z-10">Order Now</span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
