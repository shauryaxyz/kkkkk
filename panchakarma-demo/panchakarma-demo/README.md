# Panchakarma Management — Demo (downloaded)

This archive contains a minimal, local-demo implementation of a Panchakarma booking UI (React + TypeScript + Tailwind) with a backend that saves bookings to Postgres and returns a meeting link (demo generator).

## Quick start (step-by-step)

### 1) Download & unzip
- Download `panchakarma-demo.zip` from this page and unzip somewhere like `~/projects/panchakarma-demo`.

### 2) Install Postgres & create database
- **Linux / macOS (psql installed):**
  ```bash
  psql -U postgres -c "CREATE DATABASE panchakarma;"
  psql -U postgres -d panchakarma -f backend/db.sql
  ```
- **Windows (psql or pgAdmin):**
  - Create a database named `panchakarma` using pgAdmin or psql, then run `backend/db.sql` against that database.

### 3) Configure backend environment
Create a `.env` file inside the `backend` folder with these variables (example):
```
PGHOST=localhost
PGUSER=postgres
PGPASSWORD=your_db_password
PGDATABASE=panchakarma
PGPORT=5432
```
Replace `PGPASSWORD` with your Postgres password. If your Postgres uses peer auth and you're on the same machine, you may not need PGPASSWORD.

### 4) Start backend
```bash
cd backend
npm install
npm start
```
You should see `Backend listening on :4000` in the console.

### 5) Start frontend
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```
Vite will show a URL (typically `http://localhost:5173`). Open that in your browser.

### 6) Make a booking
- Choose a clinic and click **Book video consult**.
- After submitting, the backend saves the booking to Postgres and returns a demo Meet link (not a live real Meet link).

### 7) Run a quick test (optional)
With the backend running in one terminal:
```bash
cd backend
npm run test-booking
```
This will POST a sample booking and print the response.

## Notes & next steps
- To generate **real** Google Meet links automatically, integrate the Google Calendar API on the server and create events with `conferenceData.createRequest` (requires OAuth credentials).

- If you hit any errors, paste the exact command you ran and the full error output in chat and I will debug it.

