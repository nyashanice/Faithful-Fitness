import React, { useState, useEffect } from "react";
import FormChoices from "../components/Form";
import { useQuery } from "@apollo/client";
import { QUERY_EXERCISES } from "../utils/queries";
import Table from "react-bootstrap/Table";

export default function Workout() {
  const [workout, setWorkout] = useState();
  const [equipment, setEquipment] = useState();
  const [validated, setValidated] = useState(false);
  const [customWorkoutArr, setCustomWorkoutArr] = useState([]);
  const { data } = useQuery(QUERY_EXERCISES);

  // takes user choices from FormChoices props and stores them in state variables
  const handleFormSubmit = (submittedData) => {
    setWorkout(submittedData.workout);
    setEquipment(submittedData.equipment);
    console.log(workout, equipment);
    setValidated(true);
  };

  useEffect(() => {
    // waits until submit button on form is clicked (validated) before calling functions
    if (validated) {
      const exercises = data?.exercises || [];
      const filteredWorkout = filterWorkout(workout, exercises);
      const filteredEquipment = filterEquipment(filteredWorkout, equipment);
      const customWorkout = randomizeExercises(filteredEquipment, 5);
      setCustomWorkoutArr(customWorkout);
      console.log(customWorkout);
    }
  }, [validated, workout, equipment, data]);

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
    return [];
  };

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
    return [];
  };

  // shuffles through new array and slices so results are different each time
  function randomizeExercises(customExercises, count) {
    if (!customExercises || customExercises.length === 0) {
      return [];
    } else {
      // shuffle the array
      const shuffledExercises = customExercises.sort(() => Math.random() - 0.5);
      // return a certain amount of results
      return shuffledExercises.slice(0, count);
    }
  }

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

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            {customWorkoutArr.map((exercise, index) => (
              <tr
                key={`${exercise.title}-${exercise.sets}-${exercise.reps}-${index}`}
              >
                <td></td>
                <td >{exercise.title}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.reps}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
