import React from 'react'
import Header from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
