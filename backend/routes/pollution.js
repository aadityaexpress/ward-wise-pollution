import express from "express";
import { pool } from "../db.js";
const router = express.Router();

router.get("/:ward_id", async (req, res) => {
  const { ward_id } = req.params;
  const data = await pool.query(
    "SELECT * FROM pollutiondata WHERE ward_id=$1 ORDER BY timestamp DESC LIMIT 1",
    [ward_id]
  );
  res.json(data.rows[0] || { error: "No data yet" });
});

export default router;