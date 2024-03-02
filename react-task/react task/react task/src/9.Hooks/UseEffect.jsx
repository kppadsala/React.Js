import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import {toast} from 'react-toastify';

export default function UseEffect() {
    let [count, setcount] = useState(0);
    useEffect(() => {
        //   console.log("useEffect");
        
    });
    useEffect(() => {
        setTimeout(() => {
            toast.dark("can you Login Please")
        },2000);
        // console.log("useEffect []")
        
    }, [])
     useEffect(() => {
        console.log("useEffect count")
        
     }, [count])
     
  return (
      <div className='text-black'>
          <h1>count is {count}</h1>
          <Button className='info' onClick={()=>setcount(count+1)}>Inc value</Button>
    </div>
  )
}

