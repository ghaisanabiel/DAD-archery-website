import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ShopPageClient from '@/components/ShopPageClient';

export const metadata = {
  title: 'Shop — DAD Archery',
  description: 'Bow, arrow, accessories, dan training equipment archery dari DAD Archery.',
};

export default function ShopPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000&auto=format&fit=crop"
          alt="Archery equipment close-up"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="target-rings" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16">
          <p className="eyebrow mb-4">Shop</p>
          <h1 className="font-display text-6xl md:text-7xl text-bone">ARCHERY EQUIPMENT</h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <ShopPageClient />
          </Reveal>
        </div>
      </section>
    </>
  );
}
