const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxLength: 50,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      //! We are tying the job model with the user's one
      type: mongoose.Types.ObjectId,
      ref: "User", // which model are we referring to
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true } //! This will add "createdAt" and "updatedAt" properties with the timestamps
);

module.exports = mongoose.model("Job", JobSchema);
