import Button from './Button';
import Reveal from './Reveal';
import { waLink } from '@/lib/whatsapp';

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="target-rings" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-6">Ready to Start?</p>
          <h2 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
            Train. Compete. <span className="text-gold">Improve.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/training" variant="primary">Join Training</Button>
            <Button href={waLink('Halo DAD Archery, saya ingin tanya lebih lanjut.')} variant="outline" external>
              Contact DAD
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}