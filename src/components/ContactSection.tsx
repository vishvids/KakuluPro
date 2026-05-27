import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'General Inquiry'
      });
    }, 4000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-16">
      {/* 1. Header with subtle badges */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#D4A373] font-black font-mono">Get in Touch with Kakulu Malli</span>
        <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-[#1A3C34] uppercase">We'd Love to Hear From You</h1>
        <p className="text-[#4A5D4E] text-sm max-w-2xl leading-relaxed font-normal">
          Have wholesale inquiries, bulk dehydrated fruit requests, or questions regarding our instant PickMe coverage? Drop us a line we deliver response fast.
        </p>
      </div>

      {/* 2. Form + Coordinates Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Cards block */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#F9F7F2] p-8 rounded-none border border-[#1A3C34]/10 shadow-sm space-y-4">
            <h3 className="font-display font-black text-xl text-[#1A3C34] uppercase tracking-tight">Operations Office</h3>
            <p className="text-[#4A5D4E] text-xs leading-relaxed">
              Our packaging and delivery consolidation desk manages rapid fresh dispatches across Colombo and immediate Gampaha outskirts.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#1A3C34]/10">
              <div className="flex gap-3.5 items-start">
                <div className="text-white bg-[#1A3C34] p-2.5 rounded-none shrink-0 border border-[#1A3C34]/10">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]">Distribution HQ</p>
                  <p className="text-xs text-[#4A5D4E] mt-0.5">No. 118, Kandy Road, Kadawatha, Sri Lanka.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="text-white bg-[#1A3C34] p-2.5 rounded-none shrink-0 border border-[#1A3C34]/10">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]">Direct Delivery Hotline</p>
                  <p className="text-xs text-[#4A5D4E] mt-0.5">+94 77 248 1902</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="text-white bg-[#1A3C34] p-2.5 rounded-none shrink-0 border border-[#1A3C34]/10">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]">Email Inquiries</p>
                  <p className="text-xs text-[#4A5D4E] mt-0.5">hello@kakulumalli.com</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="text-white bg-[#1A3C34] p-2.5 rounded-none shrink-0 border border-[#1A3C34]/10">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]">Support Hours</p>
                  <p className="text-xs text-[#4A5D4E] mt-0.5">Monday – Sunday: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special PickMe Quick Access Callout */}
          <div className="bg-[#F9D423] p-6 rounded-none text-stone-950 space-y-3 border border-[#1A3C34]/10">
            <h4 className="font-display font-black text-lg uppercase tracking-tight">Looking to Buy Right Now?</h4>
            <p className="text-stone-850 text-xs leading-relaxed">
              Wholesale inquiries can take up to 24 hours. For retail cravings of Fresh Button Mushrooms or crunchy Banana Chips to satisfy your evening snack time, search for **Kakulu Malli** on the PickMe Food app immediately!
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-950 underline leading-none pt-1">
              <span>Launch PickMe Sri Lanka portal</span>
              <ExternalLink size={12} />
            </div>
          </div>
        </div>

        {/* Action Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-none border border-[#1A3C34]/10 shadow-sm relative">
          {isSubmitted ? (
            <div className="absolute inset-0 bg-white/95 rounded-none z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in border border-[#1A3C34]/10">
              <div className="text-[#1A3C34] bg-[#FAF9F6] border border-[#1A3C34]/15 p-4 rounded-none mb-4">
                <CheckCircle size={44} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-black text-2xl text-[#1A3C34] uppercase tracking-tight">Inquiry Sent Successfully!</h3>
              <p className="text-[#4A5D4E] text-xs max-w-sm mt-2 leading-relaxed font-normal">
                Thank you for messaging Kakulu Malli, most appreciated! A customer care officer will phone or email you within several business hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 text-xs font-bold text-[#1A3C34] hover:underline cursor-pointer uppercase tracking-widest font-mono"
              >
                [ Send another message ]
              </button>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="font-display font-black text-xl text-[#1A3C34] border-b border-[#1A3C34]/10 pb-3 uppercase tracking-tight">
              Direct Contact & Wholesale Form
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#D4A373] tracking-widest font-mono" htmlFor="contact-name">FULL NAME</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder="Amara Perera"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#FAF9F6]/50 border border-[#1A3C34]/15 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#1A3C34] focus:ring-0"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#D4A373] tracking-widest font-mono" htmlFor="contact-email">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder="amara@gmail.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#FAF9F6]/50 border border-[#1A3C34]/15 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#1A3C34] focus:ring-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#D4A373] tracking-widest font-mono" htmlFor="contact-phone">PHONE NUMBER</label>
                <input
                  type="tel"
                  id="contact-phone"
                  placeholder="077 123 4567"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-[#FAF9F6]/50 border border-[#1A3C34]/15 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#1A3C34] focus:ring-0"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#D4A373] tracking-widest font-mono" htmlFor="contact-subject">SUBJECT</label>
                <select
                  id="contact-subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-[#FAF9F6]/50 border border-[#1A3C34]/15 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#1A3C34] focus:ring-0 font-bold text-[#1A3C34]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Wholesale Order">Wholesale / Bulks</option>
                  <option value="Distribution Request">Merchant Franchise</option>
                  <option value="Customer Feedback">Customer Support / Review</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#D4A373] tracking-widest font-mono" htmlFor="contact-message">YOUR ENQUIRY</label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="How can we assist you with our mushrooms or dehydrated products today?..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-[#FAF9F6]/50 border border-[#1A3C34]/15 rounded-none p-4 text-sm focus:outline-none focus:border-[#1A3C34] focus:ring-0 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1A3C34] hover:bg-[#2A4D45] text-white font-black uppercase tracking-widest py-3.5 px-4 rounded-none flex items-center justify-center gap-2 transition duration-200 shadow cursor-pointer text-xs"
            >
              <Send size={14} />
              <span>Submit Your Form</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
