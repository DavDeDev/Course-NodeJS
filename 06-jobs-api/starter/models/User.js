const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    //! The input has to match the regex
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    // this constraint creates a unique index
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 6,
    // Because we gonna generate an hash value for the password we don't need a limit in length
    // maxLength: 12,
  },
});

UserSchema.pre('save',async function(){
  const salt = await bcrypt.genSalt();
  //! This refers to the document!!
  this.password = await bcrypt.hash(this.password,salt);
  //next(); Read the documentation https://mongoosejs.com/docs/middleware.html#pre
})

module.exports = mongoose.model("User", UserSchema);
