import React, { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { Button, Input } from "reactstrap";

export default function CrudOperation() {
    let [data,setData]=useState("");
    let[dataArr,setDataArr]=useState([])

    const getData=(ele)=>{
setData(ele.target.value);
    }
    const addData=()=>{
setDataArr([...dataArr,data]);
setData("");
    }
    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            addData()
        }
    }
  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className="d-flex justify-content-center w-50 mt-4 ">
        <Input style={{
            borderRadius: "5px 0px 0px 5px",
            border:'2px solid black'
          }}
          value={data}
          onChange={(e)=>getData(e)}
          onKeyPress={handleEnter}/>
          
        <Button className="bg-danger border border-0 " style={{
            borderRadius: "0px 5px 5px 0px",
          }}>
          
            <FaPlus className="text-center border border-0"     
           />
        </Button>
      </div>
      <div className="d-flex justify-content-center  gap-4 mt-4">
        <div className="border border-bottom-1  border-black px-3 py-2">
            <h2 className="border border-1 border-grey px-3">Not Verified Data</h2>
            {dataArr.map((e,i)=>{
                return(
                    <li key={i} className="list-unstyled d-flex justify-content-around align-items-center gap-3">
                        <FaArrowRight/>
                        <span>{i+1} </span>
                        {e}
                    </li>
                )
            })}
        </div>
        <div className="border border-1  border-black p-3">
        {dataArr.map((e,i)=>{
                return(
                    <li key={i} className="list-unstyled d-flex justify-content-around align-items-center gap-3">
                        <FaArrowRight/>
                        <span>{i+1} </span>
                        {e}
                    </li>
                )
            })}
        </div>
      </div>
    </div>
  );
}
