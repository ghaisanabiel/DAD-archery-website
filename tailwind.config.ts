import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#140F0D',        // warm dark charcoal (no blue)
        range: '#261613',      // deep brick-charcoal panel
        gold: '#D9A61C',       // brass/gold banner accent
        bone: '#F3ECD9',       // warm cream text
        mist: '#A69489',       // warm grey caption (no blue tint)
        blood: '#C1272D',      // target-ring red — primary accent now, used more
      },
      fontFamily: {
        display: ['var(--font-montserrat)'],
        body: ['var(--font-inter)'],
        mono: ['var(--font-plex-mono)'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      backgroundImage: {
        'ring-fade': 'radial-gradient(circle at center, transparent 0%, transparent 55%, rgba(201,162,39,0.06) 56%, transparent 57%, transparent 100%)',
      },
    },
  },
  plugins: [],
};

export default config;