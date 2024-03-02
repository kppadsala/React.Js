import React from 'react'
import { Button } from 'reactstrap'
import { FaArrowLeft } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';

export default function About() {
  const navigate=useNavigate()
  return (
    <div>
      <h3>About</h3>
<Button className='bg-danger p-3 border-0 ' onClick={()=>navigate(-1)}>
<FaArrowLeft />
</Button>
    </div>
  )
}
