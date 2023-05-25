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
    type: String,
    required: true,
  },
  reps: {
    type: String,
    required: false,
  },
  bodyPart: [
    {
      type: Schema.Types.String,
      ref: "bodyPart",
    },
  ],
  //   add gifs/videos of exercise
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
