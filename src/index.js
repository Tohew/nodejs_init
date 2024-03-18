const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 8080;

// Use img
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template Engine
const hbs = handlebars.create({
  defaultLayout: "main",
  extname: ".hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
