require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pg = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const db = pool;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running normally" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
