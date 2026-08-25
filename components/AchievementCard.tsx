import { Achievement } from '@/data/achievements';

export default function AchievementCard({ item }: { item: Achievement }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-5 px-3 -mx-3 group hover:border-gold/40 hover:bg-range/20 hover:scale-[1.015] transition-all duration-300 rounded-sm">
      <div className="flex items-center gap-6">
        <span className="font-mono text-gold text-sm w-14 shrink-0">{item.year}</span>
        <div>
          <p className="text-bone font-display text-lg group-hover:text-gold transition-colors">{item.competition}</p>
          <p className="text-sm text-mist">{item.athlete}</p>
        </div>
      </div>
      <p className="text-sm text-mist font-mono text-right hidden sm:block">{item.result}</p>
    </div>
  );
}