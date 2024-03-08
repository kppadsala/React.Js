import React, { useState } from 'react'
import { Button } from 'reactstrap'

import ClassCom from '../2.componet/class/ClassCom';
import FunctionCom from '../2.componet/function/FunctionCom';

export default function ComponetRenderingTask() {
    let [componet, setcomponet] = useState('false');
  return (
    <div className="m-5 text-black ">
      {componet ? (
        <Button className="me-5" onClick={() => setcomponet(false)}>
          Class
        </Button>
      ) : (
        <Button onClick={() => setcomponet(true)}>Function</Button>
      )}
      {componet ? <ClassCom /> : <FunctionCom />}
    </div>
  );
}
