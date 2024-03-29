import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Header from './Header'
import ProtectedRouter from './ProtectedRouter'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<ProtectedRouter component={<Profile/>}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
