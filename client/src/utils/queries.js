import { gql } from "@apollo/client";

export const QUERY_EXERCISES = gql`
  query getExercises {
    exercises {
      _id
      title
      muscle
      equipment
    }
  }
`;

export const QUERY_SINGLE_EXERCISE = gql`
  query getSingleExercise($exercideId: ID!) {
    exercise(exerciseId: $exerciseId) {
      _id
      title
      muscle
      equipment
      instructions
      sets
      reps
    }
  }
`;
