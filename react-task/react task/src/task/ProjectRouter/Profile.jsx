import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Profile() {
  const navigate=useNavigate()
  const Logout=()=>{
    localStorage.clear()
    navigate("/")
  }
  return (
    <div>
      <div>
        <h1>Hello User</h1>
        <Button className='bg-danger border-0 px-4 py-2' onClick={()=>Logout()}>Logout</Button>
      </div>
    </div>
  )
}
