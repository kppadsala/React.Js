import React, { useContext } from 'react'
import { CountContaxt } from './UseContaxtCom'
import ComA2 from './ComA2'

export default function ComA() {
    let user = useContext(CountContaxt)
  return (
    <div>
        <h1>My Rank is {user}</h1>
        <ComA2/>
    </div>
  )
}
