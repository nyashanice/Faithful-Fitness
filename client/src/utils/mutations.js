import { gql } from "@apollo/client";

export const ADD_EXERCISE = gql`
  mutation addExercise(
    $title: String!
    $muscle: String!
    $equipment: String!
    $link: String!
  ) {
    addExercise(
      title: $title
      muscle: $muscle
      equipment: $equipment
      link: $link
    ) {
      _id
      title
      muscle
      equipment
      link
    }
  }
`;
