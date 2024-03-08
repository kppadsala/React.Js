import React, { useRef } from 'react'
import { Button } from 'reactstrap';

export default function UseRef() {
    const divRef=useRef();
    const handle=()=>{
        divRef.current.style.color="red"
        divRef.current.innerText="Namste World"
    }
  return (
    <div>
        <div ref={divRef}>
        <h1>Hello World</h1>
        </div>
<Button onClick={()=>handle()} className='danger'>Change Color</Button>

    </div>
  )
}
