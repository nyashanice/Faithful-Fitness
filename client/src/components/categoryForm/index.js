import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Category({workout, setWorkout, validated, setValidated}) {
  const handleSubmit = (event) => {
    if (workout === undefined) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Must choose workout.");
    }

    setValidated(true);
    // console.log(workout);
  };

  return (
    <div>
      <div className="d-flex flex-row flex-wrap">
        <div className="p-2 text-center">
          <div>Step 1</div>
          <div>What workout are you planning on doing?</div>
        </div>
        <div className="p-2">
          <Form validated={validated} onSubmit={handleSubmit} workout={workout}>
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
            <div className="text-center">
              <Button type="submit">NEXT</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
