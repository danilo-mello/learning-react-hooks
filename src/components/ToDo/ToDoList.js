import React from 'react'

const ToDoList = props => {

    return (
        <div>
            <h2>To Do List</h2>
            <ul>
                {
                    props.todos.map(
                        todo => (
                            <li 
                                key={todo.id}
                                onClick={() => props.deactivateToDo(todo)}
                            >
                                <span>{todo.todo}</span>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default ToDoList