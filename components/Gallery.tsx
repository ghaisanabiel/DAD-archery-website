import Image from 'next/image';

const galleryItems = [
  { src: 'https://asset.inilahkoran.id/uploads/images/2026/02/image_750x500_6992fa9d36c20.webp', category: 'Training', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=900&auto=format&fit=crop', category: 'Competition', span: '' },
  { src: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=900&auto=format&fit=crop', category: 'Events', span: '' },
  { src: 'https://images.unsplash.com/photo-1516934024742-b461ee5df267?q=80&w=900&auto=format&fit=crop', category: 'Community', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1584824388878-6f9c7c1c9b30?q=80&w=900&auto=format&fit=crop', category: 'Training', span: '' },
  { src: 'https://images.unsplash.com/photo-1600679472233-92c9187c8a1c?q=80&w=900&auto=format&fit=crop', category: 'Competition', span: '' },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-3">
      {galleryItems.map((item, i) => (
        <div key={i} className={`relative group overflow-hidden ${item.span}`}>
          <Image
            src={item.src}
            alt={item.category}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-xs font-mono uppercase tracking-widest2 text-gold">{item.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
