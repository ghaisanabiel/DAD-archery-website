import Image from 'next/image';
import Link from 'next/link';
import { ArcheryEvent } from '@/data/events';

export default function EventCard({ event, large = false }: { event: ArcheryEvent; large?: boolean }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative block bg-range/40 border border-white/5 hover:border-gold/40 transition-all duration-300 hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className={`relative overflow-hidden ${large ? 'h-72' : 'h-56'}`}>
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-ink/80 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-widest2 text-gold">
          {event.status}
        </span>
      </div>
      <div className="p-6">
        <p className="eyebrow mb-2">{event.category}</p>
        <h3 className="font-display text-xl text-bone mb-2 group-hover:text-gold transition-colors">
          {event.name}
        </h3>
        <p className="text-sm text-mist mb-1">{event.dateLabel}</p>
        <p className="text-sm text-mist">{event.location}</p>
      </div>
    </Link>
  );
}