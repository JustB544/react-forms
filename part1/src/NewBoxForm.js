import React, {useState} from "react";

function NewBoxForm({createBox}) {
    const INITIAL_STATE = {backgroundColor: "#000000", width: 100, height: 100};
    const [formData, setFormData] = useState(INITIAL_STATE);
    function handleSubmit(evt){
        evt.preventDefault();
        createBox(formData);
        setFormData(INITIAL_STATE);
    }

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]: value}));
    }
    return (
        <form style={{display: "flex", flexDirection: "column", width: "fit-content"}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="backgroundColor">Background color: </label>
                <input name="backgroundColor" type="color" value={formData.backgroundColor} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <input name="height" type="number" value={formData.height} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="width">Width: </label>
                <input name="width" type="number" value={formData.width} onChange={handleChange}/>
            </div>
            <button>Create</button>
        </form>
    )
}

export default NewBoxForm;