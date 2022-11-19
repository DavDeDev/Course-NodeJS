const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
//! NEVER STORE A PASSWORD AS A STRING, hash them before storing
//const bcrypt=require('bcryptjs')
//const jwt = require("jsonwebtoken");

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

  //!!1) Instead of handling the hashing here we gonna use a middleware

  const user = await User.create({ ...req.body });

  //   const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecret", {
  //     expiresIn: "30d",
  //   });
  // !! 2) Instead of creating the token here we gonna do in the schema
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  //If the user doesn't exist
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  //else check password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
