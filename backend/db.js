const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pollutiondb",
  password: "Ward_poll#",
  port: 5432
});

module.exports = pool;
