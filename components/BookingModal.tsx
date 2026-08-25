'use client';

import { useState } from 'react';
import { waLink } from '@/lib/whatsapp';

interface BookingModalProps {
  programName: string;
  onClose: () => void;
}

export default function BookingModal({ programName, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', whatsapp: '', date: '', people: '1', message: '' });

  const message = `Halo DAD Archery, saya ingin booking training.
Program: ${programName}
Nama: ${form.name}
WhatsApp: ${form.whatsapp}
Tanggal preferensi: ${form.date}
Jumlah orang: ${form.people}
Catatan: ${form.message}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6" onClick={onClose}>
      <div
        className="bg-ink border border-white/10 max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-mist hover:text-gold">
          ✕
        </button>

        {!submitted ? (
          <>
            <p className="eyebrow mb-2">Book Training</p>
            <h3 className="font-display text-2xl text-bone mb-6">{programName}</h3>
            <div className="space-y-4">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-bone placeholder:text-mist focus:border-gold outline-none"
              />
              <input
                placeholder="WhatsApp number"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-bone placeholder:text-mist focus:border-gold outline-none"
              />
              <input
                placeholder="Preferred date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-bone placeholder:text-mist focus:border-gold outline-none"
              />
              <input
                type="number"
                min={1}
                placeholder="Number of people"
                value={form.people}
                onChange={(e) => setForm({ ...form, people: e.target.value })}
                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-bone placeholder:text-mist focus:border-gold outline-none"
              />
              <textarea
                placeholder="Message (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-bone placeholder:text-mist focus:border-gold outline-none"
              />
              <button
                onClick={() => setSubmitted(true)}
                disabled={!form.name || !form.whatsapp}
                className="w-full px-5 py-3 bg-gold text-ink font-mono text-xs uppercase tracking-widest2 hover:bg-bone transition-colors disabled:opacity-40"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <p className="eyebrow mb-3">Request Ready</p>
            <h3 className="font-display text-2xl text-bone mb-4">Confirm via WhatsApp</h3>
            <p className="text-sm text-mist mb-6">
              Klik tombol di bawah untuk mengirim detail booking langsung ke WhatsApp DAD Archery.
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 bg-gold text-ink font-mono text-xs uppercase tracking-widest2 hover:bg-bone transition-colors"
            >
              Open WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
