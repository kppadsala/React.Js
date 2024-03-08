import React, { useState } from 'react'
import { Button } from 'reactstrap';

export default function FunctionState() {
    let [count,setcount]=useState(0);
    let [decre, setdecre] = useState(100);
    let x = 100;
    const innX = () => {
        console.log(" FunctionState  x", x)
        setdecre(decre - 1);
    }
    const intCount = () => {
        
        console.log("intCount==>", intCount)
        setcount(count+1)
    }
    return (
      <div>
        <h1>x is Decrease  {decre}</h1>
        <Button color='danger'
          onClick={innX} >
          Inc X
        </Button>
        <hr />
        <h1>Count is Increase {count}</h1>
        <Button onClick={ intCount} color="danger">
          Count
        </Button>
      </div>
    );
    }

