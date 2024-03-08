import React from "react";
import { Button } from "reactstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Service() {
  const navigate = useNavigate();
  return (
    <>
    <div className="d-flex gap-3 ">
      <Button
        onClick={() => navigate("/Service/CarService")}
        className="bg-danger border-0 "
      >
        CarService
      </Button>
      <Button
        onClick={() => navigate("/Service/BikeService")}
        className="bg-danger border-0 "
      >
        BikeService
      </Button>

      <Button className='bg-danger p-3 border-0 ' onClick={()=>navigate(-1)}>
<FaArrowLeft />
</Button>

    </div>
      <Outlet/>
    </>
  );
}
