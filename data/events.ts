export type EventStatus = 'OPEN REGISTRATION' | 'CLOSING SOON' | 'CLOSED' | 'COMPLETED';

export interface ArcheryEvent {
  slug: string;
  name: string;
  dateLabel: string;
  location: string;
  category: string;
  status: EventStatus;
  image: string;
  description: string;
  rules?: string[];
  organizer?: string;
  contact?: string;
  results?: string;
  year?: number;
}

// Placeholder data modeled on DAD Archery's historical event structure
// (Pakualam Cup, Kartini Open, Kasau Cup, etc). Swap with real upcoming
// events when available.
export const upcomingEvents: ArcheryEvent[] = [
  {
    slug: 'pakualam-cup-2026',
    name: 'Pakualam Cup 2026',
    dateLabel: '14 – 16 Nov 2026',
    location: 'Jalan Kenari, Yogyakarta City',
    category: 'Open Championship',
    status: 'OPEN REGISTRATION',
    image: 'https://images.unsplash.com/photo-1591491634026-3d581076c14d?q=80&w=1400&auto=format&fit=crop',
    description:
      'Kejuaraan terbuka tahunan DAD Archery di Yogyakarta, mempertemukan atlet recurve dan compound dari seluruh Jawa dalam kompetisi jarak 30m dan 50m.',
    rules: ['Kategori recurve & compound', 'Jarak 30m (junior) / 50m (senior)', 'Wajib membawa peralatan sendiri'],
    organizer: 'DAD Archery',
    contact: 'events@dadarchery.id',
  },
  {
    slug: 'kartini-open-2026',
    name: 'Kartini Open III',
    dateLabel: '21 – 23 Apr 2026',
    location: 'Stadion Yos Sudarso, Tegal',
    category: 'Archery Championship',
    status: 'OPEN REGISTRATION',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1400&auto=format&fit=crop',
    description:
      'Turnamen tahunan memperingati Hari Kartini, terbuka untuk kategori putra dan putri di semua divisi usia.',
    rules: ['Semua divisi usia', 'Kategori putra & putri terpisah', 'Technical meeting H-1'],
    organizer: 'DAD Archery x Kota Tegal',
    contact: 'events@dadarchery.id',
  },
  {
    slug: 'kasau-cup-2026',
    name: '3rd Kasau Cup',
    dateLabel: '02 – 05 Jul 2026',
    location: 'Lanud Atang Sanjaya, Bogor',
    category: 'Archery Championship',
    status: 'CLOSING SOON',
    image: 'https://images.unsplash.com/photo-1583225214464-9296029427aa?q=80&w=1400&auto=format&fit=crop',
    description:
      'Kompetisi nasional bekerja sama dengan TNI AU, memperebutkan piala bergilir Kasau di lapangan outdoor Lanud Atang Sanjaya.',
    rules: ['Kategori nasional terbuka', 'Field & target round', 'Registrasi ditutup H-7'],
    organizer: 'DAD Archery x TNI AU',
    contact: 'events@dadarchery.id',
  },
];

export const pastEvents: ArcheryEvent[] = [
  {
    slug: 'jabar-open-2025',
    name: 'Jabar Open 2025',
    dateLabel: 'Apr 2025',
    location: 'Arcamanik, Bandung',
    category: 'Kejurda Panahan Jabar',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1516934024742-b461ee5df267?q=80&w=1400&auto=format&fit=crop',
    description: 'Kejuaraan daerah Jawa Barat dengan lebih dari 300 peserta dari 18 klub.',
    results: 'Juara Umum: Klub Bina Panahan Bandung',
    year: 2025,
  },
  {
    slug: 'fast-open-2025',
    name: 'FAST Open 2025',
    dateLabel: 'Mar 2025',
    location: 'GOR Pondok Bambu, Jakarta Timur',
    category: 'Archery Tournament',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1400&auto=format&fit=crop',
    description: 'Turnamen indoor tahunan yang menjadi ajang pemanasan atlet DAD sebelum musim outdoor.',
    results: 'Juara Umum: DAD Archery Team',
    year: 2025,
  },
];
