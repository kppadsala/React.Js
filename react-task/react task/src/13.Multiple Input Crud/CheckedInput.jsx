import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function CheckedInput() {
  let [color, setColor] = useState([]);

  const checkHandler = (clr, e) => {
    if (e?.target?.checked) {
      setColor([...color, clr]);
    } else {
      let filterData = color.filter((e) => e !== clr)
    setColor(filterData)} 

  };

  return (
    <div className=" d-flex justify-content-center">
      <div className="border border-danger p-3 rounded-2">
        <form action="">
          <FormGroup tag="fieldset" className="text-black ">
            <legend className="h1 text-danger bg-dark-subtle p-2 rounded-2 mb-4">
              Check Box
            </legend>
            <div className="d-flex justify-content-center flex-column align-items-center h5">
              <h5> Your Color is {color}</h5>
              <FormGroup check className="text-black ">
                <Input
                  className="border border-black"
                  type="checkbox"
                  checked={color.includes("white")}
                  onChange={(e) => checkHandler("white", e)}
                />
                <Label check>white</Label>
              </FormGroup>
              <FormGroup check className="text-black">
                <Input
                  className="border border-black"
                  type="checkbox"
                  checked={color.includes("yellow")}
                  onChange={(e) => checkHandler("yellow", e)}
                />
                <Label check>yellow</Label>
              </FormGroup>
              <FormGroup check className="text-black">
                <Input
                  className="border border-black"
                  type="checkbox"
                  checked={color.includes("red")}
                  onChange={(e) => checkHandler("red", e)}
                />
                <Label check>red</Label>
              </FormGroup>
              <FormGroup check className="text-black">
                <Input
                  className="border border-black"
                  type="checkbox"
                  checked={color.includes("blue")}
                  onChange={(e) => checkHandler("blue", e)}
                />
                <Label check>blue</Label>
              </FormGroup>
              <FormGroup check className="text-black">
                <Input
                  className="border border-black"
                  type="checkbox"
                  checked={color.includes("black")}
                  onChange={(e) => checkHandler("black", e)}
                />
                <Label check>black</Label>
              </FormGroup>
            </div>
          </FormGroup>
        </form>
      </div>
    </div>
  );
}
