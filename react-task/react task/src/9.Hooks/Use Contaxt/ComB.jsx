import React from 'react'
import { useContext } from 'react'
import { CountContaxt } from './UseContaxtCom'

export default function ComB() {
    let user=useContext(CountContaxt)
  return (
    <div><h1>B chiled Rank is {user}</h1></div>
  )
}
