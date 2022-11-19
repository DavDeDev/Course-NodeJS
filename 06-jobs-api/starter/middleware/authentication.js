const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth =async (req, res, next) => {
  //check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Accesss denied");
  }
  const token=authHeader.split(' ')[1];

  try{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes

    // ! We might see this syntax to check for the user in the database
    const user = User.findById(payload.id).select('-password'); //.select ('-') will remove the property from the code
    // ! and then we send the object without the password
    req.user=user;

    //!... or we create the object here without checking the database 
    req.user = {userId:payload.userId,name:payload.name};


    next();
  }catch(error){
    throw new UnauthenticatedError('Access denied')
  }
};

module.exports = auth