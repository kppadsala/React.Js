import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Input } from "reactstrap";

export default function Crud() {
  let [data, setData] = useState("");
  let [dataArr, setdataArr] = useState([]);
  let [index, setindex] = useState(null);

  // To Get Data From Input
  const getData = (ele) => {
    setData(ele.target.value);
  };

  // Add data to the list and clear input field
  const addData = () => {
    // When input data is blank
    if (data !== "") {
      // when we Enter similar data
      if (!dataArr.includes(data)) {
        setdataArr([...dataArr, data]);
        setData(""); // Clear the input field
      } else {
        alert("YOUR ENTER DATA IS SIMILAR PLEASE CHANGE");
      }
    } else {
      alert("**PLEASE ENTER DATA**");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  // Hande a Delete Data
  const deleteData = (index) => {
    // console.log("deleteData----->", index);
    let filterData = dataArr.filter((e, i) => i !== index);
    setdataArr(filterData);
    setData(""); // Clear the input field
  };

  // Upadate Handle =>click on Edit button
  const updateHandle = (data, index) => {
    // console.log("updateHandle  data:", data);
    // console.log("updateHandle  index:", index);
    setData(data);
    setindex(index); //in Array Data Put on Input
  };

  const upData = () => {
    dataArr.splice(index, 1, data);
    setData([...dataArr]);
    setData(""); // Clear the input field
    setindex(null);
  };

  return (
    <div className="d-flex justify-content-center flex-column ">
      <h3 className="text-center text-black mt-3">Input Data:-{data}</h3>
      <div className="d-flex justify-content-center mt-4  ">
        <Input
          className="w-25 border border-dark"
          placeholder="Enter Your Data"
          value={data}
          style={{
            borderRadius: "5px 0px 0px 5px",
          }}
          onChange={(e) => getData(e)}
          onKeyPress={handleEnter}
        ></Input>
        {index || index === 0 ? (
          <Button
            className=" bg-info"
            style={{
              border: "2px solid black",
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={() => upData()}
          >
            Update
          </Button>
        ) : (
          <Button
            className=" bg-info"
            style={{
              border: "2px solid black",
              borderRadius: "0px 5px 5px 0px",
            }}
          >
            <FaPlus onClick={addData} /> {/* Corrected onClick handler */}
          </Button>
        )}
      </div>

      <div className="d-flex justify-content-center text-black mt-2 flex-column w-100  align-items-center">
        {dataArr.map((e, i) => {
          return (
            <li
              className="list-unstyled d-flex justify-content-between gap-5 bg-info mt-2 align-items-center w-25 h4  ps-2 pe-2 rounded-2"
              key={i}
            >
              <span className="d-flex gap-3 justify-content text ">
                {i + 1}
              </span>
              {e}
              <span>
                <h3>
                  <FaEdit className="me-4" onClick={() => updateHandle(e, i)} />
                  <RiDeleteBin6Line onClick={() => deleteData(i)} />
                </h3>
              </span>
            </li>
          );
        })}
      </div>
    </div>
  );
}
