import React, { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Input } from "reactstrap";

export default function ComCrud() {
  let [bird, setbird] = useState("");
  let [birdArr, setbirdArr] = useState([]);
  let [index, setindex] = useState(null);

  const getData = (ele) => {
    setbird(ele.target.value);
  };

  const addData = () => {
    if (bird !== "") {
      if (!setbirdArr.includes(bird)) {
        setbirdArr([...birdArr, bird]);
        setbird("");
      } else {
        alert("!!WARNING. THIS DATA IS SIMILAR ");
      }
    } else {
      alert("PLEASE FILL THE DATA");
    }
  };

  const EnterHandle = (e) => {
    if (e.key == "Enter") {
      addData();
    }
  };

  const deleteHandle = (index) => {
    let filterData = birdArr.filter((e, i) => i !== index);
    setbirdArr(filterData);
  };

  const updateHandle = (data, index) => {
    setbird(data);
    setindex(index);
  };

  const upData = () => {
    birdArr.splice(index, 1, bird);
    setbird([...birdArr]);
    setbird("");
    setindex(null);
  };
  // ===================================================

  return (
    <div className=" mt-4 d-flex  justify-content-center flex-column w-50">
      <h1 className="text-black">Your writeing is {bird}</h1>
      <div className="d-flex w-50 justify-content-center">
        <Input
          placeholder="Enter your data"
          value={bird}
          onChange={(e) => getData(e)}
          onKeyPress={EnterHandle}
          style={{
            border: "2px solid #cc022a",
            borderRadius: "5px 0px 0px 5px",
          }}
        ></Input>
        {index || index == 0 ? (
          <Button onClick={() => upData()} className="bg-danger border-0">Update</Button>
        ) : (
          <Button
            className="bg-danger border-0 ps-3 pe-3"
            style={{
              border: "2px solid black",
              borderRadius: "0px 5px 5px 0px",
            }}
          >
            <FaPlus className="bg-danger" onClick={() => addData()} />
          </Button>
        )}
      </div>
      <div className="d-flex justify-content-center w-100 flex-column">
        {birdArr.map((e, i) => {
          return (
            <li
              className="list-unstyled d-flex justify-content-between gap-5 bg-danger mt-2 align-items-center w-100 h4  ps-2 pe-2 rounded-2"
              key={i}
            >
              <span className="d-flex gap-3 justify-content text-black ">
                {i + 1}
              </span>
              {e}
              <span>
                <h3>
                  <FaEdit className="me-4" onClick={() => updateHandle(e, i)} />
                  <RiDeleteBin6Line onClick={() => deleteHandle(i)} />
                </h3>
              </span>
            </li>
          );
        })}
      </div>
    </div>
  );
}
