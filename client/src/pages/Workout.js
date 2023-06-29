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
  // workout that user chooses to do
  let chosenWorkout = workout;
  // whether user is using gym equipment, dumbbell only, or bodyweight
  let chosenEquipment = equipment;

  // filters through database of exercises to find those that match the selected category
  const filterWorkout = (chosenWorkout, exercises) => {
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

  const workoutCategory = filterWorkout(chosenWorkout, exercises);
  console.log(workoutCategory);

  // filters through new array of exercises to find those that use the correct equipment
  const filterEquipment = (workoutCategory, chosenEquipment) => {
    if (chosenEquipment === "Equipment") {
      return workoutCategory.filter(
        (exercise) =>
          exercise.equipment === "Equipment" ||
          exercise.equipment === "Dumbbell only"
      );
    } else if (chosenEquipment === "Dumbbell only") {
      return workoutCategory.filter(
        (exercise) => exercise.equipment === "Dumbbell only"
      );
    } else if (chosenEquipment === "Bodyweight") {
      return workoutCategory.filter(
        (exercise) => exercise.equipment === "Bodyweight"
      );
    }
  };

  const workoutEquipment = filterEquipment(workoutCategory, chosenEquipment);
  console.log(workoutEquipment);

  // shuffles through new array and slices so results are different each time
  function randomizeExercises(exercises, count) {
    // Shuffle the array
    const shuffledExercises = exercises.sort(() => Math.random() - 0.5);
    // Return a certain amount of results
    return shuffledExercises.slice(0, count);
  }

  const customWorkoutArr = randomizeExercises(workoutEquipment, 5);
  console.log(customWorkoutArr);

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
