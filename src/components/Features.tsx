import { motion } from 'motion/react';
import { Users, Flame, Utensils, Music, Zap } from 'lucide-react';

const features = [
  {
    icon: <Users size={32} className="text-blue-400" />,
    title: 'Family Friendly',
    desc: 'A welcoming atmosphere perfect for all ages and family gatherings.',
  },
  {
    icon: <Flame size={32} className="text-fire" />,
    title: 'Freshly Grilled',
    desc: 'Premium meats and vegetables grilled to perfection over open flames.',
  },
  {
    icon: <Utensils size={32} className="text-herb" />,
    title: 'Unique Garlic Flavors',
    desc: 'Our signature garlic-infused recipes that you won\'t find anywhere else.',
  },
  {
    icon: <Music size={32} className="text-purple-400" />,
    title: 'Cozy Ambience',
    desc: 'Warm lighting, comfortable seating, and a relaxing vibe.',
  },
  {
    icon: <Zap size={32} className="text-primary" />,
    title: 'Fast Service',
    desc: 'Prompt and attentive service without compromising on quality.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden border-y border-surface-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-sans uppercase tracking-[0.2em] text-primary mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-text"
          >
            Folsom Cafe & Restaurant <span className="italic text-primary">Experience</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-background p-8 rounded-2xl border border-surface-light hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-colors duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-text mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
