const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Express CRUD",
  password: "PLATINUM@525",
  port: "5432",
});

module.exports = pool;
