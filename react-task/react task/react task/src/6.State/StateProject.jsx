import React, { useState } from "react";
import { Button } from "reactstrap";

let name = ["Krunal", "Ankit", "Nirmal", "Sumit", "Harshil"];
export default function StateProject() {
  let [index, setIndex] = useState(0);
  const intIndex = () => {
    setIndex(index + 1);
    if (index == name.length - 1) {
      let value = confirm("You can repeate This Array");
      value ? setIndex(0) : setIndex(index + 1);
    }
  };
  return (
    <>
      <h1>index={index}</h1>

      <h1>{name[index]}</h1>
      {/* <Button color="danger" onClick={() => intIndex()}> */}
      <Button color="danger" onClick={intIndex}>
        Chnage Name
      </Button>
    </>
  );
}
