import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Phone, MapPin, Instagram, Facebook, MessageSquare, Heart, ShieldCheck, Sun, Star } from 'lucide-react';

import { ActiveTab, CartItem, Product } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { PickMeInstructions } from './components/PickMeInstructions';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('kakulu_malli_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('kakulu_malli_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: Product, weight: string, quantity: number) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(
        item => item.product.id === product.id && item.selectedWeight === weight
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      } else {
        return [...prev, { product, selectedWeight: weight, quantity }];
      }
    });
  };

  const handleRemoveFromCart = (product: Product, weight: string) => {
    setCart(prev => prev.filter(
      item => !(item.product.id === product.id && item.selectedWeight === weight)
    ));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Auto scroll to top on tab modification
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] selection:bg-emerald-100 selection:text-emerald-950 font-sans">
      
      {/* 1. Dynamic Header Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        cartCount={cartCount} 
      />

      {/* 2. Main Ambient Canvas Body */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {activeTab === 'home' && (
              <HomeSection 
                products={PRODUCTS} 
                setActiveTab={handleTabChange} 
              />
            )}

            {activeTab === 'products' && (
              <div className="space-y-16">
                <ProductsSection 
                  products={PRODUCTS}
                  cart={cart}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                />
                
                {/* PickMe order instructions inlined at bottom of Products page */}
                <div className="pt-8 border-t border-stone-200">
                  <PickMeInstructions 
                    cart={cart}
                    clearCart={handleClearCart}
                  />
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <AboutSection />
            )}

            {activeTab === 'contact' && (
              <ContactSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Block */}
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Bio Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-950 p-2 rounded-lg text-[#FDAF17] inline-block">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="font-display text-lg font-extrabold tracking-tight text-white">
                  KAKULU MALLI
                </span>
              </div>
              <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
                Empowering culinary traditions with pure, hygienic, non-additive food alternatives. Cultivating Colombo's choice mushrooms and slow-dried local garden fruits.
              </p>
              <div className="text-xs text-stone-500 font-mono flex items-center gap-2">
                <span>© {new Date().getFullYear()} Kakulu Malli Foodworks.</span>
                <span>All rights reserved.</span>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-display font-medium text-white text-xs uppercase tracking-widest mb-4">Navigation</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button onClick={() => handleTabChange('home')} className="hover:text-white transition cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleTabChange('products')} className="hover:text-white transition cursor-pointer">
                    Our Products & Catalog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleTabChange('about')} className="hover:text-white transition cursor-pointer">
                    About Us Story
                  </button>
                </li>
                <li>
                  <button onClick={() => handleTabChange('contact')} className="hover:text-white transition cursor-pointer">
                    Contact & Bulk Orders
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact quick tips */}
            <div className="space-y-4">
              <h4 className="font-display font-medium text-white text-xs uppercase tracking-widest">Connect</h4>
              <p className="text-xs text-stone-400">
                Ask us any questions on WhatsApp or social handles.
              </p>
              <div className="flex gap-3 text-stone-400">
                <a href="#facebook" className="hover:text-amber-400 transition" aria-label="LinkedIn">
                  <Facebook size={18} />
                </a>
                <a href="#instagram" className="hover:text-amber-400 transition" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#whatsapp" className="hover:text-amber-400 transition" aria-label="Chat">
                  <MessageSquare size={18} />
                </a>
              </div>
              <div className="bg-stone-800 p-3 rounded-lg border border-stone-750 text-[10px] text-stone-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FDAF17] rounded-full animate-ping" />
                <span>Order via Kakulu Malli on PickMe Food Sri Lanka!</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-500 font-mono">
            <div>
              Designed with premium focus on health, sustainability, and high-fidelity aesthetics.
            </div>
            <div>
              Sri Lanka, Indian Ocean.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
