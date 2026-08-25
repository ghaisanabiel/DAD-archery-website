import Hero from '@/components/Hero';
import QuickAction from '@/components/QuickAction';
import WhyDad from '@/components/WhyDad';
import Membership from '@/components/Membership';
import FinalCTA from '@/components/FinalCTA';
import EventCard from '@/components/EventCard';
import TrainingCard from '@/components/TrainingCard';
import ProductCard from '@/components/ProductCard';
import CoachCard from '@/components/CoachCard';
import AchievementCard from '@/components/AchievementCard';
import Gallery from '@/components/Gallery';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import { upcomingEvents } from '@/data/events';
import { trainingPrograms } from '@/data/training';
import { products } from '@/data/products';
import { coaches } from '@/data/coaches';
import { achievements } from '@/data/achievements';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAction />

      {/* Upcoming Events */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="eyebrow mb-4">Upcoming Events</p>
              <h2 className="font-display text-4xl md:text-5xl text-bone">Compete with us.</h2>
            </div>
            <Button href="/events" variant="ghost">View All Events →</Button>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((e, i) => (
              <Reveal key={e.slug} delay={i * 100}>
                <EventCard event={e} large />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyDad />

      {/* Training */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-14">
            <p className="eyebrow mb-4">Training</p>
            <h2 className="font-display text-4xl md:text-5xl text-bone">Learn archery with DAD.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <TrainingCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-range/20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-14">
            <p className="eyebrow mb-4">Meet Our Coaches</p>
            <h2 className="font-display text-4xl md:text-5xl text-bone">Guided by experience.</h2>
          </Reveal>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-thin">
            {coaches.map((c, i) => (
              <Reveal key={c.name} delay={i * 100} className="shrink-0">
                <CoachCard coach={c} />
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs font-mono text-mist uppercase tracking-widest2 md:hidden">← swipe →</p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-10">
            <p className="eyebrow mb-4">Built for Competition</p>
            <h2 className="font-display text-4xl md:text-5xl text-bone">Achievements.</h2>
          </Reveal>
          <Reveal>
            <div className="max-h-[420px] overflow-y-auto pr-2 scrollbar-thin">
              {achievements.map((a) => (
                <AchievementCard key={`${a.competition}-${a.year}`} item={a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Membership />

      {/* Shop teaser */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="eyebrow mb-4">Archery Equipment</p>
              <h2 className="font-display text-4xl md:text-5xl text-bone">Gear up.</h2>
            </div>
            <Button href="/shop" variant="ghost">View Shop →</Button>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-14">
            <p className="eyebrow mb-4">Life at DAD</p>
            <h2 className="font-display text-4xl md:text-5xl text-bone">Moments on the range.</h2>
          </Reveal>
          <Reveal>
            <Gallery />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}