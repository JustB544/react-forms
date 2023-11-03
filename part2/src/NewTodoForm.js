import React, {useState} from "react";

function NewTodoForm({createTodo}) {
    const INITIAL_STATE = {task: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);
    function handleSubmit(evt){
        evt.preventDefault();
        createTodo(formData);
        setFormData(INITIAL_STATE);
    }

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]: value}));
    }
    return (
        <form style={{display: "flex", flexDirection: "column", width: "fit-content"}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">Task: </label>
                <input name="task" type="text" value={formData.task} placeholder="New task" onChange={handleChange}/>
            </div>
            <button>Create</button>
        </form>
    )
}

export default NewTodoForm;