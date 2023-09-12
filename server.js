const express = require("express");
const studentRouter = require("./source/routes/students_routes");

const app = express();
const port = 3400;

// Middleware
app.use(express.json());

// Landing Page
app.get("/", (req, res) => {
  res.send("Welcome To My first Nodejs Api");
});

// Getting All Students
app.use("/api/students", studentRouter);

app.listen(port, () => {
  console.log(`Server is running on this port http://localhost:${port}`);
});
