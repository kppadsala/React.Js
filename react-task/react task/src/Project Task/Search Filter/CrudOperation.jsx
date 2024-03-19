import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Button, Input } from "reactstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

export default function CrudOperation() {
  let [data, setData] = useState("");
  let [dataArr, setDataArr] = useState([]);
  let [Verifie, setVerifie] = useState([]);
  let [donechecked, setDonechecked] = useState([]);
      console.log("--->",donechecked);

  const getData = (ele) => {
    setData(ele.target.value);
  };

  const VerifieHandle = (index) => {
    let verifiedData = dataArr[index];
    let filterData = dataArr.filter((e, i) => i !== index);
    setDataArr(filterData);
    setVerifie([...Verifie, verifiedData]);
  };

  const ReturnHandle = (index) => {
    let ReturnData = Verifie[index];
    let ReturnfilterData = Verifie.filter((e, i) => i !== index);
    setVerifie(ReturnfilterData);
    setDataArr([...dataArr, ReturnData]);
  };

  const addData = () => {
    if (data !== "") {
      if (!dataArr.includes(data)) {
        setDataArr([...dataArr, data]);
        setData("");
      } else {
        alert("Already Entered This Data");
      }
    } else {
      alert("Please fill some data");
    }
  };

  //================Delete Data in Verifie Data================ 

  const deleteHandle = (index) => {
    let filterData = dataArr.filter((e, i) => i !== index);
    setDataArr(filterData);
  };
 
  //================Remove Data in Verifie Data================ 
  const verifiedeleteHandle = (index) => {
    let filterData = Verifie.filter((e, i) => i !== index);
    setVerifie(filterData);
    console.log(verifiedeleteHandle);
  };

  // ================CheckBox Handler==============================
  const checkboxHandle = (index, e) => {
    
    if (e.target.checked) {
      setDonechecked([...donechecked, index]); 
    } else {
      let filterData = donechecked.filter((i) => i !== index);
      setDonechecked(filterData);
    }
  };

// ===============Submit Button Handler For checkBox====================
  const submitHandler = () => {
    dataArr.forEach((item, index) => {
      if (donechecked.includes(index)) {
        // If the item is checked, move it to the Verifie array
        setVerifie(e => [...e, item]);
        // Remove the item from the dataArr
        let filterData=dataArr.filter((e,i) => i !== index);
        setDataArr(filterData);
      }
    });
  
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className="d-flex justify-content-center w-50 mt-4 ">
        <Input
          style={{
            borderRadius: "5px 0px 0px 5px",
            border: "2px solid black",
          }}
          value={data}
          onChange={(e) => getData(e)}
          onKeyPress={handleEnter}
        />

        <Button
          className="bg-danger border border-0 "
          style={{
            borderRadius: "0px 5px 5px 0px",
          }}
          onClick={addData}
        >
          <FaPlus className="text-center border border-0" />
        </Button>
      </div>
      <div className="d-flex justify-content-center  gap-4 mt-4 w-100 px-5">
        <div className="border border-bottom-1  border-black px-3 py-2 w-50 ">
          <h4
            className="px-3 text-center"
            style={{
              borderBottom: "2px solid grey",
            }}
          >
            Not Verified Data
          </h4>

          {dataArr.map((e, i) => {
            return (
              <div
                key={i}
                className="d-flex justify-content-around align-items-center gap-3 h5"
              >
                <input
                  type="checkbox"
                  className="me-3"
                  checked={donechecked.includes(i)} // Check if the index is included in donechecked
                  onChange={(e) => checkboxHandle(i, e)} // Use onChange instead of onClick
                />
                <span>{i + 1}</span>
                {e}
                <span className="d-flex justify-content-center gap-3 ">
                  <MdVerified onClick={() => VerifieHandle(i)} />
                  <AiTwotoneDelete onClick={() => deleteHandle(i)} />
                </span>
              </div>
            );
          })}
                <Button className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase " onClick={(e)=>submitHandler(e)}>Submit</Button>

        </div>
        <div className="border border-1  border-black px-3 py-2 w-50">
          <h4
            className=" px-3 text-center"
            style={{
              borderBottom: "2px solid grey",
            }}
          >
            Verified Data
          </h4>

          {Verifie.map((e, i) => {
            return (
              <li
                key={i}
                className="list-unstyled d-flex justify-content-around align-items-center gap-3"
              >
                <span>{i + 1}</span>
                {e}
                <span className="d-flex justify-content-center gap-3 ">
                  <MdVerified onClick={() => ReturnHandle(i)} />
                  <AiTwotoneDelete onClick={() => verifiedeleteHandle(i)} />
                </span>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
