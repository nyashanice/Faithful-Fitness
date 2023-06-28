import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Category() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const categoryRadio = event.currentTarget;
    if (categoryRadio.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(categoryRadio);
  };

  return (
    <div>
      <div className="d-flex flex-row flex-wrap">
        <div className="p-2 text-center">
          <div>Step 1</div>
          <div>What workout are you planning on doing?</div>
        </div>
        <div className="p-2">
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Check
              type="radio"
              label="Push (chest, shoulders, triceps)"
              id="push"
              name="muscles"
              required
            />
            <Form.Check
              type="radio"
              label="Pull (back and biceps)"
              id="pull"
              name="muscles"
            />
            <Form.Check
              type="radio"
              label="Hamstrings and glutes"
              id="hammies-glutes"
              name="muscles"
            />
            <Form.Check
              type="radio"
              label="Quads and glutes"
              id="quads-glutes"
              name="muscles"
            />
            <Form.Check
              type="radio"
              label="Glutes only"
              id="glutes"
              name="muscles"
            />
          </Form>
        </div>
      </div>
      <div className="text-center">
        <Button type="submit">NEXT</Button>
      </div>
    </div>
  );
}
