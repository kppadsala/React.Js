import React, { useState } from 'react'

export default function Rangeinput() {
     let [value, setValue] = useState(); 

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
<input 
        type="range" 
        min={0} 
        max={100} 
        value={value} 
        onChange={handleChange} 
      />
      <p>Value: {value}</p>
    </div>
  )
}


