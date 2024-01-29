import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";


export default function DeleteCom() {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);

  const getData = (ele) => {
    if (ele.target.value !== getData) {
      setData(ele.target.value);
    } else {
      alert("update Your data");
    }
    console.log("--->",ele.target.value);
  };
  

  const addData = () => {
    if (data !== "" ) {
      setTask([...task, data]);
      setData("");
    } else {
      alert("Please Fill This Info")
    }
      
    
  };

  const deleteTask = (index) => {
    console.log("====>", index)
    let filterData=task.filter((e,i)=> i!==index)
    console.log("----->", filterData)
    setTask(filterData);
  };

  return (
    <div className="d-flex justify-content-center w-100 ">
      <div className="d-flex justify-content-center flex-column w-25 mt-5">
        <h2 className="text-black">Printed Here:-{data}</h2>
        <div className="d-flex justify-content-center w-100 mt-2">
          <Input
            className="w-100 border-2 border-danger "
            placeholder="Enter Your Data"
            value={data}
            onChange={(e) => getData(e)}
            style={{
              borderRadius: "5px 0px 0px 5px",
            }}
          ></Input>
          <Button
            className="bg-danger border-0"
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={() => addData()}
          >
            <FaPlus />
          </Button>
        </div>
        <div className="text-black mt-4">
          {task.map((e, i) => (
            <li
              className="list-unstyled border border-bottom-2 border-danger w-100 text-center mt-1 p-2 d-flex justify-content-between align-items-center"
              key={i}
            >
              <span>
                <h5>{i + 1}</h5>
              </span>
              <span>
                <h5>{e}</h5>
              </span>
              <Button className="bg-danger border-0">
                <h5>
                  <RiDeleteBin6Line onClick={() => deleteTask(i)} />
                </h5>
              </Button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
