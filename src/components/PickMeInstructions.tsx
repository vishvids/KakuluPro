import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, ArrowRight, Clipboard, Check, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface PickMeProps {
  cart: CartItem[];
  clearCart: () => void;
}

export const PickMeInstructions: React.FC<PickMeProps> = ({ cart, clearCart }) => {
  const [copied, setCopied] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.product.priceLKR[item.selectedWeight];
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartMessage = () => {
    if (cart.length === 0) return "Please search 'Kakulu Malli' directly on PickMe Food Sri Lanka to explore our fresh stock!";
    
    let message = `Hello Kakulu Malli! I would like to order the following items via PickMe Food:\n\n`;
    cart.forEach(item => {
      message += `• ${item.product.name} (${item.selectedWeight}) x ${item.quantity}\n`;
    });
    message += `\nTotal Estimated Price: LKR ${calculateTotal().toLocaleString()}`;
    return message;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCartMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FAF9F6] border border-[#1A3C34]/10 rounded-none overflow-hidden shadow-sm" id="pickme-instructions-section">
      {/* PickMe Yellow & Black Header banner */}
      <div className="bg-[#F9D423] text-stone-950 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#1A3C34]/10">
        <div className="flex items-center gap-4">
          <div className="bg-[#1A3C34] text-[#F9D423] font-black text-2xl tracking-tighter w-14 h-14 rounded-none flex items-center justify-center border border-[#1A3C34]/10 shadow-md select-none">
            Pick
            <span className="text-white">Me</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-stone-900 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-none font-mono">
                Sri Lanka's No. 1 Carrier
              </span>
            </div>
            <h3 className="font-display text-3xl font-black mt-1 text-stone-950 uppercase tracking-tight">Order via PickMe Food</h3>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-xs font-black uppercase tracking-wider text-stone-900">Fresh Stock Available Daily</p>
          <div className="flex items-center gap-1.5 mt-1.5 text-white font-extrabold bg-[#1A3C34] px-4 py-1.5 rounded-none text-[10px] uppercase tracking-widest border border-stone-900/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Accepting Orders Now
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Step-by-step instructions */}
        <div className="lg:col-span-7 space-y-6">
          <h4 className="font-display font-black text-2xl text-[#1A3C34] uppercase tracking-tighter">
            How to Place Your Order
          </h4>

          <div className="relative border-l-2 border-[#1A3C34]/10 pl-6 ml-3 space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-[#1A3C34] text-white font-black text-xs w-6 h-6 rounded-none flex items-center justify-center border border-[#1A3C34]/10 shadow-sm">
                1
              </div>
              <h5 className="font-black text-[#1A3C34] text-sm uppercase tracking-wider flex items-center gap-2">
                Open PickMe App
              </h5>
              <p className="text-[#4A5D4E] text-xs mt-1 leading-relaxed">
                Unlock your smartphone, launch the <strong>PickMe</strong> application. Make sure your location is set to your school, home, or office address in Sri Lanka (Colombo, Gampaha, Kandy and suburbs).
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-[#1A3C34] text-white font-black text-xs w-6 h-6 rounded-none flex items-center justify-center border border-[#1A3C34]/10 shadow-sm">
                2
              </div>
              <h5 className="font-black text-[#1A3C34] text-sm uppercase tracking-wider flex items-center gap-2">
                Navigate to 'Food'
              </h5>
              <p className="text-[#4A5D4E] text-xs mt-1 leading-relaxed">
                Tap on the <span className="font-bold text-[#1A3C34]">Food</span> or <span className="font-bold text-[#1A3C34]">Market</span> category tile inside the app dashboard to access local merchant menus.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-[#1A3C34] text-white font-black text-xs w-6 h-6 rounded-none flex items-center justify-center border border-[#1A3C34]/10 shadow-sm">
                3
              </div>
              <h5 className="font-black text-[#1A3C34] text-sm uppercase tracking-wider flex items-center gap-2">
                Search for "Kakulu Malli"
              </h5>
              <p className="text-[#4A5D4E] text-xs mt-1 font-sans leading-relaxed">
                Type <span className="bg-[#F9D423] text-stone-950 px-2 py-0.5 rounded-none font-mono font-bold">Kakulu Malli</span> in the top search bar. Select our store from the merchant search result list to open the product catalog.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-[#1A3C34] text-white font-black text-xs w-6 h-6 rounded-none flex items-center justify-center border border-[#1A3C34]/10 shadow-sm">
                4
              </div>
              <h5 className="font-black text-[#1A3C34] text-sm uppercase tracking-wider">
                Select Weights & Checkout
              </h5>
              <p className="text-[#4A5D4E] text-xs mt-1 leading-relaxed">
                Add your desired quantity of fresh button mushrooms, dehydrated breadfruit (del), dehydrated mango, or crispy banana chips, and hit <strong className="text-stone-900 font-extrabold">Place Order</strong>!
              </p>
            </div>
          </div>

          <div className="bg-[#F9F7F2] p-4 rounded-none border border-[#1A3C34]/10 flex items-start gap-3">
            <MapPin className="text-[#1A3C34] mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-xs font-black uppercase text-[#1A3C34] tracking-wider">Coverage & Timing</p>
              <p className="text-xs text-[#4A5D4E] mt-0.5 leading-relaxed">
                We deliver throughout Colombo district and surrounding suburbs daily from <strong>8:00 AM to 8:00 PM</strong>. Fresh stocks vanish fast, so morning orders are highly recommended!
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Cart Summary / Copy details helper */}
        <div className="lg:col-span-5 bg-white p-6 rounded-none border border-[#1A3C34]/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#1A3C34]/10 pb-4 mb-4">
              <h4 className="font-black text-[#1A3C34] flex items-center gap-2 uppercase text-sm tracking-tight">
                <ShoppingBag size={18} className="text-[#1A3C34]" />
                <span>Your Order Assistant</span>
              </h4>
              <span className="text-[10px] text-[#D4A373] bg-[#1A3C34] font-bold px-2 py-0.5 rounded-none font-mono">
                {cart.length} ITEM{cart.length !== 1 ? 'S' : ''}
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-10">
                <div className="bg-stone-50 rounded-none border border-stone-200/60 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-stone-300">
                  <ShoppingBag size={24} />
                </div>
                <p className="text-stone-500 text-xs font-bold uppercase tracking-wider">Your order assistant is empty.</p>
                <p className="text-stone-400 text-xs mt-1">Select weights & add items on our Product tab to plan your PickMe purchase!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-[#4A5D4E] leading-relaxed">
                  We have organized your selected items below. Copy this list so you can easily cross-reference while stocking your food basket inside the PickMe app!
                </p>
                
                {/* Scrollable checklist items */}
                <div className="max-h-48 overflow-y-auto space-y-2.5 pr-1">
                  {cart.map((item, idx) => (
                    <div key={`${item.product.id}-${item.selectedWeight}-${idx}`} className="flex justify-between items-center bg-[#F9F7F2] p-2.5 rounded-none border border-[#1A3C34]/10">
                      <div>
                        <p className="text-xs font-black uppercase text-[#1A3C34] tracking-tight">{item.product.name}</p>
                        <p className="text-[10px] text-[#4A5D4E] font-mono">{item.selectedWeight} • LKR {item.product.priceLKR[item.selectedWeight]} each</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-stone-700 bg-stone-200/60 px-2 py-0.5">
                          Qty: {item.quantity}
                        </span>
                        <p className="text-xs font-black text-[#1A3C34] mt-1 font-mono">
                          LKR {(item.product.priceLKR[item.selectedWeight] * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1A3C34] text-white p-3.5 rounded-none border border-[#1A3C34] mt-4">
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                    <span>Estimated Total</span>
                    <span className="text-sm font-mono text-[#F9D423]">LKR {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                {/* Text area with copy code */}
                <div className="mt-4 relative bg-[#FAF9F6] text-[#1A3C34] text-[11px] p-4.5 rounded-none border border-[#1A3C34]/20 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {getCartMessage()}
                </div>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-6 space-y-2">
              <button
                onClick={handleCopy}
                className="w-full bg-[#1A3C34] hover:bg-[#2A4D45] text-white transition active:scale-98 font-black uppercase tracking-widest py-3.5 px-4 rounded-none flex items-center justify-center gap-2 text-xs shadow cursor-pointer border border-[#1A3C34]"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#F9D423]" />
                    <span>Summary Copied!</span>
                  </>
                ) : (
                  <>
                    <Clipboard size={14} />
                    <span>Copy Order To Clipboard</span>
                  </>
                )}
              </button>
              <button
                onClick={clearCart}
                className="w-full text-center text-[10px] uppercase font-black tracking-widest text-[#4A5D4E] hover:text-[#1A3C34] transition cursor-pointer"
              >
                [ Clear list and start fresh ]
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
