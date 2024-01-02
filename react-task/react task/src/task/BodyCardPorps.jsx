import React from 'react'
import Bodycard from './Bodycard'

export default function BodyCardPorps() {
  return (
      <div className='d-flex justify-content-evenly'>
          <Bodycard name={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} title={"Image-1"} />
          <Bodycard name={ " Quod accusamus quisquam, sequi commodi rerum blanditiis."} title={"Image-2"} />
          <Bodycard name={ " ducimus similique at modi numquam facilis obcaecati eum ratione."} title={"Image-3"} />
          
    </div>
  )
}
