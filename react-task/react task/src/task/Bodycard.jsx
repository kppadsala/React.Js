import React from 'react'

export default function Bodycard(props) {
  return (
    <div className='h-100 w-100 p-3 m-5 border border-2 border-primary'>
   <h3>it`s name is {props?.name}</h3>
    </div>

    )
}
