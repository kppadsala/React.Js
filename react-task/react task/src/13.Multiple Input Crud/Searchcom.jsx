import React, { useEffect, useState } from "react";
import { FaEdit, FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Input } from "reactstrap";

export default function Searchcom() {
  let [data, setData] = useState("");
  let [dataArr, setdataArr] = useState([]);
  let [search, setsearch] = useState("");

  useEffect(() => {
    let jsonData = localStorage.getItem("todos") || "[]";
    let normalData = JSON.parse(jsonData);
    let data = normalData.filter((e) => e.includes(search));
    setdataArr(data);
  }, [search]);

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
        localStorage.setItem("todos", JSON.stringify([...dataArr, data]));
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

        <Button
          className=" bg-info"
          style={{
            border: "2px solid black",
            borderRadius: "0px 5px 5px 0px",
          }}
        >
          <FaPlus onClick={addData} /> {/* Corrected onClick handler */}
        </Button>
      </div>
      <div className="d-flex  justify-content-center mt-4">
        <Input
          className="w-25 border border-dark"
          placeholder="Search Your Data"
          style={{
            borderRadius: "5px 0px 0px 5px",
          }}
          onChange={(e) => setsearch(e.target.value)}
          onKeyPress={handleEnter}
        ></Input>
        <Button
          className=" bg-info"
          style={{
            border: "2px solid black",
            borderRadius: "0px 5px 5px 0px",
          }}
        >
          <FaSearch /> {/* Corrected onClick handler */}
        </Button>
      </div>
      <div className="d-flex justify-content-center text-black mt-2 flex-column w-100  align-items-center">
        {dataArr.map((e, i) => {
          return (
            <li
              className="list-unstyled d-flex  gap-5 bg-info mt-2 align-items-center w-25 h4  p-2 rounded-2"
              key={i}
            >
              <span className="d-flex gap-3 justify-content-center text ">
                {i + 1}
              </span>
              {e}
            </li>
          );
        })}
      </div>
    </div>
  );
}
