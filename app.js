const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Haha Worldrs</h1>");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Project start");
});
