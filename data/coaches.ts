export interface Coach {
  name: string;
  experience: string;
  specialization: string;
  achievement: string;
  image: string;
}

export const coaches: Coach[] = [
  {
    name: 'Dimas Ardian',
    experience: '12+ tahun melatih',
    specialization: 'Recurve, Competition Prep',
    achievement: 'Pelatih tim DKI Jakarta PON 2021',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Rangga Wibawa',
    experience: '8+ tahun melatih',
    specialization: 'Compound, Beginner Foundation',
    achievement: 'Juara 1 Kejurnas Compound 2019',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sari Kusuma',
    experience: '6+ tahun melatih',
    specialization: 'Youth & Junior Program',
    achievement: 'Sertifikasi Pelatih Panahan Nasional',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
];
