
// Middleware are functions that execute during the request to the server
// Middleware are everywhere in Express

const express = require("express");
const app = express();

// request come in -> middleware executes something (e.g. console.log) -> response goes out
//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // TODO: Always include next() at the end of the middleware to move to the next middleware
  next();
  // Or you can end the response inside the middleware
  //res.send("Testing");
};

//logger is the middleware function
app.get("/", logger, (req, res) => {
  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  //TODO: What if I want the same method running in about? I would have to copy and paste the code or I can create a middleware
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
