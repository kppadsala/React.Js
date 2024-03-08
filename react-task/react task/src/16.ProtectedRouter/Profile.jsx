import React from "react";
import { Button } from "reactstrap";

export default function Profile() {
  const logOutcheckHandler = () => {
    localStorage.clear();
  };
  return (
    <div>
      <h1>Hello User</h1>
      <Button
        className=" bg-danger border-0  "
        onClick={() => logOutcheckHandler()}
      >
        Logout
      </Button>
    </div>
  );
}
