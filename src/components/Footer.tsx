import { Facebook, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500">
            <Sparkles size={24} />
          </div>
          <span className="text-3xl md:text-4xl font-display font-bold text-text uppercase tracking-tight leading-none">
            FOLSOM <span className="text-primary">Cafe & Restaurant</span>
          </span>
        </motion.a>

        <div className="flex gap-6 mb-16">
          {[
            { icon: Facebook, href: '#' },
            { icon: Instagram, href: '#' },
            { icon: Twitter, href: '#' },
            { icon: Youtube, href: '#' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.1 }}
              className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-text hover:text-primary hover:border-primary transition-all duration-500 shadow-2xl backdrop-blur-xl"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          {['Home', 'About', 'Menu', 'Reservation', 'Gallery', 'Contact'].map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase() === 'reservation' ? 'booking' : link.toLowerCase()}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="label-micro hover:text-primary transition-all relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <div className="w-full max-w-4xl h-px bg-white/5 mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-6">
          <p className="label-micro">
            &copy; {new Date().getFullYear()} Folsom Cafe and Restaurant. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="label-micro hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="label-micro hover:text-primary transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
