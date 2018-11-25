var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send({
    Output: "Hello Jake!"
  });
});

app.post("/", (req, res) => {
  res.send({
    Output: "Hello Jake!"
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
