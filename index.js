require("express");

// input required modules
const express = require("express");

// storing port in variaable
const port = 9000;

// create an express application
const app = express();

// define a route handler fro the root path

app.get("/", (req, res) => {
  res.send("Welcome to my home page");
});

app.get("/submit", (req, res) => {
  res.send("receive post request");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.get("/login", (req, res) => {
  res.send("Welcome to login page");
});

app.get("/signup", (req, res) => {
  res.send("Welcome to signup page");
});

// starting the server

app.listen(port, () => {
  console.log("Server started successfully");
});
