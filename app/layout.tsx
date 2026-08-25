import type { Metadata } from 'next';
import { Montserrat, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-montserrat' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' });

export const metadata: Metadata = {
  title: 'DAD Archery — Precision. Focus. Performance.',
  description:
    'DAD Archery adalah komunitas dan pusat pelatihan archery — training, kompetisi, dan equipment untuk setiap level atlet.',
  openGraph: {
    title: 'DAD Archery — Precision. Focus. Performance.',
    description: 'Training, kompetisi, dan equipment archery untuk setiap level atlet.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}