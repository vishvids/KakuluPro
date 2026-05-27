import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import { ProductImage } from './ProductImage';
import { Plus, Minus, ShoppingBag, Leaf, HelpCircle, Check, Info, AlertCircle } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
  cart: CartItem[];
  onAddToCart: (product: Product, weight: string, quantity: number) => void;
  onRemoveFromCart: (product: Product, weight: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  cart,
  onAddToCart,
  onRemoveFromCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mushrooms' | 'dehydrated' | 'snacks'>('all');
  const [selectedWeights, setSelectedWeights] = useState<{ [productId: string]: string }>({});
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>({});
  const [activeInfoId, setActiveInfoId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories: { id: typeof selectedCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'mushrooms', label: 'Fresh Mushrooms' },
    { id: 'dehydrated', label: 'Dehydrated Specials' },
    { id: 'snacks', label: 'Crispy Snacks' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const getWeightSelection = (productId: string, options: string[]) => {
    return selectedWeights[productId] || options[0];
  };

  const handleWeightChange = (productId: string, weight: string) => {
    setSelectedWeights(prev => ({ ...prev, [productId]: weight }));
  };

  const getQuantity = (productId: string) => {
    return quantities[productId] || 1;
  };

  const adjustQuantity = (productId: string, delta: number) => {
    const current = getQuantity(productId);
    const updated = Math.max(1, current + delta);
    setQuantities(prev => ({ ...prev, [productId]: updated }));
  };

  const handleAddToPlanner = (product: Product) => {
    const selectedWeight = getWeightSelection(product.id, product.weightOptions);
    const quantity = getQuantity(product.id);
    onAddToCart(product, selectedWeight, quantity);
    
    // Feedback toast
    setToastMessage(`Added ${quantity}x ${product.name} (${selectedWeight}) to PickMe planner`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-12">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A3C34] text-[#FAF9F6] py-3 px-6 rounded-none shadow-2xl border border-[#D4A373] flex items-center gap-3 animate-bounce">
          <div className="bg-[#D4A373] p-1 rounded-none text-[#1A3C34]">
            <Check size={14} strokeWidth={3} />
          </div>
          <span className="text-xs font-black uppercase tracking-wider">{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#D4A373] font-black font-mono">Premium Fresh and Dried Goods</span>
        <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-[#1A3C34] uppercase">Our Gourmet Catalog</h1>
        <p className="text-[#4A5D4E] text-sm max-w-2xl leading-relaxed">
          Order 100% natural mushrooms cultivated organically, vacuum-sealed gourmet solar-dehydrated fruits, traditional Del/Jack curries base, and Ambul banana snacks.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#1A3C34]/10 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-none transition cursor-pointer border ${
              selectedCategory === cat.id
                ? 'bg-[#1A3C34] text-[#FAF9F6] border-[#1A3C34] shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900 border-stone-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const activeWeight = getWeightSelection(product.id, product.weightOptions);
          const activePrice = product.priceLKR[activeWeight];
          const activeQty = getQuantity(product.id);
          const isInfoOpen = activeInfoId === product.id;

          return (
            <div
              key={product.id}
              className="bg-white rounded-none border border-[#1A3C34]/10 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Product Info Overlay Modal */}
              {isInfoOpen && (
                <div className="absolute inset-0 bg-[#FAF9F6] z-20 p-6 flex flex-col justify-between overflow-y-auto animate-fade-in border border-[#1A3C34]">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] uppercase tracking-widest text-[#D4A373] font-bold font-mono">
                        Nutritional Facts & Details
                      </span>
                      <button
                        onClick={() => setActiveInfoId(null)}
                        className="text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white text-[10px] font-black tracking-widest py-1 px-2.5 bg-stone-200/50 rounded-none cursor-pointer border border-[#1A3C34]/10"
                      >
                        CLOSE [X]
                      </button>
                    </div>
                    <h4 className="font-display font-black text-xl text-[#1A3C34] uppercase tracking-tight">{product.name}</h4>
                    <p className="text-xs text-[#4A5D4E] leading-relaxed">{product.longDescription}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-black uppercase text-[#1A3C34] tracking-wider">Benefits:</p>
                      <ul className="space-y-1.5">
                        {product.benefits.map((b, i) => (
                          <li key={i} className="text-xs text-[#4A5D4E] flex items-start gap-2">
                            <span className="text-[#D4A373] mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs font-black uppercase text-[#1A3C34] tracking-wider">Culinary Use:</p>
                      <p className="text-xs text-stone-500 italic mt-1 leading-relaxed">{product.usage}</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                {/* SVG Image container */}
                <div className="aspect-square bg-[#F9F7F2] border-b border-[#1A3C34]/10 flex items-center justify-center p-6 relative overflow-hidden">
                  <ProductImage type={product.imagePlaceholder} className="w-4/5 h-4/5 transition-transform duration-300 group-hover:scale-105" />
                  
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-[#1A3C34] text-[#FAF9F6] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5">
                    {product.categoryLabel}
                  </span>
                  
                  {/* Detailed nutritional facts toggle button */}
                  <button
                    onClick={() => setActiveInfoId(product.id)}
                    className="absolute top-4 right-4 bg-white hover:bg-[#1A3C34] text-[#1A3C34] hover:text-white p-2.5 rounded-none border border-[#1A3C34]/15 shadow-sm transition cursor-pointer"
                    title="View details & benefits"
                  >
                    <Info size={14} />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  {/* Title & short description */}
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-xl text-[#1A3C34] tracking-tight uppercase leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[#4A5D4E] text-xs line-clamp-2 min-h-8">
                      {product.description}
                    </p>
                  </div>

                  {/* Weight Swapper options */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4A373] font-bold uppercase block">
                      Select Package Size:
                    </span>
                    <div className="flex gap-2">
                      {product.weightOptions.map((wt) => (
                        <button
                          key={wt}
                          onClick={() => handleWeightChange(product.id, wt)}
                          className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-none transition border cursor-pointer ${
                            activeWeight === wt
                              ? 'bg-[#1A3C34] border-[#1A3C34] text-white'
                              : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                          }`}
                        >
                          {wt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Buy selectors */}
              <div className="p-6 pt-0 border-t border-[#1A3C34]/10 mt-4 space-y-4">
                {/* Price and Quantity selectors */}
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-[9px] text-[#4A5D4E] uppercase tracking-wider block font-bold">Price LKR ({activeWeight})</span>
                    <span className="text-xl font-black text-[#1A3C34] font-mono">
                      LKR {activePrice.toLocaleString()}
                    </span>
                  </div>
                  
                  {/* Qty Counter */}
                  <div className="flex items-center border border-[#1A3C34]/20 rounded-none overflow-hidden bg-stone-50">
                    <button
                      onClick={() => adjustQuantity(product.id, -1)}
                      className="px-2.5 py-2 hover:bg-stone-200 transition text-[#1A3C34] font-bold cursor-pointer"
                    >
                      <Minus size={11} strokeWidth={2.5} />
                    </button>
                    <span className="px-3 text-xs font-extrabold text-[#1A3C34] font-mono">
                      {activeQty}
                    </span>
                    <button
                      onClick={() => adjustQuantity(product.id, 1)}
                      className="px-2.5 py-2 hover:bg-stone-200 transition text-[#1A3C34] font-bold cursor-pointer"
                    >
                      <Plus size={11} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                {/* Main add CTA */}
                <button
                  onClick={() => handleAddToPlanner(product)}
                  className="w-full bg-[#1A3C34] hover:bg-[#2A4D45] text-white font-black text-xs uppercase tracking-widest py-3.5 px-4 rounded-none flex items-center justify-center gap-2 transition duration-200 shadow-sm cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  <span>Add To PickMe Planner</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Informative advice on ordering */}
      <div className="bg-[#F9F7F2] rounded-none p-5 border border-[#1A3C34]/10 flex flex-col md:flex-row items-start gap-4">
        <AlertCircle className="text-[#D4A373] mt-1 shrink-0" size={20} />
        <div>
          <h5 className="font-black text-[#1A3C34] text-sm uppercase tracking-wider">PickMe Fresh Stock Disclaimer</h5>
          <p className="text-xs text-[#4A5D4E] mt-1 leading-relaxed">
            Kakulu Malli preserves strict seasonal freshness! If you find any item currently labeled as out-of-stock inside the PickMe Sri Lanka application, we might be curing a fresh crop at our solar facility. Feel free to contact our support desk via our contact portal or WhatsApp for special advance orders!
          </p>
        </div>
      </div>
    </div>
  );
};
