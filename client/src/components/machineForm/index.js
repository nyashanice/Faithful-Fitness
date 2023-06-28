import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Machine() {
  const [validated, setValidated] = useState(false);
  const [equipment, setEquipment] = useState();

  const handleSubmit = (event) => {
    console.log(equipment);
    if (equipment === undefined) {
      event.preventDefault();
      event.stopPropagation();
      console.log("must choose");
    }

    setValidated(true);
    console.log(equipment);
  };

  return (
    <div>
      <div className="d-flex flex-row flex-wrap">
        <div className="p-2 text-center">
          <div>Step 2</div>
          <div>Will you be using equipment, dumbbells only, or bodyweight?</div>
        </div>
        <div className="p-2">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            equipment={equipment}
          >
            <Form.Check
              type="radio"
              label="Equipment"
              value="Equipment"
              id="equipment"
              name="equipment-usage"
              onChange={(e) => setEquipment(e.target.value)}
              required
            />
            <Form.Check
              type="radio"
              label="Dumbbell only"
              value="Dumbbell only"
              id="dumbbell"
              name="equipment-usage"
              onChange={(e) => setEquipment(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Bodyweight"
              value="Bodyweight"
              id="bodyweight"
              name="equipment-usage"
              onChange={(e) => setEquipment(e.target.value)}
            />
            <div className="text-center">
              <Button type="submit">Generate Workout</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
