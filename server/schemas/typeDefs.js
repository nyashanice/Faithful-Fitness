const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Exercise {
    _id: ID
    title: String!
    muscle: String!
    instructions: [String]!
    sets: Int!
    reps: String!
  }

  type Query {
    exercises: [Exercise]!
    exercise(exerciseId: ID!): Exercise
  }

  type Mutation {
    addExercise(
      title: String!
      muscle: String!
      instructions: [String]!
      sets: Int!
      reps: String!
    ): Exercise
    removeExercise(exerciseId: ID!): Exercise
  }
`;

module.exports = typeDefs;
