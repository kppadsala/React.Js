import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function ConRenTask() {
    let[color,setcolor]=useState(true)
  return (
    <div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: color?'blue':'pink',
            margin: "15px",
          }}
        ></div>
        {color ? (
          <Button
            className="bg-danger w-25 mt-2 border-0 fw-bold"
            onClick={() => {
              setcolor(false);
            }}
          >
            Boys
          </Button>
        ) : (
          <Button
            className="bg-danger w-25 mt-2 border-0 fw-bold"
            onClick={() => {
              setcolor(true);
            }}
          >
            Girls
          </Button>
        )}
      </div>
    </div>
  );
}
