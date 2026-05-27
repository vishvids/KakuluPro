import React from 'react';
import { Leaf, Award, Compass, Heart, Users, ShieldCheck, Sun } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 1. Brand Philosophy Banner */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#D4A373] font-black font-mono">The Story of Kakulu Malli</span>
        <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-[#1A3C34] uppercase">Connecting Hearts & Organic Soil</h1>
        <p className="text-[#4A5D4E] text-sm max-w-2xl leading-relaxed">
          How a Sri Lankan brothers' farm team modernized traditional preservation to keep chemical ripening & toxic preservatives far away from Colombo tables.
        </p>
      </div>

      {/* 2. Visual Story Blocks */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373] font-mono block">Our Heritage</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[#1A3C34] tracking-tighter uppercase leading-none">
            Nurturing Livelihoods & Traditional Delicacies
          </h2>
          <p className="text-[#4A5D4E] text-sm leading-relaxed">
            "Kakulu Malli" translates fondly in Sri Lanka as a warm family callout (younger brother). True to this playful yet grounded naming, we represent a close-knit group of agricultural enthusiasts and tech professionals based in Colombo who realized a modern food tragedy:
          </p>
          <p className="text-[#1A3C34] text-sm leading-relaxed font-bold uppercase tracking-wide">
            Sri Lanka boasts incredible seasonal delicacies like Del (Breadfruit) and Kos (Jack), but fresh-cutting is highly labor-intensive, sticky with sap, and has extremely brief harvest seasons.
          </p>
          <p className="text-[#4A5D4E] text-sm leading-relaxed">
            By harnessing hygienic laboratory culture tunnels for heavy yields of <strong className="text-[#1A3C34] font-extrabold">Fresh White Mushrooms</strong>, and pairing with solar-driven, zero-added-sugar slow dehydrators, we are able to provide rural family-garden crops all year-round to city citizens via instant express services like <strong className="text-stone-900 font-extrabold">PickMe Food</strong>.
          </p>
        </div>

        {/* Decorative Grid of Key Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F9F7F2] p-8 rounded-none border border-[#1A3C34]/10">
          <div className="bg-white p-6 rounded-none border border-[#1A3C34]/10 shadow-sm space-y-2">
            <div className="text-[#F9D423] p-2 bg-[#1A3C34] w-fit mb-2"><Award size={20} /></div>
            <h4 className="font-display font-black text-sm tracking-tight text-[#1A3C34] uppercase">Premium Standards</h4>
            <p className="text-xs text-[#4A5D4E] leading-relaxed">Every pack represents climate-monitored hygiene, double-sealed for absolute shelf confidence.</p>
          </div>

          <div className="bg-white p-6 rounded-none border border-[#1A3C34]/10 shadow-sm space-y-2">
            <div className="text-[#F9D423] p-2 bg-[#1A3C34] w-fit mb-2"><Leaf size={20} /></div>
            <h4 className="font-display font-black text-sm tracking-tight text-[#1A3C34] uppercase">Empowering Farmers</h4>
            <p className="text-xs text-[#4A5D4E] leading-relaxed">We source ripe jackfruit and seasonal breadfruits directly from home gardens, providing fair income channels.</p>
          </div>

          <div className="bg-white p-6 rounded-none border border-[#1A3C34]/10 shadow-sm space-y-2">
            <div className="text-[#F9D423] p-2 bg-[#1A3C34] w-fit mb-2"><Sun size={20} /></div>
            <h4 className="font-display font-black text-sm tracking-tight text-[#1A3C34] uppercase">Eco Dehydration</h4>
            <p className="text-xs text-[#4A5D4E] leading-relaxed">By drying gently under low heat, we prevent nutrient denaturation, locking in 95% of active trace vitamins.</p>
          </div>

          <div className="bg-white p-6 rounded-none border border-[#1A3C34]/10 shadow-sm space-y-2">
            <div className="text-[#F9D423] p-2 bg-[#1A3C34] w-fit mb-2"><Users size={20} /></div>
            <h4 className="font-display font-black text-sm tracking-tight text-[#1A3C34] uppercase">PickMe Powered</h4>
            <p className="text-xs text-[#4A5D4E] leading-relaxed">Optimized logistics and dispatch tunnels so that you receive fresh button mushrooms within hours of picking!</p>
          </div>
        </div>
      </section>

      {/* 3. Detailed Processing steps */}
      <section className="bg-[#1A3C34] text-[#FAF9F6] rounded-none p-8 md:p-12 space-y-8 border border-[#1A3C34]">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4A373] font-black font-mono">Our Quality Loop</span>
          <h2 className="font-display text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">Primacy in Hygiene & Clean Nutrition</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2.5">
            <div className="mx-auto bg-[#FAF9F6]/10 text-[#D4A373] w-12 h-12 rounded-none flex items-center justify-center font-black font-mono text-sm border border-[#FAF9F6]/10">01</div>
            <h5 className="font-black text-white text-sm uppercase tracking-wider">Ethical Sourcing</h5>
            <p className="text-xs text-stone-300 leading-relaxed">Picking pristine mature organic mushrooms and chemical-free island fresh fruits.</p>
          </div>

          <div className="space-y-2.5">
            <div className="mx-auto bg-[#FAF9F6]/10 text-[#D4A373] w-12 h-12 rounded-none flex items-center justify-center font-black font-mono text-sm border border-[#FAF9F6]/10">02</div>
            <h5 className="font-black text-white text-sm uppercase tracking-wider">Peeled & Sliced</h5>
            <p className="text-xs text-stone-300 leading-relaxed">Cleaned thoroughly under spring water, carefully desapped, and sliced into perfect uniform segments.</p>
          </div>

          <div className="space-y-2.5">
            <div className="mx-auto bg-[#FAF9F6]/10 text-[#D4A373] w-12 h-12 rounded-none flex items-center justify-center font-black font-mono text-sm border border-[#FAF9F6]/10">03</div>
            <h5 className="font-black text-white text-sm uppercase tracking-wider">Clean Room Dry</h5>
            <p className="text-xs text-stone-300 leading-relaxed">Protected inside filtered solar dehydrators, denying any entry of dust, flies, or moisture spoiling.</p>
          </div>

          <div className="space-y-2.5">
            <div className="mx-auto bg-[#FAF9F6]/10 text-[#D4A373] w-12 h-12 rounded-none flex items-center justify-center font-black font-mono text-sm border border-[#FAF9F6]/10">04</div>
            <h5 className="font-black text-white text-sm uppercase tracking-wider">Oxygen-Absorb Seal</h5>
            <p className="text-xs text-stone-300 leading-relaxed">Packed immediately into UV-blocking and food-safe pouches containing natural oxygen-scavenger seals.</p>
          </div>
        </div>
      </section>

      {/* 4. Pure Sri Lankan Roots highlight */}
      <section className="text-center space-y-4 max-w-2xl mx-auto py-4 border-t border-[#1A3C34]/15">
        <p className="text-xs font-bold text-[#D4A373] tracking-widest uppercase font-mono">Ceylon Traditional Treasures</p>
        <h3 className="font-display font-black text-2xl text-[#1A3C34] uppercase tracking-tighter">Handcrafted Organics for Sri Lankan Homes</h3>
        <p className="text-[#4A5D4E] text-xs leading-relaxed font-normal">
          We want to help local residents experience delicious, rustic home cooking without the friction. Supporting Kakulu Malli directly keeps wealth within rural Sri Lankan micro-grower networks. Thank you for choosing local luxury.
        </p>
      </section>
    </div>
  );
};
