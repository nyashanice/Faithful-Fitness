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
      { title, muscle, equipment, instructions, sets, reps }
    ) => {
      return Exercise.create({
        title,
        muscle,
        equipment,
        instructions,
        sets,
        reps,
      });
    },
    removeExercise: async (parent, { exerciseId }) => {
      return Exercise.findOneAndDelete({ _id: exerciseId });
    },
  },
};

module.exports = resolvers;
