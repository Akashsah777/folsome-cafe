import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Flame, Sparkles } from 'lucide-react';

const categories = ['All', 'Pizza & Pasta', 'Mo:Mo & Noodles', 'Indian Section', 'Curries & Naan', 'Tandoori & Sizzlers', 'Soups & Salads', 'Burgers & Snacks'];

const menuItems = [
  { id: 1, name: 'Meat Lover Pizza', category: 'Pizza & Pasta', price: 'Rs. 575', desc: 'Tomato sauce, mozzarella, sausage and dices of meat.', popular: true },
  { id: 2, name: 'Pasta Alfredo', category: 'Pizza & Pasta', price: 'Rs. 320', desc: 'Creamy pasta with parmesan and herbs.', popular: false },
  { id: 3, name: 'Spaghetti Carbonara', category: 'Pizza & Pasta', price: 'Rs. 680', desc: 'Classic spaghetti with egg, cheese, and bacon.', popular: true },
  { id: 4, name: 'Chicken Jhaneko Mo:Mo', category: 'Mo:Mo & Noodles', price: 'Rs. 295', desc: 'Pan-fried chicken dumplings with a spicy tempering.', popular: true },
  { id: 5, name: 'Mutton Jhol Mo:Mo', category: 'Mo:Mo & Noodles', price: 'Rs. 310', desc: 'Mutton dumplings served in a spicy soup.', popular: false },
  { id: 6, name: 'Chilly Garlic Chowmien', category: 'Mo:Mo & Noodles', price: 'Rs. 255', desc: 'Spicy stir-fried noodles with garlic and vegetables.', popular: false },
  { id: 7, name: 'Chicken Dum Biryani', category: 'Indian Section', price: 'Rs. 495', desc: 'Fragrant basmati rice cooked with tender chicken and spices.', popular: true },
  { id: 8, name: 'Mutton Gosh Biryani', category: 'Indian Section', price: 'Rs. 595', desc: 'Slow-cooked mutton biryani with aromatic spices.', popular: true },
  { id: 9, name: 'Kashmiri Pulao', category: 'Indian Section', price: 'Rs. 295', desc: 'Sweet and savory rice with nuts and fruits.', popular: false },
  { id: 10, name: 'Butter Chicken', category: 'Curries & Naan', price: 'Rs. 435', desc: 'Creamy tomato-based curry with grilled chicken.', popular: true },
  { id: 11, name: 'Paneer Tawa', category: 'Curries & Naan', price: 'Rs. 360', desc: 'Semi-gravy paneer cooked on a tawa with spices.', popular: false },
  { id: 12, name: 'Garlic Naan', category: 'Curries & Naan', price: 'Rs. 80', desc: 'Freshly baked naan with garlic and butter.', popular: true },
  { id: 13, name: 'Folsom Special Platter', category: 'Tandoori & Sizzlers', price: 'Rs. 999', desc: 'Our signature assortment of tandoori specialties.', popular: true },
  { id: 14, name: 'Chicken Sizzler', category: 'Tandoori & Sizzlers', price: 'Rs. 410', desc: 'Sizzling chicken served with vegetables and sauce.', popular: false },
  { id: 15, name: 'Maharaja Kebab', category: 'Tandoori & Sizzlers', price: 'Rs. 390', desc: 'Royal kebabs marinated in special spices.', popular: false },
  { id: 16, name: 'Hot & Sour Soup', category: 'Soups & Salads', price: 'Rs. 230', desc: 'Classic spicy and tangy chicken soup.', popular: false },
  { id: 17, name: 'Russian Salad', category: 'Soups & Salads', price: 'Rs. 350', desc: 'Creamy vegetable salad with mayonnaise.', popular: false },
  { id: 18, name: 'Folsom Combo Burger', category: 'Burgers & Snacks', price: 'Rs. 395', desc: 'Our signature burger served with fries and a drink.', popular: true },
  { id: 19, name: 'Club Sandwich', category: 'Burgers & Snacks', price: 'Rs. 255', desc: 'Triple-layered sandwich with chicken and egg.', popular: false },
  { id: 20, name: 'Fried Chicken (4 Pcs)', category: 'Burgers & Snacks', price: 'Rs. 580', desc: 'Crispy deep-fried chicken pieces.', popular: false },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredMenu = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-fire/30"></div>
            <span className="label-micro">
              <Sparkles size={10} /> Full Menu <Sparkles size={10} />
            </span>
            <div className="h-px w-12 bg-fire/30"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-text uppercase tracking-tight leading-tight mb-12"
          >
            A Taste of <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">Perfection</span>
          </motion.h3>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-16">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
            <input
              type="text"
              placeholder="Search our secret recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background/40 backdrop-blur-xl border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-text placeholder-text-muted focus:outline-none focus:border-primary transition-all shadow-2xl font-medium tracking-wide"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-[0_10px_30px_rgba(230,57,70,0.3)] scale-110'
                    : 'bg-white/5 text-text-muted hover:text-primary border border-white/5 hover:border-primary/30 hover:bg-primary/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="bg-background/40 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/5 hover:border-secondary/30 cursor-pointer group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 relative overflow-hidden will-change-transform"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-display font-bold text-text uppercase tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                    {item.name}
                    {item.popular && <Flame size={18} className="text-fire animate-pulse" />}
                  </h4>
                  <span className="text-xl font-display font-bold text-secondary tracking-tight">{item.price}</span>
                </div>
                <p className="text-text-muted text-lg leading-relaxed line-clamp-2 font-medium tracking-wide">{item.desc}</p>
                
                {/* Hover Highlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredMenu.length === 0 && (
          <div className="text-center text-text-muted py-20 font-display text-2xl uppercase tracking-widest opacity-50">
            No dishes found matching your search.
          </div>
        )}
      </div>

      {/* Item Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background/80 backdrop-blur-3xl border border-white/10 p-12 rounded-[3rem] max-w-xl w-full relative shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-8 right-8 text-text-muted hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="label-micro bg-primary/10 px-4 py-2 rounded-xl">
                    {selectedItem.category}
                  </span>
                  {selectedItem.popular && (
                    <span className="label-micro bg-fire px-4 py-2 rounded-xl flex items-center gap-2 text-white">
                      <Flame size={14} className="animate-pulse" /> Popular
                    </span>
                  )}
                </div>
                <h3 className="text-5xl font-display font-bold text-text uppercase tracking-tight mb-4 leading-tight">{selectedItem.name}</h3>
                <p className="text-3xl font-display font-bold text-primary tracking-tight mb-8">{selectedItem.price}</p>
                <p className="text-text-muted text-xl leading-relaxed font-medium tracking-wide">{selectedItem.desc}</p>
              </div>
              
              <button className="group relative w-full py-5 bg-primary text-white font-black uppercase tracking-[0.3em] text-xs rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(230,57,70,0.4)]">
                <span className="relative z-10">Add to Order</span>
                <div className="absolute inset-0 bg-fire translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
