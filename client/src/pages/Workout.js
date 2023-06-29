import React, { useState } from "react";
import FormChoices from "../components/Form";
import { useQuery } from "@apollo/client";
import { QUERY_EXERCISES } from "../utils/queries";

export default function Workout() {
  const [workout, setWorkout] = useState();
  const [equipment, setEquipment] = useState();
  const [validated, setValidated] = useState(false);
  const { data } = useQuery(QUERY_EXERCISES);
  const exercises = data?.exercises || [];

  const handleFormSubmit = (submittedData) => {
    // Perform additional logic using the form submission data
    // For example: update state, make an API call, etc.
    setWorkout(submittedData.workout);
    setEquipment(submittedData.equipment);
    console.log(workout, equipment);
    setValidated(true);
  };

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

  // const workoutCategory = filterWorkout(chosenWorkout, exercises);
  // console.log(workoutCategory);

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

  // const workoutEquipment = filterEquipment(workoutCategory, chosenEquipment);
  // console.log(workoutEquipment);

  // shuffles through new array and slices so results are different each time
  function randomizeExercises(workoutEquipment, count) {
    if (!workoutEquipment || workoutEquipment.length === 0) {
      // Handle the case where exercises is undefined or empty
      return [];
    } else {
      // Shuffle the array
      const shuffledExercises = workoutEquipment.sort(
        () => Math.random() - 0.5
      );
      // Return a certain amount of results
      return shuffledExercises.slice(0, count);
    }
  }

  // const customWorkoutArr = randomizeExercises(workoutEquipment, 5);
  // console.log(customWorkoutArr);

  return (
    <div>
      <FormChoices
        onFormSubmit={handleFormSubmit}
        validated={validated}
        workout={workout}
        setWorkout={setWorkout}
        equipment={equipment}
        setEquipment={setEquipment}
      />
      <div>
        <h1 className="text-center">Custom Workout</h1>
        {/* <ul>
          {customWorkoutArr.map((exercise) => (
            <li key={exercise.title}>{exercise.title}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
