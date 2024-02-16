import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "surat", label: "surat" },
  { value: "vapi", label: "vapi" },
  { value: "tapi", label: "tapi" },
  { value: "navsari", label: "navsari" },
  { value: "bardoli", label: "bardoli" },
  { value: "jaypur", label: "jaypur" },
  { value: "patan", label: "patan" },
];

export default function SelectCom() {
  let [city, setCity] = useState("");
  let [cityMulti, setCityMulti] = useState([]); // Initialize as an array

  const multiHandle = (ele) => {
    let arrlist = ele.map((e) => e.value);
    setCityMulti(arrlist);
  };

  return (
    <div className="w-50 ">
      <div className="w-50 mt-4 "></div>
      <h3>City is: {city}</h3>
      <Select options={options} onChange={(e) => setCity(e.value)} />
      <hr />
      
        {/* Wrap list items in <ul> */}
        {cityMulti.map((e, i) => {
          return <li key={i} className="list-unstyled">{ i+1} {e}</li>;
        })}
      
      <Select isMulti options={options} onChange={(e) => multiHandle(e)} />
    </div>
  );
}
