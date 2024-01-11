import React from 'react'
import logo from "../../../public/logo.png";

export default function Footers() {
  return (
    <div className="Footer_div container-fluid p-5 ">
      <div className="row m-0 p-g-0 d-flex justify-content-center gap-5">
        <div className="section_1 col-3 ">
          <div className="logo d-flex justify-content-center align-items-center ">
            <img src={logo} alt="" />
            <h1 className="text-uppercase fw-bolder text-warning">Living</h1>
          </div>
          <p className="fw-semibold">
            We are a team of professional, energetic individuals with talented
            designers .
          </p>
          <div className="social">
            <i class="bi bi-instagram"></i>
          </div>
        </div>
        <div className="section_2 col-2 ">
          <h2 className="text-warning">Usefull Link</h2>
          <li className="fw-semibold">About Us</li>
          <li className="fw-semibold">Blog Posts</li>
          <li className="fw-semibold">Our Services</li>
          <li className="fw-semibold">Contact Us</li>
          <li className="fw-semibold">Shortcodes</li>
        </div>
        <div className="section_3 col-2  ">
          <h2 className="text-warning">Resources</h2>
          <li className="fw-semibold">Interior Design</li>
          <li className="fw-semibold">Decorative Services</li>
          <li className="fw-semibold">Furniture Design</li>
          <li className="fw-semibold">Lighting Design</li>
          <li className="fw-semibold">Soft Furniture</li>
        </div>
        <div className="section_4 col-3 ">
          <h2 className="text-warning">Contact Info</h2>
          <p className="fw-semibold">
            Address : Interior Designs, 343 marketing, #2214 cravel street, NY -
            62617.
          </p>
          <p className="fw-semibold">Phone : +1(21) 234 4567</p>
          <p className="fw-semibold">Email : info@example.com</p>
          <p className="fw-semibold">Support : info@support.com</p>
        </div>
      </div>
    </div>
  );
}
