import { stats } from '@/data/achievements';
import Reveal from './Reveal';

const values = [
  { title: 'Professional Training', desc: 'Kurikulum terstruktur dari dasar hingga tingkat kompetisi.' },
  { title: 'Competition Experience', desc: 'Aktif menyelenggarakan dan mengikuti turnamen nasional.' },
  { title: 'Community', desc: 'Komunitas archery yang suportif dan aktif berlatih bersama.' },
  { title: 'Equipment', desc: 'Akses langsung ke peralatan archery berkualitas.' },
  { title: 'Experienced Coaches', desc: 'Dilatih oleh pelatih bersertifikasi dan berpengalaman.' },
];

export default function WhyDad() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Why DAD Archery</p>
          <h2 className="font-display text-4xl md:text-5xl text-bone max-w-2xl">
            Built by archers, for archers.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <p className="font-mono text-gold text-xs mb-2">0{i + 1}</p>
                <h3 className="font-display text-xl text-bone mb-2">{v.title}</h3>
                <p className="text-sm text-mist leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-10 md:border-l md:border-white/5 md:pl-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <p className="font-display text-5xl text-gold">{s.value}</p>
                <p className="text-sm text-mist font-mono uppercase tracking-widest2 mt-1">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
