const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const TaskSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "title is require"],
      minLength: [4, "minimum title char is 4"],
      maxLength: [20, "maximum title char is 20"],
    },
    colorNumber: {
      type: Number,
      min: [2, "colorNumber between 2 to 5"],
      max: [5, "colorNumber between 2 to 5"],
    },
    description: String,
  },
  { versionKey: false }
);

module.exports = model("Tasks", TaskSchema);
