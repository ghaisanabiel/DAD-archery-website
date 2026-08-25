import Reveal from './Reveal';
import { waLink } from '@/lib/whatsapp';

const benefits = ['Akses training rutin', 'Komunitas & event khusus member', 'Diskon equipment', 'Dukungan persiapan kompetisi'];

export default function Membership() {
  return (
    <section id="membership" className="relative py-24 md:py-32 border-t border-white/5 bg-range/20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow mb-4">Membership</p>
          <h2 className="font-display text-4xl md:text-5xl text-bone mb-6">Become a DAD Member.</h2>
          <p className="text-mist leading-relaxed max-w-md">
            Bergabung dengan komunitas archery yang aktif berlatih, berkompetisi, dan berkembang bersama.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="space-y-4 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-bone">
                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <a
            href={waLink('Halo DAD Archery, saya ingin daftar jadi member.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 bg-gold text-ink font-mono text-xs uppercase tracking-widest2 hover:bg-bone transition-colors"
          >
            Join DAD
          </a>
        </Reveal>
      </div>
    </section>
  );
}
