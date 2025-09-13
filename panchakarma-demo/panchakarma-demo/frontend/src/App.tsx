import React, { useState, useEffect } from 'react';
import ClinicCard from './components/ClinicCard';
import BookingModal from './components/BookingModal';
import type { Clinic } from './types';

const CLINICS: Clinic[] = [
  {
    id: 'vedic-arogyam',
    name: 'Vedic Arogyam',
    location: 'Gurugram, Haryana',
    contact: '+91-8178956909',
    source: 'Vedic Arogyam',
    description: 'Ayurvedic & Panchakarma clinic in Gurugram offering consultations and therapies.'
  },
  {
    id: 'shuddhi-hiims',
    name: 'Shuddhi HIIMS',
    location: 'Pan-India (video consults)',
    contact: 'Visit website',
    source: 'Shuddhi HIIMS',
    description: 'Offers 24/7 video consultations and Panchakarma support.'
  }
];

export default function App(): JSX.Element {
  const [clinics, setClinics] = useState<Clinic[]>(CLINICS);
  const [selected, setSelected] = useState<Clinic | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  function openBooking(clinic: Clinic): void {
    setSelected(clinic);
    setShowModal(true);
  }

  useEffect(() => {
    // Example: fetch from backend
    // axios.get('/api/clinics').then(r => setClinics(r.data));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-black via-gray-900 to-black text-gold-400">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gold-300 drop-shadow-lg">
          Panchakarma Management — Demo
        </h1>
        <p className="text-gold-200/80 mt-2">
          Book video consultations or therapy sessions. Demo uses dummy data and generates a meeting link which is saved to your backend/Postgres.
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-6">
        <section className="grid sm:grid-cols-2 gap-6">
          {clinics.map((c) => (
            <div
              key={c.id}
              className="bg-black border border-gold-500/60 rounded-2xl shadow-lg shadow-gold-900/40 hover:shadow-gold-600/60 transition duration-300"
            >
              <ClinicCard clinic={c} onBook={() => openBooking(c)} />
            </div>
          ))}
        </section>

        <section className="bg-black/90 border border-gold-500/50 rounded-2xl shadow-lg shadow-gold-900/50 p-6">
          <h2 className="text-xl font-semibold text-gold-300">Quick search</h2>
          <p className="text-sm text-gold-200/70 mt-2">
            This demo ships with two live clinic examples (sourced online). Replace with your own clinic list from Postgres.
          </p>
        </section>
      </main>

      {showModal && selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black border border-gold-500/60 rounded-2xl shadow-xl shadow-gold-800/50 p-6 max-w-lg w-full">
            <BookingModal clinic={selected} onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
