import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            
        <input type="checkbox" checked={props.completed}/>
            <p>Task :{props.text}</p>
        <hr />    
            <p>completed :{props.completed +""}</p>
            
        </div>
    )
}

export default TodoItem