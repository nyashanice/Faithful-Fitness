import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Form.css";

export default function FormChoices({
  onFormSubmit,
  validated,
  workout,
  setWorkout,
  equipment,
  setEquipment,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!workout || !equipment) {
      console.log("Must answer both questions.");
      // add pop up for user
      return;
    }

    const submittedData = {
      workout,
      equipment,
    };

    onFormSubmit(submittedData);
  };

  return (
    <div>
      <div className="d-flex flex-row flex-wrap p-2">
        <Form validated={validated} onSubmit={handleSubmit}>
          <div className="p-2 text-center">
            <div className="form-title">Step 1</div>
            <div className="form-txt">
              What workout are you planning on doing?
            </div>
          </div>
          <Form.Group className="form-txt">
            <Form.Check
              type="radio"
              label="Push (chest, shoulders, triceps)"
              value="Push"
              id="push"
              name="muscles"
              onChange={(e) => setWorkout(e.target.value)}
              required
            />
            <Form.Check
              type="radio"
              label="Pull (back and biceps)"
              value="Pull"
              id="pull"
              name="muscles"
              onChange={(e) => setWorkout(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Hamstrings and glutes"
              value="Hamstrings and glutes"
              id="hammies-glutes"
              name="muscles"
              onChange={(e) => setWorkout(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Quads and glutes"
              value="Quads and glutes"
              id="quads-glutes"
              name="muscles"
              onChange={(e) => setWorkout(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Glutes only"
              value="Glutes"
              id="glutes"
              name="muscles"
              onChange={(e) => setWorkout(e.target.value)}
            />
          </Form.Group>
          <div className="p-2 text-center">
            <div className="form-title">Step 2</div>
            <div className="form-txt">
              Will you be using equipment, dumbbells only, or bodyweight?
            </div>
          </div>
          <Form.Group className="form-txt">
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
          </Form.Group>
          <div className="text-center m-2">
            <Button type="submit" className="form-btn" variant="outline-light">
              Generate Workout
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
