import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button} from 'reactstrap'

export default function Header() {
  const navigate=useNavigate()
  const LoginHandler=()=>{
    let jsonData = JSON.stringify({ name: "urvish" });
    localStorage.setItem("user", jsonData);
navigate("/profile")
  }
  return (
    <div className='d-flex justify-content-between px-5 p-3 bg-dark-subtle align-items-center '>
      <div className='d-flex justify-content-center gap-4 fw-bold '>
        <NavLink to={'/'} className='text-decoration-none '>Home</NavLink>
        <NavLink to={'/about'} className='text-decoration-none '>About</NavLink>
      </div>
      <div className='d-flex gap-3 align-items-center '>
      <NavLink to={'/profile'} className='fw-bold text-decoration-none'>Profile</NavLink>
        <Button className='bg-danger px-4 py-2 border-0 ' onClick={()=>LoginHandler()}>Login</Button>
      </div>
    </div>
  )
  }
