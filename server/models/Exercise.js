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
  equipment: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  //   add gifs/videos of exercise
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
