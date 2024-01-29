import React, { useRef } from 'react'
import { Button, Input } from 'reactstrap'

export default function Userefinput() {
    const myref = useRef(null);
    const focusInput = () => {
        myref.current.focus();
    }
  return (
    <div className="text-black  ">
      <div className="d-flex justify-content-center gap-3 ">
              <Input className="w-25 mt-3" ref={myref} type='text'></Input>
        <Button className="bg-info border-0 text-black mt-3 w-25" onClick={focusInput}>
          Click Here
        </Button>
                   </div>
          <h1></h1>
    </div>
  );
}

import React from "react";
import { useRef } from "react";

const UseRefComponent = () => {
  const myRef = useRef(null);
  // console.log(myRef);

  const focusInput = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default UseRefComponent;