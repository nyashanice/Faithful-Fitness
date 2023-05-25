const { Exercise } = require("../models");

const resolvers = {
  Query: {
    exercises: async () => {
      return Exercise.find();
    },

    exercise: async (parent, { exerciseId }) => {
      return Exercise.findOne({ _id: exerciseId });
    },
  },

  Mutation: {
    addExercise: async (
      parent,
      { title, muscle, instructions, sets, reps, bodyPart }
    ) => {
      return Exercise.create({
        title,
        muscle,
        instructions,
        sets,
        reps,
        bodyPart,
      });
    },
    removeExercise: async (parent, { exerciseId }) => {
      return Exercise.findOneAndDelete({ _id: exerciseId });
    },
  },
};

module.exports = resolvers;
