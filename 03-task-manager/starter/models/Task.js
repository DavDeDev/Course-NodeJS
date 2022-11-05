const mongooose = require("mongoose");

//MongoDB is very loose with the data types, so we need to define them
const TaskSchema = new mongooose.Schema({
  name: {
    //This is the built-in validator
    type: String,
    //If I pass a value without the name property, it will throw an error
    required: [true, "Please provide a name"],
    // This will trim the spaces before and after the name
    trim: true,
    // This will limit the length of the name
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  completed:{
    type: Boolean,
    // Set a default value if the user doesn't provide one
    default: false
  }
});

//! All other properties will be ignored

// Now we need to create a model => representation of a collection
module.exports = mongooose.model("task", TaskSchema);
