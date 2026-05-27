import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#1A3C34]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <div 
              onClick={() => setActiveTab('home')}
              className="group cursor-pointer flex items-center gap-2"
            >
              <div className="relative bg-[#1A3C34] text-[#F9D423] p-2.5 rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Leaf className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-tighter text-[#1A3C34] block leading-none">
                  KAKULU MALLI
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D4A373] font-bold font-mono">
                  Pure Natural Taste
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`font-sans text-xs font-bold uppercase tracking-widest py-2 px-1 relative transition-colors duration-200 cursor-pointer ${
                  activeTab === item.id 
                    ? 'text-[#1A3C34]' 
                    : 'text-[#1A3C34]/40 hover:text-[#1A3C34]'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A3C34] rounded-full" />
                )}
              </button>
            ))}

            {/* Float Order Assistant indicators */}
            <button
              onClick={() => {
                setActiveTab('products');
                // Scroll down to instructions / order planner
                setTimeout(() => {
                  const el = document.getElementById('pickme-instructions-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-[#1A3C34] hover:bg-[#2A4D45] text-[#FAF9F6] font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-none flex items-center gap-2 transition duration-200 shadow-sm cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag size={14} />
                {cartCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-[#F9D423] text-stone-950 font-black text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>PickMe Cart</span>
            </button>
          </div>

          {/* Mobile Hamburguer button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => {
                setActiveTab('products');
                setTimeout(() => {
                  const el = document.getElementById('pickme-instructions-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-[#F9D423] text-[#1A3C34] p-2.5 rounded-md relative"
              aria-label="View Order Planner"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1A3C34] text-white font-black text-[8px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A3C34] hover:text-stone-900 p-2 rounded-lg cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#1A3C34]/10 shadow-lg px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left font-display font-black text-lg py-3 px-4 transition ${
                activeTab === item.id 
                  ? 'bg-[#1A3C34] text-white' 
                  : 'text-[#1A3C34]/70 hover:bg-stone-100'
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => {
              setActiveTab('products');
              setIsOpen(false);
              setTimeout(() => {
                const el = document.getElementById('pickme-instructions-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="w-full bg-[#F9D423] text-[#1A3C34] font-black uppercase tracking-wider py-3.5 px-4 rounded-none flex items-center justify-center gap-2 transition"
          >
            <ShoppingBag size={18} />
            <span>Open PickMe Order Planner ({cartCount})</span>
          </button>
        </div>
      )}
    </nav>
  );
};
