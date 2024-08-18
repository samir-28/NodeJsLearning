const express = require("express");
const app = express();

app.set('view engine','ejs')


app.get("/", (req, res) => {
  const data={
    name:'samir',
    age:'21'
  }
  res.render("home.ejs",{
    haha:data
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(3000, () => {
  console.log("Project start");
});
