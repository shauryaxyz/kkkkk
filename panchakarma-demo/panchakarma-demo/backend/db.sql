-- Postgres schema (run in psql)
CREATE TABLE IF NOT EXISTS bookings (
  id serial PRIMARY KEY,
  booking_id uuid UNIQUE NOT NULL,
  clinic_id text NOT NULL,
  clinic_name text NOT NULL,
  patient_name text NOT NULL,
  patient_phone text,
  start_at timestamptz,
  meet_link text,
  created_at timestamptz DEFAULT now()
);
