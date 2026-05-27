import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Sun, Star, TrendingUp, Sparkles } from 'lucide-react';
import { Product, ActiveTab } from '../types';
import { ProductImage } from './ProductImage';

interface HomeProps {
  products: Product[];
  setActiveTab: (tab: ActiveTab) => void;
}

export const HomeSection: React.FC<HomeProps> = ({ products, setActiveTab }) => {
  // Let's feature 3 products on the home page for a clean bento-style design
  const featuredProducts = products.filter(p => ['fresh-white-mushrooms', 'dehydrated-mango', 'banana-chips'].includes(p.id));

  return (
    <div className="space-y-20 py-2">
      {/* 1. Hero Block */}
      <section className="relative rounded-none overflow-hidden bg-[#1A3C34] text-white p-8 md:p-16 lg:p-20 border border-[#1A3C34]">
        <div className="absolute inset-0 bg-[#FAF9F6]/5 pointer-events-none" />
        <div className="md:max-w-2xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 px-4 py-1.5 rounded-none text-[10px] font-bold text-[#D4A373] tracking-widest uppercase font-mono shadow-sm">
            <Sparkles size={12} />
            <span>Guaranteed Premium quality</span>
          </div>
          
          <h1 className="font-display text-6xl sm:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-tighter mb-8">
            PURE<br/><span className="text-[#D4A373]">NATURAL</span><br/>TASTE.
          </h1>
          
          <p className="font-sans text-stone-300 text-lg leading-relaxed font-normal">
            Elite climate-controlled <strong className="text-[#D4A373] font-bold">Fresh White Mushrooms</strong>, slow-dehydrated local tropical crops, and crispy hand-seasoned snacks delivered straight from nature to your gourmet Sri Lankan kitchen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => setActiveTab('products')}
              className="bg-[#D4A373] hover:bg-[#c39362] active:scale-98 transition text-[#1A3C34] font-black uppercase tracking-widest px-8 py-4 rounded-none flex items-center justify-center gap-2 text-xs shadow-md cursor-pointer"
            >
              <span>Explore All Items</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                setActiveTab('products');
                setTimeout(() => {
                  const el = document.getElementById('pickme-instructions-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-transparent hover:bg-white/10 border border-white/30 active:scale-98 transition text-white font-bold uppercase tracking-widest px-8 py-4 rounded-none flex items-center justify-center gap-2 text-xs cursor-pointer"
            >
              <span>Order via PickMe</span>
            </button>
          </div>
        </div>

        {/* Floating Sri Lankan Organic Accent badge */}
        <div className="absolute bottom-6 right-6 lg:right-16 lg:bottom-16 hidden md:block">
          <div className="bg-[#FAF9F6] text-[#1A3C34] p-6 rounded-none shadow-2xl border border-[#1A3C34]/15 max-w-[240px] text-left transform rotate-2 hover:rotate-0 transition duration-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#1A3C34] text-[#FAF9F6] text-[9px] font-bold font-mono px-2 py-0.5 rounded-none">100% PURE</span>
              <span className="text-[#D4A373] flex"><Sun size={12} fill="currentColor" /></span>
            </div>
            <p className="font-display font-black text-sm text-stone-900 leading-tight">No Added Sugars or Preservatives</p>
            <p className="text-xs text-[#4A5D4E] mt-1">Processed using certified clean solar dehydrators to preserve natural sweet aromas and cellular structural vitamins.</p>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars / Why Choose Us */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[#D4A373] text-xs font-bold uppercase tracking-widest font-mono">01. Forest to Table</span>
          <h2 className="font-display text-4xl font-black tracking-tighter text-[#1A3C34]">
            CRAFTING NATURE'S BEST
          </h2>
          <p className="text-[#4A5D4E] text-sm">
            At Kakulu Malli, we marry traditional Sri Lankan harvesting heritage with state-of-the-art hygiene standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F9F7F2] p-8 rounded-none border border-[#1A3C34]/10 shadow-sm hover:shadow-md transition space-y-4">
            <div className="bg-[#1A3C34] text-[#F9D423] p-4 rounded-none w-fit">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xl text-[#1A3C34] uppercase tracking-tight">100% Organic Substrates</h3>
            <p className="text-[#4A5D4E] text-sm leading-relaxed">
              Our mushrooms are bred on natural organic substrates and compost with zero artificial growth hormones or chemical pesticides.
            </p>
          </div>

          <div className="bg-[#F9F7F2] p-8 rounded-none border border-[#1A3C34]/10 shadow-sm hover:shadow-md transition space-y-4">
            <div className="bg-[#1A3C34] text-[#F9D423] p-4 rounded-none w-fit">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xl text-[#1A3C34] uppercase tracking-tight">Slow Solar Dehydration</h3>
            <p className="text-[#4A5D4E] text-sm leading-relaxed">
              Mangoes, breadfruit (del), and jack segments are carefully sliced and dehydrated in pure chambers utilizing gentle solar heat for concentrated punchy flavor.
            </p>
          </div>

          <div className="bg-[#F9F7F2] p-8 rounded-none border border-[#1A3C34]/10 shadow-sm hover:shadow-md transition space-y-4">
            <div className="bg-[#1A3C34] text-[#F9D423] p-4 rounded-none w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xl text-[#1A3C34] uppercase tracking-tight">Strict Laboratory Hygiene</h3>
            <p className="text-[#4A5D4E] text-sm leading-relaxed">
              Every package is washed, sliced, and sealed under strict laboratory conditions, keeping out contaminants and guaranteeing pristine shelf life.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Products showcase */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#1A3C34]/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4A373] font-black font-mono">02. Selected Favorites</span>
            <h2 className="font-display text-4xl font-black tracking-tighter text-[#1A3C34] mt-1">CUSTOMER FAVORITES</h2>
          </div>
          <button
            onClick={() => setActiveTab('products')}
            className="text-[#1A3C34] font-bold uppercase tracking-widest hover:text-[#2A4D45] flex items-center gap-1.5 group text-xs transition cursor-pointer"
          >
            <span>See full catalog</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-none overflow-hidden border border-[#1A3C34]/10 shadow-sm hover:shadow-md transition duration-300 flex flex-col group"
            >
              <div className="p-4 bg-[#F9F7F2] border-b border-[#1A3C34]/10 flex items-center justify-center aspect-square overflow-hidden relative">
                <ProductImage type={product.imagePlaceholder} className="w-4/5 h-4/5 transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-[#1A3C34] text-[#FAF9F6] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5">
                  {product.categoryLabel}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-[#1A3C34] leading-tight group-hover:text-[#D4A373] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#4A5D4E] text-xs leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#1A3C34]/10">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Price starts from</span>
                  <span className="text-lg font-black text-[#1A3C34] font-mono">
                    LKR {product.priceLKR[product.weightOptions[0]]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PickMe Food Highlight call-out-banner */}
      <section className="bg-[#F9D423] rounded-none p-8 md:p-12 text-stone-950 flex flex-col lg:flex-row items-center gap-8 justify-between border border-[#1A3C34]/10">
        <div className="space-y-4 max-w-xl text-center lg:text-left">
          <span className="bg-stone-950 text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 shadow-sm inline-block">
            03. Instant Sri Lankan Express
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black tracking-tighter text-stone-950 leading-none">
            CRAVING FRESHNESS? ORDER ON PICKME FOOD!
          </h2>
          <p className="text-stone-800 text-sm leading-relaxed">
            No endless wait times. We have collaborated with <strong>PickMe Food Sri Lanka</strong> so our delicious organic culinary items go from packaging bins straight to your curry pan within minutes.
          </p>
        </div>
        <button
          onClick={() => {
            setActiveTab('products');
            setTimeout(() => {
              const el = document.getElementById('pickme-instructions-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-stone-950 hover:bg-stone-850 active:scale-98 transition text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-none flex items-center gap-2 justify-center shrink-0 shadow-lg cursor-pointer"
        >
          <span>PickMe Guide</span>
          <ArrowRight size={14} />
        </button>
      </section>

      {/* 5. Review section */}
      <section className="bg-[#F9F7F2] p-8 md:p-12 rounded-none border border-[#1A3C34]/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-40 h-40 bg-white rounded-none flex items-center justify-center border-4 border-[#1A3C34]/10 shadow-md">
            <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-[#1A3C34]" fill="currentColor">
              <path d="M50 15c-19.33 0-35 15.67-35 35s15.67 35 35 35 35-15.67 35-35-15.67-35-35-35zm0 9c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm0 41c-13.31 0-24.59-8.49-28.71-20.33 1.48-5.32 6.32-9.67 12.71-9.67h32c6.39 0 11.23 4.35 12.71 9.67-4.12 11.84-15.4 20.33-28.71 20.33z" />
            </svg>
            <div className="absolute bottom-2 right-2 bg-[#F9D423] text-stone-950 px-2.5 py-0.5 rounded-none text-[9px] font-black flex items-center gap-1 border border-stone-900/10">
              <Star size={10} fill="currentColor" />
              <span>5.0 REVIEW</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <div className="flex text-[#D4A373]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-stone-850 italic text-base md:text-lg leading-relaxed">
            "Kakulu Malli's Dehydrated Del (Breadfruit) is an absolute game-changer. My family loves breadfruit curry, but it is impossible to buy fresh and peel during the off-season. Rehydrating Kakulu Malli's Del took less than 20 minutes, and the flavor in our coconut gravy was absolutely creamy and pristine. Super easy to order on PickMe!"
          </blockquote>
          <div>
            <cite className="font-extrabold text-[#1A3C34] uppercase tracking-wider not-italic block text-sm">
              Nisansala Jayasinghe
            </cite>
            <span className="text-[#4A5D4E] text-xs">Home Culinary Expert • Colombo, Sri Lanka</span>
          </div>
        </div>
      </section>
    </div>
  );
};
