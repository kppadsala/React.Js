import React, { useState } from 'react'
import { Button } from 'reactstrap';

let color = ["blue", "blueviolet", "#F44336", "#607D8B", "#E91E63", "#9E9E9E"];

export default function StateTask() {
    let [index, setIndex] = useState(0);
    const Incindex = () => {
        setIndex(index + 1);
        if (index == color.length - 1) {
            let value = confirm("You can repeat This Array")
            if (value == true) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
        }
        
    }
    return (
      <div>
        <div
          style={{
            width: "150px",
            height: "150px",
                    backgroundColor: color[index],
            margin:'15px'
          }}
            >
                <h3 style={{
                    textAlign: 'center',
                    color:'black'
                }}>{ index}</h3>
            </div>
            
            <Button onClick={Incindex}
                style={{
                    backgroundColor: 'red',
                    margin: '15px',
                    border:'0px'
            }}>
                chanege Color
        </Button>
      </div>
    );
}
