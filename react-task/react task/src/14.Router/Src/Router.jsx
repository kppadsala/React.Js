import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Body from "./Body";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Eroor404 from "./Eroor404";
import "./index.css";
export default function Router() {
  return (
    <div>
      <div className=" d-flex justify-content-center gap-4  flex-column align-items-center">
        <BrowserRouter>
          <div className="w-100 d-flex justify-content-center gap-4  bg-dark-subtle p-4 text-black">
            <h4>
              <NavLink className="text-decoration-none" to={"/Home"}>
                Home
              </NavLink>
            </h4>
            <h4>
              <NavLink className="text-decoration-none " to={"/Body"}>
                Body
              </NavLink>
            </h4>
            <h4>
              <NavLink className="text-decoration-none" to={"/Footer"}>
                Footer
              </NavLink>
            </h4>
          </div>
          <Routes>
            <Route path="/Body" element={<Body />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="*" element={<Eroor404 />} />

            {/* <Home />
            <Footer />
          <Body /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
