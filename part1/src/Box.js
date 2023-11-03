import React from "react";
import './Box.css';

function Box({backgroundColor, height, width, deleteBox, id}) {
    return (
        <div className="Box" id={id}>
            <div style={{backgroundColor, height, width}}></div>
            <button onClick={deleteBox}>X</button>
        </div>
    ); 
}

export default Box;