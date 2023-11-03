import React from "react";
import './Todo.css';

function Todo({task, deleteTodo, id}) {
    return (
        <div className="Todo" id={id}>
            <h3>{task}</h3>
            <button onClick={deleteTodo}>X</button>
        </div>
    ); 
}

export default Todo;