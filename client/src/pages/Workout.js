import React, { useState } from "react";
import Category from "../components/categoryForm";
import Machine from "../components/machineForm";
import { useQuery } from "@apollo/client";
import { QUERY_EXERCISES } from "../utils/queries";

export default function Workout() {
  const [workout, setWorkout] = useState();
  const [equipment, setEquipment] = useState();
  const [validated, setValidated] = useState(false);
  // const [customWorkout, setCustomWorkout] = useState([]);
  const { data } = useQuery(QUERY_EXERCISES);
  const exercises = data?.exercises || [];
  let chosenWorkout = workout;

  // if (validated === true) {
  //   chosenWorkout = workout;
  //   const equipmentType = equipment;
  //   console.log(workout);
  //   console.log(equipment);
  //   console.log(chosenWorkout, equipmentType);
  // }

  console.log(chosenWorkout);

  const createWorkout = (chosenWorkout, exercises) => {
    if (chosenWorkout === "Push") {
      return exercises.filter(
        (exercise) =>
          exercise.muscle === "chest" ||
          exercise.muscle === "shoulders" ||
          exercise.muscle === "triceps"
      );
    } else if (chosenWorkout === "Pull") {
      return exercises.filter(
        (exercise) => exercise.muscle === "back" || exercise.muscle === "biceps"
      );
    } else if (chosenWorkout === "Hamstrings and glutes") {
      return exercises.filter(
        (exercise) =>
          exercise.muscle === "hamstrings" || exercise.muscle === "glutes"
      );
    } else if (chosenWorkout === "Quads and glutes") {
      return exercises.filter(
        (exercise) =>
          exercise.muscle === "quads" || exercise.muscle === "glutes"
      );
    } else if (chosenWorkout === "Glutes") {
      return exercises.filter((exercise) => exercise.muscle === "glutes");
    }
  };

  const workoutCategory = createWorkout(chosenWorkout, exercises);
  console.log(workoutCategory);

  return (
    <div>
      <Category
        workout={workout}
        setWorkout={setWorkout}
        validated={validated}
        setValidated={setValidated}
      />
      <Machine
        equipment={equipment}
        setEquipment={setEquipment}
        validated={validated}
        setValidated={setValidated}
      />
      {/* Access console log from category component */}
      {/* Access console log from machine component */}
      {/* Filter through db to find workouts that are from the right category */}
      {/* Filter through that list to find workouts that use the right equipment */}
      {/* Choose 5 random exercises */}
      {/* Display info */}
    </div>
  );
}
