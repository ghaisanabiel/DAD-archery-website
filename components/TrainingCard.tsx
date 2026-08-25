import Image from 'next/image';
import { TrainingProgram } from '@/data/training';
import { waLink } from '@/lib/whatsapp';

export default function TrainingCard({ program }: { program: TrainingProgram }) {
  return (
    <div className="group relative bg-range/30 border border-white/5 hover:border-gold/40 transition-all duration-300 hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:shadow-black/40 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="eyebrow mb-2">{program.level}</p>
        <h3 className="font-display text-xl text-bone mb-2">{program.name}</h3>
        <p className="text-sm text-mist mb-4 leading-relaxed">{program.description}</p>

        <dl className="text-xs font-mono text-mist space-y-1.5 mb-5">
          <div className="flex justify-between"><dt>Duration</dt><dd className="text-bone">{program.duration}</dd></div>
          <div className="flex justify-between"><dt>Schedule</dt><dd className="text-bone">{program.schedule}</dd></div>
          <div className="flex justify-between"><dt>Price</dt><dd className="text-gold">{program.price}</dd></div>
        </dl>

        <a
          href={waLink(`Halo DAD Archery, saya ingin tanya tentang program ${program.name} (${program.level}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-center px-5 py-3 bg-gold text-ink font-mono text-xs uppercase tracking-widest2 hover:bg-bone transition-colors"
        >
          Book Training
        </a>
      </div>
    </div>
  );
}