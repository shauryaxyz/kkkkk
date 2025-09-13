import React from 'react';
import type { Clinic } from '../types';

interface Props {
  clinic: Clinic;
  onBook: () => void;
}

export default function ClinicCard({ clinic, onBook }: Props): JSX.Element {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">{clinic.name}</h3>
        <p className="text-sm text-gray-600">{clinic.location} • {clinic.contact}</p>
        <p className="mt-2 text-gray-700 text-sm">{clinic.description}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={onBook} className="px-3 py-2 bg-green-600 text-white rounded">Book video consult</button>
        <a href="#" onClick={(e) => e.preventDefault()} className="px-3 py-2 border rounded text-sm">Visit site</a>
      </div>
    </div>
  );
}
