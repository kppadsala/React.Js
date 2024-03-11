import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button, Input } from 'reactstrap'

export default function SearchFilter() {
  let [data,setData]=useState("");
  let [dataArr,SetDataArr]=useState([])

  const getData=(e)=>{
    setData(e.target.value)
  }
  const addData=()=>{

  }
  
  const EnterHandle=(e)=>{
if(e.key==='enter'){
  addData()
}
  }
  return (
    <div className='d-flex justify-content-center p-5'>
        <div className='w-50 border d-flex justify-content-center '>
            <Input type='text' className='border border-3 border-black ' value={data}
            onChange={(e)=>getData(e)} onKeyPress={EnterHandle}></Input>
            <Button className='p-2 text-center bg-danger border border-0 '><FaPlus className='align-items-center '/></Button>
        </div>
    </div>
  )
}

