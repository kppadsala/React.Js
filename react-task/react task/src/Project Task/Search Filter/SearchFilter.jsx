import React, { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Button, Input } from "reactstrap";

export default function SearchFilter() {
  let [data, setData] = useState("");
  let [dataArr, setDataArr] = useState([]);
  let [search, setsearch] = useState("");

  useEffect(() => {
    let jsonData = localStorage.getItem("info") || "[]";
    let normalData = JSON.parse(jsonData);
    // Filtering data based on search term
    let filteredData = normalData.filter((e) => e.includes(search));
    setDataArr(filteredData);
  }, [search]);
  

  const getData = (e) => {
    setData(e.target.value);
  };
  const addData = () => {
    setDataArr([...dataArr, data]);
    setData("");
  };

  const EnterHandle = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };
  return (
    <div className="d-flex justify-content-center p-5 flex-column  align-items-center ">
      <div className="w-50 border d-flex justify-content-center ">
        <Input
          type="text"
          className="border border-1 border-black "
          value={data}
          onChange={(e) => getData(e)}
          onKeyPress={EnterHandle}
          style={{
            borderRadius: "5px 0px 0px 5px",
          }}
        ></Input>
        <Button
          className="p-2 text-center bg-danger border border-0 "
          style={{
            border: "2px solid black",
            borderRadius: "0px 5px 5px 0px",
          }}
        >
          <FaPlus className="align-items-center " onClick={() => addData()} />
        </Button>
      </div>
      <div className="w-50 border d-flex justify-content-center mt-4">
        <Input
          
          className="border border-1 border-black "
          onChange={(e) => setsearch(e.target.value)}
          onKeyPress={EnterHandle}
          style={{
            borderRadius: "5px 0px 0px 5px",
          }}
        ></Input>
        <Button
          className="p-2 text-center bg-danger border border-0 "
          style={{
            border: "2px solid black",
            borderRadius: "0px 5px 5px 0px",
          }}
        >
          <FaSearch className="align-items-center " />
        </Button>
      </div>
      <div className="mt-5 border border-1 border-black p-3 w-50">
        {dataArr.map((e, i) => {
          return (
            <div key={i}>
              <li className="d-flex gap-5 justify-content-center w-100">
                <span>{i + 1}</span>
                {e}
              </li>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
