// Mongoose is a popular API for connecting to MongoDB
const mongoose = require('mongoose');

//! If we upload this to a repo everyone will be able to see our password
// to avoid this we use a .env file which will keep our password safe
// TODO: Create a .env file and add the password there and add .env to .gitignore

// const connectionString =
//   "mongodb+srv://david:XJCTqFtz9UfU3bz@nodeexpressprojects.cwgk2x3.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";


// We create this function to be able to kill the application if the connection fails
//!!PREMISE: We are using async/await
const connectDB =  (url) => {
  mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    })};

//!! We export the function so we can set the error handling in app.js
  // .then(() => {console.log("CONNECTED TO THE DB...");})
  // .catch((err) => {console.log("ERROR CONNECTING TO THE DB...", err)});


  module.exports = connectDB;