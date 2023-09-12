const pool = require("../../database");
const queries = require("../syntax/queries");

// Get All Students
const getAllStudents = (req, res) => {
  pool.query(queries.getAllStudents, (err, result) => {
    if (err) {
      res.send("somthing wrong");
    } else {
      res.status(200).json(result.rows);
    }
  });
};

// Get Specific Student
const getStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudent, [id], (error, result) => {
    if (error) {
      res.send("somthing wrong");
    } else {
      res.status(200).json(result.rows);
    }
  });
};

module.exports = {
  getAllStudents,
  getStudent,
};
