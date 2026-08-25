export type ProductCategory = 'Bow' | 'Arrow' | 'Accessories' | 'Training Equipment';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  price: string;
  description: string;
  specs?: string[];
  availability: 'In Stock' | 'Pre-Order' | 'Out of Stock';
  image: string;
}

export const products: Product[] = [
  {
    slug: 'recurve-bow-pro',
    name: 'DAD Recurve Pro 68"',
    category: 'Bow',
    price: 'Rp 3.200.000',
    description: 'Recurve bow untuk latihan menengah hingga kompetisi, ILF riser + limb carbon-foam.',
    specs: ['68 inch', 'Draw weight 18–36 lbs', 'ILF compatible'],
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'compound-bow-strike',
    name: 'DAD Compound Strike',
    category: 'Bow',
    price: 'Rp 6.500.000',
    description: 'Compound bow untuk atlet yang butuh akurasi tinggi dan let-off maksimal.',
    specs: ['Draw length adjustable', 'Let-off 80%', 'Includes sight mount'],
    availability: 'Pre-Order',
    image: 'https://images.unsplash.com/photo-1600679472233-92c9187c8a1c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'carbon-arrow-set',
    name: 'Carbon Arrow Set (12pcs)',
    category: 'Arrow',
    price: 'Rp 1.450.000',
    description: 'Set anak panah carbon spine 500–600, ringan dan konsisten untuk latihan jarak menengah.',
    specs: ['12 pcs / set', 'Spine 500–600', 'Fletching 4-inch'],
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1584824388878-6f9c7c1c9b30?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'stabilizer-set',
    name: 'Precision Stabilizer Set',
    category: 'Accessories',
    price: 'Rp 950.000',
    description: 'Long rod + side rod stabilizer untuk mengurangi vibrasi dan meningkatkan keseimbangan.',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1591491634026-3d581076c14d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'finger-tab',
    name: 'Pro Finger Tab',
    category: 'Accessories',
    price: 'Rp 320.000',
    description: 'Finger tab kulit premium dengan anchor plate, nyaman untuk sesi latihan panjang.',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    slug: 'target-butt',
    name: 'Field Target Butt 90cm',
    category: 'Training Equipment',
    price: 'Rp 1.100.000',
    description: 'Target butt standar kompetisi untuk latihan di range indoor maupun outdoor.',
    availability: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1000&auto=format&fit=crop',
  },
];
