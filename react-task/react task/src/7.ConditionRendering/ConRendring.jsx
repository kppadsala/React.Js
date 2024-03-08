import React, { useState } from 'react'
import { Button, Input } from 'reactstrap';



export default function ConRendring() {
    let [count, setcount] = useState(1);
    let [showpass, setshowpass] = useState(false);
  return (
    <div>
      <div className="text-black m-5">
        <h1>count is {count}</h1>
        {count % 2 === 1 ? <h1>{count}is odd</h1> : <h1>{count}is even</h1>}
        <Button className="w-25 border-0" onClick={() => setcount(count + 1)}>
          Counter
        </Button>
      </div>
      <div className='d-flex justify-content-center gap-3'>
        <Input className="w-25" type={showpass ? "text" : "password"} />
        {showpass ? (
          <Button
            className="bg-danger border-0"
            onClick={() => setshowpass(false)}
          >
            Hide pass
          </Button>
        ) : (
          <Button
            className="bg-danger border-0"
            onClick={() => setshowpass(true)}
          >
            Show pass
          </Button>
        )}
      </div>
    </div>
  );
}
