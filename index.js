const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/", (req, res) => {
  res.send("welcome to learning website!");
});

app.listen(port, () => {
  console.log(`Learning app listening on port ${port}`);
});
