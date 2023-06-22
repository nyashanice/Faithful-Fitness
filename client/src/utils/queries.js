import { gql } from "@apollo/client";

export const QUERY_EXERCISES = gql`
  query getExercises {
    exercises {
      _id
      title
      muscle
    }
  }
`;

export const QUERY_SINGLE_EXERCISE = gql`
  query getSingleExercise($exercideId: ID!) {
    exercise(exerciseId: $exerciseId) {
      _id
      title
      muscle
      instructions
      sets
      reps
    }
  }
`;
