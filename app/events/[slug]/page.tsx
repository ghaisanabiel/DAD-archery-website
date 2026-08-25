import Image from 'next/image';
import { notFound } from 'next/navigation';
import { upcomingEvents, pastEvents } from '@/data/events';
import Reveal from '@/components/Reveal';
import { waLink } from '@/lib/whatsapp';

const allEvents = [...upcomingEvents, ...pastEvents];

export function generateStaticParams() {
  return allEvents.map((e) => ({ slug: e.slug }));
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = allEvents.find((e) => e.slug === params.slug);
  if (!event) notFound();

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src={event.image} alt={event.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative z-10 mx-auto max-w-5xl w-full px-6 md:px-10 pb-16">
          <p className="eyebrow mb-4">{event.category}</p>
          <h1 className="font-display text-5xl md:text-6xl text-bone">{event.name}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal className="md:col-span-2">
            <p className="text-mist leading-relaxed text-lg mb-8">{event.description}</p>

            {event.rules && (
              <div className="mb-8">
                <p className="eyebrow mb-4">Rules & Registration Info</p>
                <ul className="space-y-2">
                  {event.rules.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-bone text-sm">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.results && (
              <div>
                <p className="eyebrow mb-2">Results</p>
                <p className="text-bone">{event.results}</p>
              </div>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-range/30 border border-white/5 p-6 space-y-4 font-mono text-sm">
              <div>
                <p className="text-mist text-xs uppercase tracking-widest2 mb-1">Date</p>
                <p className="text-bone">{event.dateLabel}</p>
              </div>
              <div>
                <p className="text-mist text-xs uppercase tracking-widest2 mb-1">Location</p>
                <p className="text-bone">{event.location}</p>
              </div>
              {event.organizer && (
                <div>
                  <p className="text-mist text-xs uppercase tracking-widest2 mb-1">Organizer</p>
                  <p className="text-bone">{event.organizer}</p>
                </div>
              )}
              {event.contact && (
                <div>
                  <p className="text-mist text-xs uppercase tracking-widest2 mb-1">Contact</p>
                  <p className="text-bone">{event.contact}</p>
                </div>
              )}
              {event.status !== 'COMPLETED' && (
                <a
                  href={waLink(`Halo DAD Archery, saya ingin daftar untuk event ${event.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-4 px-5 py-3 bg-gold text-ink uppercase tracking-widest2 hover:bg-bone transition-colors"
                >
                  Register Now
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
