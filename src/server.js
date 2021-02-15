const express = require("express");
const app = express();

app.get("/student_id", (req, res) => {
  res.send("61070132");
});

module.exports = app;
