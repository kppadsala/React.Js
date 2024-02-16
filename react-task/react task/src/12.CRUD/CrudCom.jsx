import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button, Input } from "reactstrap";

export default function CrudCom() {
  let [car, setCar] = useState("");
  let [carArr, setcarArr] = useState([]);
  let [index,setindex]=useState(null)

  const getData = (ele) => {
    setCar(ele.target.value);
  };

    // add data onclick plus button
    const addData = () => {
        if (car !== "") {
            if (!carArr.includes(car)) {
                setcarArr([...carArr, car]);
                setCar(""); 
            }
            else {
                alert("PLEASE CHANGE DATA THIS DATA IS SIMILAR ")
            }
          
        }
        else {
            alert("PLEASE FILL YOUR DATA")
        }
   
  };

    // EnterHandle use onkeypress Enter key
  const EnterHandle = (e) => {
    
    if (e.key === "Enter") {
      addData();
    }
  };

    // deletehandle on click delete button
  const deleteHandle = (index) => {
    // console.log("deleteHandle--->", index)
    let filterData = carArr.filter((e, i) => i !== index);
    setcarArr(filterData);
    setCar("");
    };
    
    // updateHandle 'on click
    const updateHandle = (data,index) => {
        setCar(data);
        setindex(index)
    }

    // Updata
    const upData = () => {
        carArr.splice(index, 1, car);
        setCar([...carArr]);
        setCar("")
        setindex(null)
    }
  return (
    <div className="d-flex justify-content-center flex-column w-50">
      <h3 className="text-black">Data Is Here:-{car}</h3>

      <div className="d-flex justify-content-center  align-items-center mt-4 ">
        <Input
          style={{
            border: "2px solid black",
            borderRadius: "5px 0px 0px 5px",
          }}
          value={car}
          onChange={(e) => getData(e)}
          onKeyPress={EnterHandle} // Fixed the event listener
        ></Input>
        {index || index == 0 ? (
          <Button onClick={() => upData()}>Update</Button>
        ) : (
          <Button
            className="bg-danger"
            style={{
              border: "2px solid black",
              borderRadius: "0px 5px 5px 0px",
            }}
          >
            <FaPlus onClick={() => addData()} />
          </Button>
        )}
      </div>
      <div className="d-flex justify-content-center w-100 flex-column">
        {carArr.map((e, i) => {
          return (
            <li
              className="list-unstyled d-flex justify-content-between gap-5 bg-danger mt-2 align-items-center w-100 h4  ps-2 pe-2 rounded-2"
              key={i}
            >
              <span className="d-flex gap-3 justify-content text ">
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
