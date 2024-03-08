import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service/Service';
import BikeService from './Service/BikeService';
import CarService from './Service/CarService';

export default function RouterNets() {
  return (
    <div className='mt-2'>
      <BrowserRouter>
        <div className='d-flex justify-content-center gap-5 bg-danger-subtle p-3 '>
          <h5>
            <NavLink to={"/"} className="text-decoration-none ">Home</NavLink>
          </h5>
          <h5>
            <NavLink to={"/About"} className="text-decoration-none ">About</NavLink>
          </h5>
          <h5>
            <NavLink to={"/Service"} className="text-decoration-none ">Service</NavLink>
          </h5>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Service' >
              <Route index element={<Service />} />
              <Route path='/Service/BikeService' element={<BikeService />} />
              <Route path='/Service/CarService' element={<CarService />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
