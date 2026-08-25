import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  external?: boolean;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-widest2 transition-all duration-300';

const variants: Record<string, string> = {
  primary: 'bg-gold text-ink hover:bg-bone',
  outline: 'border border-gold text-bone hover:bg-gold hover:text-ink',
  ghost: 'text-bone hover:text-gold',
};

export default function Button({ href, children, variant = 'primary', external, className = '' }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  // Next.js's <Link> doesn't reliably scroll to an in-page anchor when the
  // pathname is unchanged (e.g. clicking "/#contact" while already on "/").
  // A plain <a> lets the browser handle the hash scroll natively.
  if (href.includes('#')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}