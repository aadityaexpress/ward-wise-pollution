import express from "express";
import { pool } from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await pool.query("SELECT * FROM wards");
  res.json(data.rows);
});

export default router;