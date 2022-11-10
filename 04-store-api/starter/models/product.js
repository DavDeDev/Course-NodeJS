const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    //The second value is the custom error message
    required: [true, "Please enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // to limit the possible options for the company field
    //enum: ['ikea', 'liddy', 'caressa', 'marcos'],
    // To include an error message for the enum validation
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      // {VALUE} will access the input
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
