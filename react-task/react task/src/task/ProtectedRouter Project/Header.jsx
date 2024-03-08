import React, { useState } from 'react'
import LoginModal from './LoginModal'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // const loginHandler=()=>{
  //   localStorage.setItem("isLogin","yes");
  // };

  return (
    <div>
<LoginModal modal={modal} toggle={toggle}/>
<div className='d-flex justify-content-between  bg-danger-subtle px-5 py-2'>
    <li className='list-unstyled h3'>
        <NavLink to={"/home"}>Home</NavLink>
    </li>
<Button className='bg-danger border-0 px-4' onClick={()=>toggle()}>Login</Button>
</div>
    </div>
  )
}


// import React, {  useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Button } from "reactstrap";
// import LoginModal from "./LoginModal";

// export default function Header() {
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   // const navigate = useNavigate();
//   const loginHandler = () => {
//     localStorage.setItem("isLogin", "yes");
//   };
//   return (
//     <>
//       <LoginModal modal={modal} toggle={toggle} />
//       <div
//         style={{
//           width: "100%",
//           backgroundColor: "darkgray",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-around",
//         }}
//       >
//         <div className="w-75 d-flex justify-content-center gap-4 m-3">
//           <li>
//             <NavLink to={"/"}>Home</NavLink>
//           </li>
         
//         </div>
//         <div className="w-25 gap-4 align-items-center d-flex justify-content-end pe-4">
//           {/* <User role="button" onClick={() => navigate("/profile")} /> */}
//           <Button color="danger" onClick={() => toggle()}>
//             Login
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };