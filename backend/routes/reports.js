import express from "express";
import { pool } from "../db.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { ward_id, issue_type, description } = req.body;
  await pool.query(
    "INSERT INTO reports(ward_id, issue_type, description, status) VALUES($1,$2,$3,'pending')",
    [ward_id, issue_type, description]
  );
  res.json({ message: "Report filed" });
});

export default router;