'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/training', label: 'Training' },
  { href: '/events', label: 'Events' },
  { href: '/shop', label: 'Shop' },
  { href: '/#contact', label: 'Contact' },
];

// Next.js's <Link> doesn't reliably scroll to an in-page anchor when the
// pathname is unchanged (e.g. clicking "/#contact" while already on "/").
// A plain <a> lets the browser handle the hash scroll natively, so hash
// links use <a> while real route links keep client-side <Link>.
function NavLink({ href, className, onClick, children }: { href: string; className?: string; onClick?: () => void; children: React.ReactNode }) {
  if (href.includes('#')) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/dad-logo.png" alt="DAD Archery" width={44} height={44} className="object-contain" />
          <span className="hidden sm:block font-display text-xl tracking-wide text-bone">
            DAD <span className="text-gold">ARCHERY</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest2 text-bone">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          href="/#membership"
          className="hidden md:inline-flex px-5 py-2.5 bg-gold text-ink font-mono text-xs uppercase tracking-widest2 hover:bg-bone transition-colors"
        >
          Join Us
        </NavLink>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-bone w-8 h-8 flex flex-col justify-center items-end gap-1.5"
        >
          <span className={`h-px bg-current transition-all ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`h-px bg-current transition-all ${open ? 'opacity-0' : 'w-4'}`} />
          <span className={`h-px bg-current transition-all ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-white/5 px-6 py-6 flex flex-col gap-5 font-mono text-sm uppercase tracking-widest2">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-bone hover:text-gold">
              {l.label}
            </NavLink>
          ))}
          <NavLink
            href="/#membership"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 bg-gold text-ink"
          >
            Join Us
          </NavLink>
        </div>
      )}
    </header>
  );
}