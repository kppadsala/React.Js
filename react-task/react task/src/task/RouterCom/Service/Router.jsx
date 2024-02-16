import React from "react";
import Home from "../Home";
import About from "../About";
import CarService from "./CarService";
import BikeService from "./BikeService";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
export default function Router() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <BrowserRouter>
        <div className="d-flex justify-content-center gap-5 p-4 bg-dark-subtle w-100">
          <h5>
            <NavLink className="text-decoration-none " to={"/Home"}>
              Home
            </NavLink>
          </h5>
          <h5>
            <NavLink className="text-decoration-none " to={"/About"}>
              About
            </NavLink>
          </h5>
          <h5>
            <NavLink
              className="text-decoration-none "
              to={"/Service/CarService"}
            >
              CarService
            </NavLink>
          </h5>
          <h5>
            <NavLink
              className="text-decoration-none "
              to={"/Service/BikeService"}
            >
              BikeService
            </NavLink>
          </h5>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route
            path="/Service/CarService"
            element={<CarService />}
          ></Route>
          <Route
            path="/Service/BikeService"
            element={<BikeService />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
