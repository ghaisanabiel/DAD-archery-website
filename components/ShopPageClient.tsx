'use client';

import { useState } from 'react';
import { ProductCategory, products } from '@/data/products';
import ProductCard from './ProductCard';

const categories: Array<ProductCategory | 'All'> = ['All', 'Bow', 'Arrow', 'Accessories', 'Training Equipment'];

export default function ShopPageClient() {
  const [category, setCategory] = useState<ProductCategory | 'All'>('All');

  const filtered = category === 'All' ? products : products.filter((p) => p.category === category);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 border text-xs font-mono uppercase tracking-widest2 transition-colors ${
              category === c ? 'border-gold text-gold' : 'border-white/10 text-mist hover:border-white/30'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
