import Image from 'next/image';
import Reveal from '@/components/Reveal';
import TrainingPageClient from '@/components/TrainingPageClient';

export const metadata = {
  title: 'Training — DAD Archery',
  description: 'Program latihan archery dari beginner hingga competition prep, dilatih oleh coach berpengalaman.',
};

export default function TrainingPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
          alt="Archer training on the range"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="target-rings" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16">
          <p className="eyebrow mb-4">Training Programs</p>
          <h1 className="font-display text-6xl md:text-7xl text-bone">LEARN ARCHERY WITH DAD</h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <TrainingPageClient />
          </Reveal>
        </div>
      </section>
    </>
  );
}
