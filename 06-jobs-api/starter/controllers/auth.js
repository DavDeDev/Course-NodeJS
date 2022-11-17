const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
//const {BadRequestError} = require('../errors')
//! NEVER STORE A PASSWORD AS A STRING, hash them before storing
const bcrypt=require('bcryptjs')

const register = async (req, res) => {
  //const {name,email,password} = req.body;
  //! We can use a validator directly in the controller by throwing an error if an element is missing
  // if(!name||!email||!password){
  //   throw new BadRequestError('Please provide name email and password')
  // }
  
  // const salt = await bcrypt.genSalt(10); // We generate 10 random bytes (more is more secure but more processing is requires)
  // const hashedPassword = await bcrypt.hash(password,salt) // Hash will combine the password and those random bytes and generate an hashed password
  // //We set up a temporary user
  // const tempUser = { name,email,password: hashedPassword}

  //!! Instead of handling the hashing here we gonna use a middleware

  const user = await User.create({ ...req.body});
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
