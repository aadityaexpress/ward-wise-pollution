const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ROOT ROUTE (yahin hona chahiye)
app.get("/", (req, res) => {
  res.send("Pollution Backend is Running");
});

// ✅ POLLUTION API
app.get("/pollution", async (req, res) => {
  const result = await pool.query(`
    SELECT w.name, p.pm25, p.pm10, p.no2, p.co2
    FROM pollutiondata p
    JOIN wards w ON p.ward_id = w.id
  `);
  res.json(result.rows);
});

// ✅ SERVER START
app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
