const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>YOU ARE SCREWED!!</h1>");
});

app.get("/about", function (req, res) {
  res.send(
    "A girl is no_one, and the girl says when death knocks our door, we say ------- Not Today!!"
  );
});

app.listen(3000, function (req, res) {
  console.log("server UP!!!");
});
