import Image from 'next/image';
import { Product } from '@/data/products';
import { waLink } from '@/lib/whatsapp';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-range/30 border border-white/5 hover:border-gold/40 transition-all duration-300 hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:shadow-black/40 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest2 ${
            product.availability === 'In Stock'
              ? 'bg-gold text-ink'
              : product.availability === 'Pre-Order'
              ? 'bg-bone/20 text-bone'
              : 'bg-black/60 text-mist'
          }`}
        >
          {product.availability}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="eyebrow mb-1">{product.category}</p>
        <h3 className="font-display text-lg text-bone mb-1">{product.name}</h3>
        <p className="text-sm text-mist mb-3 leading-relaxed flex-1">{product.description}</p>
        <p className="font-mono text-gold text-sm mb-4">{product.price}</p>
        <a
          href={waLink(`Halo DAD Archery, saya mau tanya tentang produk ${product.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center px-5 py-2.5 border border-gold text-bone hover:bg-gold hover:text-ink font-mono text-xs uppercase tracking-widest2 transition-colors"
        >
          Ask via WhatsApp
        </a>
      </div>
    </div>
  );
}