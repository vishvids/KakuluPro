export interface Product {
  id: string;
  name: string;
  category: 'mushrooms' | 'dehydrated' | 'snacks';
  categoryLabel: string;
  description: string;
  longDescription: string;
  benefits: string[];
  usage: string;
  weightOptions: string[];
  priceLKR: { [weight: string]: number };
  imagePlaceholder: string; // fallback stylized graphics/SVG
}

export type ActiveTab = 'home' | 'products' | 'about' | 'contact';

export interface CartItem {
  product: Product;
  selectedWeight: string;
  quantity: number;
}
