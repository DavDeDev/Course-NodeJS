//!! MODULES
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
// To access the hidden .env file we use the dotenv package
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");



//!! MIDDLEWARE
// to notify where the static files are located
app.use(express.static("./public"));
// This middleware serves to read incoming json requests
app.use(express.json());


//!! ROUTES
app.use("/api/v1/tasks", tasks);

//For every other routes that is not found (the order is important!!!)
app.use(notFound);
app.use(errorHandlerMiddleware);

// ! We have this constant, but when we deploy the website we have to set up in a different way
const port = process.env.PORT || 3000;

// Whenever we use async it is better to use try/catch
const start = async () => {
  try {
    // tO USE THE .env FILE WE USE process.env
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();

