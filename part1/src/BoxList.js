import React, {useState} from "react";
import Box from "./Box";
import {v4 as uuid} from 'uuid';
import NewBoxForm from "./NewBoxForm";

function BoxList(props) {
    const [boxes, setBoxes] = useState(props.initial || {});

    function deleteBox(id){
        setBoxes(({[id]: undefined, ...b}) => b);
    }

    function createBox({backgroundColor, height, width}){
        setBoxes(b => ({...b, [uuid()]: { backgroundColor, height, width }}));
    }

    return (
        <div>
            { Object.keys(boxes).map(b => <Box 
            key={b} 
            id={b}
            backgroundColor={boxes[b].backgroundColor} 
            height={boxes[b].height} 
            width={boxes[b].width} 
            deleteBox={evt => deleteBox(b)}/>) }
            <NewBoxForm createBox={(box, evt) => createBox(box)}/>
        </div>
    );
}

export default BoxList;