import React, { useState } from 'react'

export default function Colorpiker() {
        const [color, setColor] = useState(""); // Initial color, e.g., black

        const handleColorChange = (e) => {
            setColor(e.target.value);
        };
        return (
            <div className='d-flex justify-content-center'>
                <div>
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange} />
                    <div className=''
                        style={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: color, marginTop: "20px"
                        }}>
                        <h2>{color}</h2>
                        </div>
                </div>
            </div>
        )
    }

