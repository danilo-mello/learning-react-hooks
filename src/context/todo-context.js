import React, { useState, createContext } from 'react'

export const ToDoContext = createContext({
    todos: [],
    deleteToDo: () => {},
    addToDo: () => {}

})

const ToDoContextProvider = (props) => {

    const [todos] = useState('')

    const addToDo = () => {

    }

    const deleteToDo = () => {

    }

    return (
        <ToDoContext.Provider value={ { todos: todos, deleteToDo: deleteToDo, addToDo: addToDo } }>
            {props.children}
        </ToDoContext.Provider>
    )

}


export default ToDoContextProvider