'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TrainingProgram, trainingPrograms } from '@/data/training';
import BookingModal from './BookingModal';

const levels: Array<TrainingProgram['level'] | 'All'> = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Competition'];

export default function TrainingPageClient() {
  const [filter, setFilter] = useState<TrainingProgram['level'] | 'All'>('All');
  const [bookingFor, setBookingFor] = useState<string | null>(null);

  const filtered = filter === 'All' ? trainingPrograms : trainingPrograms.filter((p) => p.level === filter);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12">
        {levels.map((l) => (
          <button
            key={l}
            onClick={() => setFilter(l)}
            className={`px-4 py-2 border text-xs font-mono uppercase tracking-widest2 transition-colors ${
              filter === l ? 'border-gold text-gold' : 'border-white/10 text-mist hover:border-white/30'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((p) => (
          <div key={p.slug} className="bg-range/30 border border-white/5 hover:border-gold/40 transition-colors flex flex-col md:flex-row">
            <div className="relative h-56 md:h-auto md:w-2/5 shrink-0 overflow-hidden">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="eyebrow mb-2">{p.level}</p>
              <h3 className="font-display text-2xl text-bone mb-2">{p.name}</h3>
              <p className="text-sm text-mist mb-4 leading-relaxed">{p.description}</p>

              <ul className="text-sm text-bone space-y-1.5 mb-4">
                {p.whatYouLearn.map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>

              <dl className="text-xs font-mono text-mist space-y-1.5 mb-5">
                <div className="flex justify-between"><dt>Coach</dt><dd className="text-bone">{p.coach}</dd></div>
                <div className="flex justify-between"><dt>Schedule</dt><dd className="text-bone">{p.schedule}</dd></div>
                <div className="flex justify-between"><dt>Duration</dt><dd className="text-bone">{p.duration}</dd></div>
                <div className="flex justify-between"><dt>Price</dt><dd className="text-gold">{p.price}</dd></div>
              </dl>

              <button
                onClick={() => setBookingFor(p.name)}
                className="mt-auto px-5 py-3 bg-gold text-ink font-mono text-xs uppercase tracking-widest2 hover:bg-bone transition-colors"
              >
                Book Training
              </button>
            </div>
          </div>
        ))}
      </div>

      {bookingFor && <BookingModal programName={bookingFor} onClose={() => setBookingFor(null)} />}
    </>
  );
}
