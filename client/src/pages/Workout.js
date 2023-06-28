import React, { useState } from "react";
import Category from "../components/categoryForm";
import Machine from "../components/machineForm";
import { useQuery } from "@apollo/client";
import { QUERY_EXERCISES } from "../utils/queries";

export default function Workout() {
  const [workout, setWorkout] = useState();
  const [equipment, setEquipment] = useState();
  const [validated, setValidated] = useState(false);
  const { data } = useQuery(QUERY_EXERCISES);
  const exercises = data?.exercises || [];

  console.log(exercises);

  if (validated === true) {
    const workoutType = workout;
    const equipmentType = equipment;
    console.log(workout);
    console.log(equipment);
    console.log(workoutType, equipmentType);
  }

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
