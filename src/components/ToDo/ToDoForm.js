import React, { useState } from 'react'

const ToDoForm = (props) => {
    
    const [todo, setToDo] = useState("")
    const [todoStatus] = useState(true)


    const submitHandler = (e) => {
        e.preventDefault()
        props.onAddTodo({todo: todo, active: todoStatus})

    }



    return(

        <>
            <form onSubmit={submitHandler}>
                <label>To Do:</label>
                <input
                    type="text"
                    id="todo"
                    value={todo}
                    onChange={(e) => {setToDo(e.target.value)}}
                />
                <button type='submit'>Add To Do</button>
            </form>

        </>
    )
}

export default ToDoForm