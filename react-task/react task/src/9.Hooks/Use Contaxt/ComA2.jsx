import React from 'react'
import { useContext } from 'react'
import { CountContaxt } from './UseContaxtCom'

export default function ComA2() {
    let user=useContext(CountContaxt)
  return (
    <div>
        <h3>A2 chiled rank is {user}</h3>
    </div>
  )
}
