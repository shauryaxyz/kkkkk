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
    // In production you would fetch from backend: (example)
    // axios.get('/api/clinics').then(r => setClinics(r.data));
  }, []);

  return (
    <div className="min-h-screen p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">Panchakarma Management — Demo</h1>
        <p className="text-gray-600 mt-2">Book video consultations or therapy sessions. Demo uses dummy data and generates a meeting link which is saved to your backend/Postgres.</p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-4">
        <section className="grid sm:grid-cols-2 gap-4">
          {clinics.map((c) => (
            <ClinicCard key={c.id} clinic={c} onBook={() => openBooking(c)} />
          ))}
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Quick search</h2>
          <p className="text-sm text-gray-500">This demo ships with two live clinic examples (sourced online). Replace with your own clinic list from Postgres.</p>
        </section>
      </main>

      {showModal && selected && (
        <BookingModal clinic={selected} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
