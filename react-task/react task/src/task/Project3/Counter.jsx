
import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function Counter() {
    let [count, setcount] = useState(0)
    const inccount=() => {
        console.log('--inccount--', inccount);
        setcount(count+1)
    }
    return (
        <div className='text-black'>
            <h1>counter is {count}</h1>
            <Button className='bg-dark' onClick={inccount}>Inc Count</Button>
        </div>
  )
}

