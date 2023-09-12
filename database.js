const Pool = require("pg").Pool;

const pool = new Pool({
  user: "sultanjabir",
  password: "",
  host: "localhost",
  database: "students_database",
  port: 5432,
});

module.exports = pool;
