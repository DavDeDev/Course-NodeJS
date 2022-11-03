//TODO: Import the modules
const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
//TODO: Static means that the files are not going to change, usually CSS, JS, images, etc. goes in the public folder
app.use(express.static("./public"));

//We listen for all get requests to the root path
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
