import React, { useState } from 'react'
import Cardmake from './Cardmake';
import Data from './data.json'

export default function Body() {
  let [data,setdata]=useState(Data)
    return (
    <div
      className="pt-5 pb-5 d-flex flex-wrap justify-content-center align-items-center gap-5"
      style={{
        backgroundColor: "#D1C4E9",
        width:'100%',
        height:'100%'

      }}
    >
      {data?.map?.((e) => {
        return <Cardmake info={e} />;
      })}
    </div>
  );
}
