import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function DeleteCom() {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);
  const [index, setindex] = useState(null);

  const getData = (ele) => {
    setData(ele.target.value);
  };

  const addData = () => {
    if (data !== "") {
      if (!task.includes(data)) {
        setTask([...task, data]);
        setData("");
      } else {
        alert("data already exists");
      }
    } else {
      alert("Please Fill This Info");
    }
  };

  const updateHandle = (data, index) => {
    setindex(index);
    setData(data);
  };
  const updateData = () => {
    if (index !== null) {
      task[index] = data;
      setTask([...task]);
      setData("");
      setindex(null);
    }
  };

  const deleteTask = (index) => {
    let filterData = task.filter((e, i) => i !== index);
    setTask(filterData);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
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
            onKeyPress={handleKeyPress} // Add event listener for Enter key press
            style={{
              borderRadius: "5px 0px 0px 5px",
            }}
          ></Input>
          
          <Button
            className="bg-danger border-0"
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={addData}
          >
            <FaPlus />
          </Button>
          <Button
            className="bg-danger border-0"
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={() => updateData()}
          >
            Update
          </Button>
        </div>
        <div className="text-black mt-4 p-3 listbox ">
          {task.length === 0 && (
            <h5 className="text-black-50">Data Is Not Found</h5>
          )}
          {task.map((e, i) => (
            <li
              className="list-unstyled border border-bottom-2 bg-primary w-100 text-center mt-1 ps-3 pe-3 p-2 d-flex justify-content-between align-items-center rounded-1"
              key={i}
            >
              <span className="bg-light p-2 ps-3 pe-3 rounded-1">
                <h5>{i + 1}</h5>
              </span>
              <span>
                <h5>{e}</h5>
              </span>
              <div className="text-black d-flex gap-3">
                <h3>
                  <FaEdit onClick={() => updateHandle(e, i)} />
                </h3>
                <h3>
                  <RiDeleteBin6Line
                    className=""
                    onClick={() => deleteTask(i)}
                  />
                </h3>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
