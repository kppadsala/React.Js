import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function InputCom() {
  let [task, setTask] = useState("");
  let [arr, setarr] = useState([]);

  const addArray = () => {
    setarr([...arr,task])
    setTask("");
  }
  const getData = (ele) => {
    
    console.log("---->", ele.target.value)
    setTask(ele.target.value);
  };
    return (
      <div className=" text-black w-100">
        <h1 className="text-center">Input type:-{task}</h1>
        <div className="w-100 d-flex justify-content-center pt-4">
          <Input
            placeholder="Enter Random String"
            className="w-25 rounded-end-0 border-danger"
            onChange={(e) => getData(e)}
            value={task}
          ></Input>

          
          <Button
            className="bg-danger border-0 bor rounded-start-0"
            onClick={() => addArray()}
          >
            <HiPlus />
          </Button>
        </div>
        <div className="text-black  d-flex justify-content-center  mt-5">
          <ol className=" w-25 d-flex justify-content-center align-items-center flex-column">
            {arr.map((e, i) => {
              return (
                <>
                  <li
                    className="list-unstyled border border-bottom-2 border-danger w-100 text-center mt-1 p-2 d-flex justify-content-between align-items-center"
                    key={i}
                  >
                    <span>
                      <h5>{i}</h5>
                    </span>
                    <span>
                      <h5>{e}</h5>
                    </span>
                    <Button className="bg-danger border-0">
                      <h5>
                        <RiDeleteBin6Line />
                      </h5>
                    </Button>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    );
}
