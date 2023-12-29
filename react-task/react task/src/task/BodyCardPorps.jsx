import React from 'react'
import Bodycard from './Bodycard'

export default function BodyCardPorps() {
  return (
      <div className='d-flex justify-content-evenly'>
          <Bodycard name={"Contained-3"} />
          <Bodycard name={ "Contained-4"} />
          <Bodycard name={ "Contained-5"} />
          
    </div>
  )
}
