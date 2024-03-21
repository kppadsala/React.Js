import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'

export const CountContaxt=createContext();

export default function UseContaxtCom() {
    let [data,setData]=useState(100);
  return (
    <div>
        <div>
        <CountContaxt.Provider value={data}>
        <ComA/>
        <ComB/>
        </CountContaxt.Provider>
        </div>
    </div>
  )
}
