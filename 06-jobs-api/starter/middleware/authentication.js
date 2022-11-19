const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth =async (req, res, next) => {
  //check header
  const authHeader = req.header.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Access denied");
  }
  const token=authHeader.split(' ')[1];

  try{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = {userId:payload.userId,name:payload.name};

  }catch(error){
    throw new UnauthenticatedError('Access denied')
  }
};

module.exports =auth; 
