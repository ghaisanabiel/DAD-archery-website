import Link from 'next/link';

const actions = [
  { label: 'Training', href: '/training', desc: 'Program latihan dari beginner sampai competition prep.' },
  { label: 'Events', href: '/events', desc: 'Kompetisi dan turnamen archery terdekat.' },
  { label: 'Shop', href: '/shop', desc: 'Bow, arrow, dan equipment archery pilihan.' },
  { label: 'Join DAD', href: '/#membership', desc: 'Jadi member dan dapatkan benefit komunitas.' },
];

export default function QuickAction() {
  return (
    <section className="border-t border-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((a, i) => (
          <Link
            key={a.href}
            href={a.href}
            className={`group relative p-8 md:p-10 min-h-[220px] flex flex-col justify-between border-white/5 hover:bg-range/40 transition-colors ${
              i !== actions.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''
            }`}
          >
            <span className="font-mono text-xs text-gold tracking-widest2">0{i + 1}</span>
            <div>
              <h3 className="font-display text-2xl text-bone group-hover:text-gold transition-colors">
                {a.label}
              </h3>
              <p className="text-sm text-mist mt-2">{a.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
