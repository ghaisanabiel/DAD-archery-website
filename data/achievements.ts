export interface Achievement {
  competition: string;
  year: number;
  result: string;
  athlete: string;
}

export const achievements: Achievement[] = [
  { competition: 'Pakualam Cup', year: 2025, result: 'Juara 1 Recurve Senior Putra', athlete: 'Bagas Nugraha' },
  { competition: 'Jabar Open', year: 2025, result: 'Juara Umum Klub', athlete: 'DAD Archery Team' },
  { competition: 'Kartini Open II', year: 2024, result: 'Juara 1 Recurve Putri', athlete: 'Aulia Rahman' },
  { competition: 'Kasau Cup', year: 2024, result: 'Juara 2 Compound Senior', athlete: 'Reza Firmansyah' },
];

export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Athletes Trained' },
  { value: '50+', label: 'Competitions' },
];
