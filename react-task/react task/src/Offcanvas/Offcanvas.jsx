// import React from 'react'
// import { Button, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

// export default function Offcanvas() {
//   return (
//     <div>
//       <div>
//         <Button color="primary" onClick={function noRefCheck() {}}>
//           Open
//         </Button>
//         <Offcanvas toggle={function noRefCheck() {}}>
//           <OffcanvasHeader toggle={function noRefCheck() {}}>
//             Offcanvas
//           </OffcanvasHeader>
//           <OffcanvasBody>
//             <strong>This is the Offcanvas body.</strong>
//           </OffcanvasBody>
//         </Offcanvas>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const OffcanvasExample = () => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div className="text-black">
      <Button color="primary" onClick={toggleOffcanvas}>
        Open
      </Button>
      <Offcanvas isOpen={isOffcanvasOpen} toggle={toggleOffcanvas}>
        <OffcanvasHeader toggle={toggleOffcanvas}>Offcanvas</OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>̥̥̥̥̥
      </Offcanvas>
    </div>
  );
};

export default OffcanvasExample;
