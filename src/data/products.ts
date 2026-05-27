import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'fresh-white-mushrooms',
    name: 'Fresh White Mushrooms',
    category: 'mushrooms',
    categoryLabel: 'Mushrooms',
    description: 'Freshly harvested, tender white button mushrooms cultivated under strict hygienic, temperature-controlled conditions.',
    longDescription: 'Our signature Fresh White Mushrooms are picked daily at dawn to guarantee peak crispness and nutrient retention. Grown entirely naturally on high-grade organic substrate in our state-of-the-art facility in Sri Lanka, we avoid synthetic chemicals. They feature a beautiful pearlescent dome, dense stem, and a delicate earthy flavor that elevates local curries, Western stir-frys, and salads.',
    benefits: [
      'Excellent source of Vitamin D & B-Complex',
      'Rich in selenium and immunity-boosting antioxidants',
      'High protein, low-calorie profile ideal for fitness diets',
      'Harvested daily and delivered fresh'
    ],
    usage: 'Perfect for Sri Lankan mushroom white curries, devilled mushrooms, garlic butter sautés, soups, or as a rich meat-substitute in pastas.',
    weightOptions: ['200g', '500g'],
    priceLKR: {
      '200g': 450,
      '500g': 1050
    },
    imagePlaceholder: 'mushroom-fresh'
  },
  {
    id: 'dehydrated-mushrooms',
    name: 'Dehydrated Mushrooms',
    category: 'dehydrated',
    categoryLabel: 'Dehydration Specials',
    description: 'Premium mushrooms dehydrated at precise low temperatures to lock in intense umami taste and valuable nutrients.',
    longDescription: 'By carefully removing moisture from our freshly harvested white mushrooms, we concentrate their earthy, woodsy umami compounds. This provides a powerhouse ingredient for any pantry. Our dehydrated mushrooms can be stored for months without preservatives, ready to unleash full savory complexity in minutes of rehydration.',
    benefits: [
      'Shelf-stable for up to 12 months without artificial preservatives',
      'Intense, concentrated umami profile',
      'Retains 95% of active vitamins and minerals',
      'Rehydrates back to original plump texture in warm water'
    ],
    usage: 'Soak in hot water for 15 minutes before adding to gravies, risottos, broths, hot pots, or baking into savory pastries.',
    weightOptions: ['50g', '100g'],
    priceLKR: {
      '50g': 650,
      '100g': 1200
    },
    imagePlaceholder: 'mushroom-dehydrated'
  },
  {
    id: 'dehydrated-mango',
    name: 'Dehydrated Mango',
    category: 'dehydrated',
    categoryLabel: 'Dehydration Specials',
    description: 'Chewy, tangy-sweet slices of sun-ripened Sri Lankan mango. No added sugar, colors, or sulfur.',
    longDescription: 'We select choice Sri Lankan mangoes (like TomEJC and Karthacolomban) at their peak ripeness. Each mango is carefully washed, sliced, and slow-dehydrated. This preserves the bright golden color, soft chewy bite, and addictive tropical tart-sweetness. This is a guilt-free gourmet snack containing nothing but 100% natural fruit.',
    benefits: [
      'Zero added sugars, syrups, sulfur dioxide, or chemical preservatives',
      'High in dietary fiber and essential Vitamin A & C',
      'Natural energy booster for kids, hikers, and active lifestyles',
      'Convenient travel-safe pouch'
    ],
    usage: 'Eat straight out of the package as a nutritious snack, chop into breakfast oatmeal and yogurt, or pair with dark chocolate and nuts.',
    weightOptions: ['100g', '200g'],
    priceLKR: {
      '100g': 850,
      '200g': 1600
    },
    imagePlaceholder: 'mango-dehydrated'
  },
  {
    id: 'dehydrated-del',
    name: 'Dehydrated Del (Breadfruit)',
    category: 'dehydrated',
    categoryLabel: 'Dehydration Specials',
    description: 'Traditional Sri Lankan Breadfruit, cut and dry-crafted. Rehydrates into rich, creamy slices.',
    longDescription: 'Del (Breadfruit) is a seasonal Sri Lankan classic beloved for its rich, starchy, buttery-cream core. Since fresh breadfruit perishes quickly and is seasonal, Kakulu Malli natural dehydration makes Del available in your kitchen year-round. Dried under clean-room conditions, it regains its melt-in-the-mouth texture when simmered in coconut milk.',
    benefits: [
      'Enjoy seasonal Sri Lankan Del all year round',
      'Cleansed, peeled, sliced, and ready to cook—no messy prep required',
      'Rich in complex carbohydrates, fiber, and potassium',
      '100% locally sourced from village home-gardens'
    ],
    usage: 'Soak in warm, salt-water for 20-30 minutes, then simmer with roasted curry powder, coconut milk, and onions for an authentic Del Curry.',
    weightOptions: ['150g', '300g'],
    priceLKR: {
      '150g': 750,
      '300g': 1400
    },
    imagePlaceholder: 'del-dehydrated'
  },
  {
    id: 'dehydrated-jack',
    name: 'Dehydrated Jack (Jackfruit / Kos)',
    category: 'dehydrated',
    categoryLabel: 'Dehydration Specials',
    description: 'Pristine segments of mature Sri Lankan Jackfruit (Kos), dehydrated to bring traditional village goodness to your urban kitchen.',
    longDescription: 'Jackfruit is Sri Lanka’s ultimate superfood, traditionally dubbed "the rice tree" because of its power to nourish. We select mature yellow-gold Jackfruit bulbs, slice them finely, and dehydrate them gently. They are clean, dry, and packed with complex fibers, making a highly nutritious basis for iconic domestic recipes without needing fresh-cutting labor.',
    benefits: [
      'Highly starchy, filling, and low glycemic index superfood',
      'Long-lasting storage, saving you from tedious jackfruit cutting and sap cleanup',
      'High prebiotics supporting gut-biome health',
      'Free from chemical ripening agents or bleach'
    ],
    usage: 'Rehydrate in warm water for 25 minutes. Steam with grated coconut for “Kos Mallum” or cook slowly with spices for a delicious, thick country curry.',
    weightOptions: ['150g', '300g'],
    priceLKR: {
      '150g': 800,
      '300g': 1500
    },
    imagePlaceholder: 'jack-dehydrated'
  },
  {
    id: 'banana-chips',
    name: 'Banana Chips (Sri Lankan Style)',
    category: 'snacks',
    categoryLabel: 'Snacks & Bites',
    description: 'Crisp, savor-salted thin cut slices of local Ambul bananas, fried in premium pure coconut oil.',
    longDescription: 'Our Banana Chips boast the absolute best of local Sri Lankan snacking. We harvest fresh organic Ambul Bananas, slice them wafer-thin, and kettle-fry them immediately in 100% pure, wood-pressed coconut oil. A light seasoning of sea salt and a touch of local black pepper gives them a phenomenal crunch, combining natural banana sweetness with highly addictive savory notes.',
    benefits: [
      'Fried exclusively in wood-press premium coconut oil to ensure zero trans-fats',
      'Seasoned strictly with trace natural sea salt and crushed back-pepper',
      'Lightly sweet, savory, and incredibly crispy',
      'Sourced from local rural micro-farms in Sri Lanka'
    ],
    usage: 'Enjoy as a satisfying evening snack paired with Ceylon Tea, a crunchy side for your lunch, or an elegant party bite.',
    weightOptions: ['100g', '200g'],
    priceLKR: {
      '100g': 400,
      '200g': 750
    },
    imagePlaceholder: 'banana-chips'
  }
];
