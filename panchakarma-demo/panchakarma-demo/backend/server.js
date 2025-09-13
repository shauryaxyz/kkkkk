const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// Load Supabase creds from env (Render → Environment tab)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Health check
app.get("/api/health", async (req, res) => {
  try {
    const { data, error } = await supabase.from("bookings").select("id").limit(1);
    if (error) throw error;
    res.json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

// Create booking
app.post("/api/bookings", async (req, res) => {
  const { name, email, date } = req.body;
  try {
    const { data, error } = await supabase
      .from("bookings")
      .insert([{ name, email, date }])
      .select();
    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

// Fetch bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const { data, error } = await supabase.from("bookings").select("*").order("date", { ascending: true });
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on :${PORT}`);
});


