import Link from 'next/link';
import { waLink } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A1220] border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-2xl text-bone mb-4">
            DAD <span className="text-gold">ARCHERY</span>
          </p>
          <p className="text-sm text-mist leading-relaxed">
            Jalan Kenari No. 12, Jakarta Timur, Indonesia
          </p>
          <p className="text-sm text-mist mt-2">+62 812-3456-7890</p>
          <p className="text-sm text-mist">hello@dadarchery.id</p>
        </div>

        <div>
          <p className="eyebrow mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-bone">
            <li><Link href="/training" className="hover:text-gold">Training</Link></li>
            <li><Link href="/events" className="hover:text-gold">Events</Link></li>
            <li><Link href="/shop" className="hover:text-gold">Shop</Link></li>
            <li><Link href="/#contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="space-y-2 text-sm text-bone">
            <li><a href={waLink('Halo DAD Archery, saya ingin chat.')} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a></li>
            <li><a href="#" className="hover:text-gold">Instagram</a></li>
            <li><a href="#" className="hover:text-gold">Facebook</a></li>
            <li><a href="#" className="hover:text-gold">YouTube</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Visit Us</p>
          <p className="text-sm text-mist leading-relaxed">
            Senin – Sabtu<br />
            09.00 – 21.00 WIB
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-2 text-xs text-mist font-mono">
        <p>© {new Date().getFullYear()} DAD Archery. All rights reserved.</p>
        <p>Portfolio redesign concept — not the official DAD Archery website.</p>
      </div>
    </footer>
  );
}
