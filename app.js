var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send({
    Output: "안녕 제이크!"
  });
});

app.post("/", (req, res) => {
  res.send({
    Output: "안녕 제이크!"
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
