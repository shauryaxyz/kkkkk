// src/components/BookingModal.tsx
import React, { useState } from "react";
import axios from "axios";
import type { Clinic } from "../types";
import { API_BASE } from "../config";

interface Props {
  clinic: Clinic;
  onClose: () => void;
}

export default function BookingModal({ clinic, onClose }: Props): JSX.Element {
  const [name, setName] = useState<string>("Shaurya Demo");
  const [phone, setPhone] = useState<string>("9999999999");
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 16));
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post(`${API_BASE}/api/bookings`, {
        name,
        email: phone, // If your backend expects email, change accordingly
        date, // ensure backend expects date string 'YYYY-MM-DD' or datetime
      }, { timeout: 15000 });

      setResult({ success: true, data: res.data });
    } catch (err: any) {
      console.error(err);
      setResult({ success: false, error: err?.response?.data ?? err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded">
        <h3 className="font-bold">Book video consult — {clinic.name}</h3>

        <form onSubmit={submit} className="mt-4 space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded" />
          <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" />

          <div className="flex gap-2">
            <button type="submit" disabled={loading} className="px-3 py-2 bg-blue-600 text-white rounded">
              {loading ? "Booking..." : "Confirm & Create Meeting"}
            </button>
            <button type="button" onClick={onClose} className="px-3 py-2 border rounded">Cancel</button>
          </div>
        </form>

        {result && (
          <div className="mt-4 p-3 rounded" style={{ backgroundColor: result.success ? "#ecfccb" : "#ffe4e6" }}>
            {result.success ? (
              <>
                <div className="font-medium">Booking created</div>
                <pre className="text-sm break-all">{JSON.stringify(result.data, null, 2)}</pre>
              </>
            ) : (
              <>
                <div className="text-red-600">Error</div>
                <pre className="text-sm break-all">{JSON.stringify(result.error, null, 2)}</pre>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
