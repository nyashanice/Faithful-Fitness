import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Machine() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const radio = event.currentTarget;
    if (radio.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <div className="d-flex flex-row flex-wrap">
        <div className="p-2 text-center">
          <div>Step 2</div>
          <div>Will you be using equipment, dumbbells only, or bodyweight?</div>
        </div>
        <div className="p-2">
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Check
              type="radio"
              label="Equipment"
              id="equipment"
              name="equipment-usage"
              required
            />
            <Form.Check
              type="radio"
              label="Dumbbell only"
              id="dumbbell"
              name="equipment-usage"
            />
            <Form.Check
              type="radio"
              label="Bodyweight"
              id="bodyweight"
              name="equipment-usage"
            />
          </Form>
        </div>
      </div>
      <div className="text-center">
        <Button type="submit">Generate Workout</Button>
      </div>
    </div>
  );
}
