import Image from 'next/image';
import { Coach } from '@/data/coaches';

export default function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="group relative bg-range/30 border border-white/5 hover:border-gold/40 transition-all duration-300 hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:shadow-black/40 text-center shrink-0 w-64 snap-start">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-bone">{coach.name}</h3>
        <p className="text-xs font-mono text-gold uppercase tracking-widest2 mt-1">{coach.specialization}</p>
        <p className="text-sm text-mist mt-2">{coach.experience}</p>
        <p className="text-sm text-mist">{coach.achievement}</p>
      </div>
    </div>
  );
}