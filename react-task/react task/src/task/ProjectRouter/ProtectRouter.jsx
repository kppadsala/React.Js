import React from 'react'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import AuthRouter from './AuthRouter'

export default function ProtectRouter() {
  return (
    <div>
        <div>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<AuthRouter compenenet={<Profile/>}/>}/>
          </Routes>
          </BrowserRouter>
        </div>
    </div>
  )
}
