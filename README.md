# DAD Archery — Redesign Concept

Portfolio/demo redesign of the DAD Archery website. **Not the official DAD Archery site** — a concept prototype built to show what the brand could look like as a modern sports platform.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- All content lives in `data/*.ts` — swap placeholders with real data anytime

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.tsx          — fonts, Navbar, Footer, WhatsApp button
  page.tsx             — homepage (all 12 sections)
  events/page.tsx       — events listing (upcoming + past)
  events/[slug]/page.tsx — event detail
  training/page.tsx    — training programs + filter + booking modal
  shop/page.tsx        — equipment catalog + filter
components/            — reusable UI (Navbar, Hero, cards, etc.)
data/                  — events.ts, training.ts, products.ts, coaches.ts, achievements.ts
lib/whatsapp.ts        — wa.me link builder (single source for the WhatsApp number)
```

## Before going live — replace these placeholders

1. **WhatsApp number** — `lib/whatsapp.ts` → `DAD_WHATSAPP_NUMBER`
2. **All data files** in `/data` — real events, training schedules, product catalog, coach bios, achievements
3. **Images** — currently Unsplash stock photos for layout purposes only. Replace with real DAD Archery photography (athletes, range, products) before public launch — do not keep stock/placeholder imagery or any copyrighted assets long-term.
4. **Logo** — navbar currently uses text wordmark; swap in the real logo file
5. **Address / hours / socials** — `components/Footer.tsx`
6. **Google Maps embed** — not yet added to event detail / location section; add when a real location is confirmed

## Design tokens

- Colors: `ink #121412`, `range #1B2A1E`, `gold #C9A227`, `bone #F1EDE4`, `mist #8B9088`
- Type: display = Anton, body = Inter, data/mono = IBM Plex Mono
- Signature motif: concentric "target-ring" shapes (`.target-rings` in `globals.css`) used as section dividers/ambient background — echoes archery scoring rings

## Scope note

This first pass covers the 4 priority pages (Home, Events, Training, Shop) per the brief. Not yet built: dedicated Outlet/Location finder page, individual product detail pages, and payment/e-commerce (intentionally out of scope for the prototype — WhatsApp is the conversion channel).
