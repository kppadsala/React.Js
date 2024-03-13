import React, { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Button, Input } from "reactstrap";

export default function SearchFilter() {
  let [data, setData] = useState("");
  let [dataArr, setDataArr] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    let jsonData = localStorage.getItem("todo") || "[]";
    let normalData = JSON.parse(jsonData);
    let filteredData = normalData.filter((e) => e.includes(search));
    setDataArr(filteredData);
  }, [search]);

  const getData = (ele) => {
    setData(ele.target.value);
  };

  const addData = () => {
    // When input data is blank
    if (data !== "") {
      // when we Enter similar data
      if (!dataArr.includes(data)) {
        setDataArr([...dataArr, data]);
        localStorage.setItem("todo", JSON.stringify([...dataArr, data]));
        setData(""); // Clear the input field
      } else {
        alert("YOUR ENTER DATA IS SIMILAR PLEASE CHANGE");
      }
    } else {
      alert("**PLEASE ENTER DATA**");
    }
  };

  const EnterHandle = (e) => {
    if (e.key === "Enter") {
      if (e.target.id === "addInput") { // Check which input triggered the Enter key press
        addData();
      } else if (e.target.id === "searchInput") {
        setSearch(e.target.value);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center p-5 flex-column align-items-center">
      {/* Add data input */}
      <div className="w-50 border d-flex justify-content-center">
        <Input
          id="addInput"
          className="border border-1 border-black"
          value={data}
          onChange={(e) => getData(e)}
          onKeyPress={EnterHandle}
          style={{
            borderRadius: "5px 0px 0px 5px",
          }}
        />
        <Button
          className="p-2 text-center bg-danger border border-0"
          style={{
            border: "2px solid black",
            borderRadius: "0px 5px 5px 0px",
          }}
          onClick={addData}
        >
          <FaPlus />
        </Button>
      </div>
      {/* Search input */}
      <div className="w-50 border d-flex justify-content-center mt-4">
        <Input
          id="searchInput"
          type="text"
          className="border border-1 border-black"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={EnterHandle}
          style={{
            borderRadius: "5px 0px 0px 5px",
          }}
        />
        <Button
          className="p-2 text-center bg-danger border border-0"
          style={{
            border: "2px solid black",
            borderRadius: "0px 5px 5px 0px",
          }}
          onClick={(e) => setSearch(e.target.value)}
          onKeyPress={EnterHandle}
        >
          <FaSearch />
        </Button>
      </div>
      {/* Display data */}
      <div className="mt-5 border border-1 border-black p-3 w-50">
        <ul className="list-unstyled">
          {dataArr.map((e, i) => (
            <li key={i} className="d-flex gap-5 justify-content-center w-100">
              <span>{i + 1}</span>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
