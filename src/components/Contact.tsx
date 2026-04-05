import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
              <Sparkles size={10} /> Get In Touch <Sparkles size={10} />
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
            Visit <span className="text-primary italic font-serif lowercase tracking-normal">Us</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background/40 backdrop-blur-3xl p-12 rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <h4 className="text-3xl font-display font-bold text-text uppercase tracking-tight mb-10">Contact Information</h4>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                  <MapPin size={28} />
                </div>
                <div>
                  <h5 className="label-micro mb-2">Location</h5>
                  <p className="text-text font-medium text-lg leading-relaxed">
                    Folsom Cafe and Restaurant<br />
                    Janakpur, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                  <Phone size={28} />
                </div>
                <div>
                  <h5 className="label-micro mb-2">Phone</h5>
                  <p className="text-text font-medium text-lg leading-relaxed">
                    +977 1-4123456<br />
                    +977 9801234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                  <Mail size={28} />
                </div>
                <div>
                  <h5 className="label-micro mb-2">Email</h5>
                  <p className="text-text font-medium text-lg leading-relaxed">
                    info@folsomcafe.com<br />
                    reservations@folsomcafe.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a
                href="tel:+9779801234567"
                className="group relative flex-1 py-5 bg-primary text-white font-black uppercase tracking-[0.3em] text-xs rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(230,57,70,0.4)] flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Phone size={18} /> Call Now
                </span>
                <div className="absolute inset-0 bg-fire translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="https://wa.me/9779801234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 py-5 bg-[#25D366] text-white font-black uppercase tracking-[0.3em] text-xs rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle size={18} /> WhatsApp
                </span>
                <div className="absolute inset-0 bg-[#128C7E] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] lg:h-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative group cursor-pointer will-change-transform"
          >
            <a 
              href="https://maps.app.goo.gl/VsnsGFMbVfreU2AfA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 backdrop-blur-sm"
            >
              <div className="bg-white text-primary px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-2xl flex items-center gap-3 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <MapPin size={20} /> View on Google Maps
              </div>
            </a>
            <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23847847761!2d85.84562573277717!3d26.72706316104193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec401000000001%3A0x8896172605330331!2sJanakpur%20Dham!5e0!3m2!1sen!2snp!4v1710500000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
