import Image from "next/image";
import Link from "next/link";
import DadLogo from "./Dadlogo";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden flex flex-col">
      {/* Background photo — archer in full draw */}
      <Image
        src="https://images.unsplash.com/photo-1591491634026-3d581076c14d?q=80&w=2000&auto=format&fit=crop"
        alt="Archer drawing a bow in full focus"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Warm charcoal wash — no blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/50 to-ink/95" />
      <div className="target-rings" />

      {/* Giant faded background wordmark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <p className="font-display text-[22vw] leading-none text-bone/[0.05] whitespace-nowrap tracking-tight">
          TRAIN. SHOOT.
        </p>
      </div>

      {/* Location badge, top right */}
      <div className="relative z-10 flex justify-end px-6 md:px-10 pt-24">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-mist">
          📍 Jakarta, ID
        </span>
      </div>

      {/* Centered brand block */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center -mt-10">
        <div className="mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
          <DadLogo size={150} />
        </div>
        <h1 className="font-display text-4xl md:text-6xl text-bone tracking-wide leading-none">
          DAD <span className="text-gold">ARCHERY</span>
        </h1>
        <p className="mt-4 eyebrow">Precision. Focus. Performance.</p>

        {/* Action row — grow on hover instead of just swapping color */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/training"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/60 text-bone font-mono text-xs uppercase tracking-widest2 transition-transform duration-300 ease-out hover:scale-110 hover:border-gold"
          >
            🏹 Train
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/60 text-bone font-mono text-xs uppercase tracking-widest2 transition-transform duration-300 ease-out hover:scale-110 hover:border-gold"
          >
            🎯 Compete
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blood text-bone font-mono text-xs uppercase tracking-widest2 transition-transform duration-300 ease-out hover:scale-110"
          >
            Bows &amp; Archery Supplies
          </Link>
        </div>
      </div>

      {/* Bottom tagline strip */}
      <div className="relative z-10 pb-10 text-center px-6">
        <p className="text-mist text-sm md:text-base">
          Komunitas &amp; Pusat Pelatihan Archery — Training, Competition,
          Equipment
        </p>
      </div>
    </section>
  );
}
