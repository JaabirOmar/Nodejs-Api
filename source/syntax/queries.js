const getAllStudents = "SELECT * FROM students";
const getStudent = "SELECT * FROM students WHERE id = $1";

module.exports = {
  getAllStudents,
  getStudent,
};
