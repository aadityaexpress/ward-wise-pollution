import express from "express";
import { pool } from "../db.js";
const router = express.Router();

router.get("/:ward_id", async (req, res) => {
  const { ward_id } = req.params;
  const result = await pool.query(
    "SELECT * FROM sources WHERE ward_id=$1",
    [ward_id]
  );
  res.json(result.rows);
});

export default router;
