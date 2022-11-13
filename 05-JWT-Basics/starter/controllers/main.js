// Check username, password in the request body
// If they match, send back a JWT token
// If they don't match, send back an error

// Then only the request with a JWT token can access the dashboard

const jwt = require("jsonwebtoken");
// const CustomAPIError = require("../errors/custom-error");
//! Instead of importing the parent class, we can import the error classes directly
const {BadRequestError} = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  //! Ways to validate the username and password:
  // 1. Check if the username and password are in the database -> mongoose
  // 2. Another layer of validation -> package JOI
  // 3. Check directly in the controller
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //Since we don't have a db, we will create a dummy username
  const id = new Date().getDate();

  // Create a JWT token
  //!! Never put secret information in the payload
  //!! The payload should be as small as possible to reduce the size of the token and increase the performance of the app
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "10s",
  });
  res.status(200).json({ msg: "user created with token:", token });
};

const dashboard = async (req, res) => {
  //!! We have moved all this logic to the auth.js file
  // const authHeader = req.headers.authorization;
  // // If the request doesn't have the authorization header, or it doesn't start with Bearer, send back an error
  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   throw new CustomAPIError("Please provide a token", 401);
  // }

  // const token = authHeader.split(" ")[1];
  // // If the token is not valid, send back an error
  // try {
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hello ${req.user.username}`,
      secret: `Here is the secret ${luckyNumber}`,
    });
  // } catch {
  //   // if, for instance the token is expired, send back an error
  //   throw new CustomAPIError("Not authorized to access this route", 401);
  // }
};

module.exports = { login, dashboard };
