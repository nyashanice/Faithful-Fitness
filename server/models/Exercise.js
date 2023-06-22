const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  muscle: {
    type: String,
    required: true,
  },
  instructions: {
    // array of strings
    type: [String],
    required: true,
    trim: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: String,
    required: true,
  }
  //   add gifs/videos of exercise
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
