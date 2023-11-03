import React, {useState} from "react";
import Todo from "./Todo";
import {v4 as uuid} from 'uuid';
import NewTodoForm from "./NewTodoForm";

function TodoList(props) {
    const [todos, setTodos] = useState(props.initial || {});

    function deleteTodo(id){
        setTodos(({[id]: undefined, ...t}) => t);
    }

    function createTodo({ task }){
        setTodos(t => ({...t, [uuid()]: { task }}));
    }

    return (
        <div>
            { Object.keys(todos).map(t => <Todo 
            key={t} 
            id={t} 
            task={todos[t].task}
            deleteTodo={evt => deleteTodo(t)}/>) }
            <NewTodoForm createTodo={(todo, evt) => createTodo(todo)}/>
        </div>
    );
}

export default TodoList;