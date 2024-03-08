import React, { userId } from "react";

let name = ["krunal", "nirmal", "yash", "samit", "keval"];
export default function MapandKeys() {
  return (
    <div>
      <ul>
        {name?.map?.((e, i) => {
        //   let id = userId();
        //   console.log("file: MapandKeys.jsx:10  MapandKeys  id:", id);
          return (
            <div key={i}>
              <h1>{i + 1}</h1>
              <h1>
                <li>{e}</li>
              </h1>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
