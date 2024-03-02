import React, { useState } from "react";
import { Button } from "reactstrap";
import { VscSignIn } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Header() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

  const checkHandler = () => {  
    localStorage.setItem("isLogin", "yes");
  };

  return (
    <div className="w-100 bg-dark-subtle  text-danger d-flex justify-content-between align-items-center">
      <LoginModal modal={modal} toggle={toggle} />
      <div className="bg-dark-subtle  text-danger d-flex justify-content-center gap-5 p-3 ">
        <NavLink className="text-decoration-none list-unstyled h3" to={"/home"}>
          Home
        </NavLink>
        <NavLink
          className="text-decoration-none list-unstyled h3"
          to={"/contact"}
        > 
          Contact
        </NavLink>
      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center  gap-3">
          <Button
            className="d-flex gap-2 align-items-center bg-danger border-0 me-3 "
            onClick={() => toggle()}
          >
            <VscSignIn />
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
