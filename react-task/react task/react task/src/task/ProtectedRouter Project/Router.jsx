import React from 'react'
import Home from './Home'
import About from './About'
import Header from './Header'

export default function Router() {
  return (
    <div>
        <div>
            <Home/>
            <About/>
            <Header/>
        </div>
    </div>
  )
}
