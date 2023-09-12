const { Router } = require("express");
const controller = require("../controller/students_controller");
const router = Router();

// Getting all students
router.get("/", controller.getAllStudents);

// Getting one student
router.get("/:id", controller.getStudent);

module.exports = router;
