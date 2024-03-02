import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function RadioInput() {
  let [gender, setgender] = useState("");
  return (
    <div className="text-black d-flex justify-content-center align-items-center mt-3">
      <div className="border border-danger p-3 rounded-2">
        <form action="">
          <FormGroup tag="fieldset" className="text-black ">
            <legend className="h1 text-danger bg-dark-subtle p-2 rounded-2 mb-4">
              Radio Buttons
            </legend>
            <div className="d-flex justify-content-center flex-column align-items-center h5">
              <h5> Your Gender is {gender}</h5>
              <FormGroup check className="text-black ">
                <Input
                  name="radio1"
                  type="radio"
                  checked={gender === "male"}
                  onChange={() => setgender("male")}
                />
                <Label check>MALE</Label>
              </FormGroup>
              <FormGroup check className="text-black">
                <Input
                  name="radio1"
                  type="radio"
                  checked={gender === "female"}
                  onChange={() => setgender("female")}
                />
                <Label check>FEMALE</Label>
              </FormGroup>
              <FormGroup check className="text-black">
                <Input
                  name="radio1"
                  type="radio"
                  checked={gender === "other"}
                  onChange={() => setgender("other")}
                />
                <Label check>OTHER</Label>
              </FormGroup>
            </div>
          </FormGroup>
        </form>
      </div>
    </div>
  );
}
