import React from 'react'

export default function Header(props) {
  return (
    <div>
          <h3 className='bg-danger  text-center '>it`s name is {props?.name}</h3>
    </div>
  )
}
