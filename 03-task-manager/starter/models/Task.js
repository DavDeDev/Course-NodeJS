const mongooose = require("mongoose");

//MongoDB is very loose with the data types, so we need to define them
const TaskSchema = new mongooose.Schema({
  name: String,
  completed: Boolean,
});

// Now we need to create a model => representation of a collection
module.exports = mongooose.model("task", TaskSchema);