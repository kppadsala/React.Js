import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function CarService() {
const navigate=useNavigate()
  return (
    <div>
      <h3>CarService</h3>
      <Button className='bg-danger p-3 border-0 ' onClick={()=>navigate(-1)}>

<FaArrowLeft />
</Button>
    </div>
  )
}
