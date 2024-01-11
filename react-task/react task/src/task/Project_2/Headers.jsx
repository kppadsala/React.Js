import React from 'react'
import logo from '../../../public/logo.png'


export default function Headers() {
  return (
      <div className='Header_div'>
          <div className="logo d-flex justify-content-center align-items-center">
              <img src={logo} alt="" />
              <h1 className='text-uppercase fw-bolder text-warning'>Living</h1>
          </div>
          <div className="menu_list">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
              
          </div>
          <div className="search_div">
        <input type="text" placeholder='Search' />
        <button>Search</button>
          </div>
    </div>
  )
}
