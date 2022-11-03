//App.js could get very big, so we can split it into different files
// Let's store logger in a separate file and import it
const logger = require("./logger");
const authorize = require("./authorize");

const express = require("express");
const app = express();

// How can we add the logger middleware to all the routes without copying and pasting it?
// We can use app.use() to add the middleware to all the routes
// TODO: the order matters! so if you put app.use(logger) after app.get() it will not work
//app.use(logger);

//We can add multiple middlewares by passing an array
//TODO: Again, the order matters! so logger will be executed first and then authorize
app.use([authorize, logger]);

//We can add a path where the middleware will be applied
// app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  //now I can access the user object from the authorize middleware
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
