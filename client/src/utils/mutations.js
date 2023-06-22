import { gql } from "@apollo/client";

export const ADD_EXERCISE = gql`
  mutation addExercise(
    $title: String!
    $muscle: String!
    $instructions: [String]!
    $sets: Int!
    $reps: String!
  ) {
    addExercise(
      title: $title
      muscle: $muscle
      instructions: $instructions
      sets: $sets
      reps: $reps
    ) {
      _id
      title
      muscle
      instructions
      sets
      reps
    }
  }
`;

