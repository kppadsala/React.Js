import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>

        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
