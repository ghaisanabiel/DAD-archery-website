import Image from 'next/image';
import Reveal from '@/components/Reveal';
import EventCard from '@/components/EventCard';
import { upcomingEvents, pastEvents } from '@/data/events';

export const metadata = {
  title: 'Events — DAD Archery',
  description: 'Kompetisi dan turnamen archery yang diselenggarakan dan diikuti oleh DAD Archery.',
};

const categories = ['All', 'Open Championship', 'Archery Championship', 'Archery Tournament'];

export default function EventsPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2000&auto=format&fit=crop"
          alt="Archery competition in progress"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="target-rings" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16">
          <p className="eyebrow mb-4">Archery Event</p>
          <h1 className="font-display text-6xl md:text-7xl text-bone">EVENTS</h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-4">
            <p className="eyebrow mb-4">Upcoming Events</p>
            <h2 className="font-display text-4xl md:text-5xl text-bone mb-4">Compete with us.</h2>
          </Reveal>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((c) => (
              <span
                key={c}
                className="px-4 py-2 border border-white/10 text-xs font-mono uppercase tracking-widest2 text-mist first:border-gold first:text-gold"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((e, i) => (
              <Reveal key={e.slug} delay={i * 100}>
                <EventCard event={e} large />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/5 bg-range/20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-12">
            <p className="eyebrow mb-4">Past Events</p>
            <h2 className="font-display text-4xl md:text-5xl text-bone">Where we've competed.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((e, i) => (
              <Reveal key={e.slug} delay={i * 100}>
                <div className="group flex gap-5 bg-ink/40 border border-white/5 p-5 hover:border-gold/40 transition-colors">
                  <div className="relative w-32 h-32 shrink-0 overflow-hidden">
                    <Image src={e.image} alt={e.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">{e.year}</p>
                    <h3 className="font-display text-xl text-bone mb-1">{e.name}</h3>
                    <p className="text-sm text-mist mb-2">{e.location}</p>
                    <p className="text-sm text-gold font-mono">{e.results}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
