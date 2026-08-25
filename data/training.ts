export interface TrainingProgram {
  slug: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Competition';
  name: string;
  description: string;
  duration: string;
  schedule: string;
  price: string;
  whatYouLearn: string[];
  coach: string;
  location: string;
  image: string;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    slug: 'beginner',
    level: 'Beginner',
    name: 'Foundation',
    description: 'Untuk yang baru pertama pegang busur — dasar postur, safety, dan teknik shooting form.',
    duration: '6 sesi / 3 minggu',
    schedule: 'Sabtu, 09.00 – 11.00',
    price: 'Rp 850.000',
    whatYouLearn: ['Safety & handling peralatan', 'Stance dan postur dasar', 'Anchor point & release', 'Latihan jarak 10–15m'],
    coach: 'Coach Dimas Ardian',
    location: 'DAD Archery Range, Jakarta Timur',
    image: 'https://images.unsplash.com/photo-1584824388878-6f9c7c1c9b30?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'intermediate',
    level: 'Intermediate',
    name: 'Precision',
    description: 'Membangun konsistensi form dan mulai latihan jarak kompetisi ringan.',
    duration: '8 sesi / 4 minggu',
    schedule: 'Sabtu & Minggu, 09.00 – 11.00',
    price: 'Rp 1.200.000',
    whatYouLearn: ['Konsistensi anchor & release', 'Manajemen angin dasar', 'Scoring & recording', 'Latihan jarak 20–30m'],
    coach: 'Coach Rangga Wibawa',
    location: 'DAD Archery Range, Jakarta Timur',
    image: 'https://images.unsplash.com/photo-1600679472233-92c9187c8a1c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'advanced',
    level: 'Advanced',
    name: 'Refinement',
    description: 'Fine-tuning teknik untuk atlet yang sudah rutin latihan dan siap naik level.',
    duration: '10 sesi / 5 minggu',
    schedule: 'Selasa & Kamis, 18.00 – 20.00',
    price: 'Rp 1.650.000',
    whatYouLearn: ['Mental game & fokus', 'Equipment tuning', 'Analisis video shooting form', 'Latihan jarak 40–50m'],
    coach: 'Coach Dimas Ardian',
    location: 'DAD Archery Range, Jakarta Timur',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'competition',
    level: 'Competition',
    name: 'Competition Prep',
    description: 'Program intensif untuk atlet yang mempersiapkan turnamen resmi.',
    duration: '12 sesi / 6 minggu',
    schedule: 'Custom — disesuaikan jadwal turnamen',
    price: 'Hubungi kami',
    whatYouLearn: ['Simulasi kompetisi penuh', 'Strategi ronde eliminasi', 'Peak performance & recovery', 'Pendampingan hari-H'],
    coach: 'Tim Pelatih DAD',
    location: 'DAD Archery Range, Jakarta Timur',
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1200&auto=format&fit=crop',
  },
];
