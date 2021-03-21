import React, { useState, useCallback, useEffect } from 'react'
import FilterTodo from './FilterToDo'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'


const ToDo = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log('Rendering todos...', todos)
    }, [todos])

    const addTodoHandler = (todo) => {
        fetch('https://react-hooks-study-b2fcb-default-rtdb.firebaseio.com/todos.json', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: { 'Content-Type': 'application/json'}
          })
            .then(response => response.json())
            .then(responseData => {
              setTodos((prevState) => [
                  ...prevState,
                  { id: responseData.name, ...todo}
                ])
        })

    }

    const deactivateToDoHandler = (todo) => {

        console.log('Todo ID: ', todo.id)
        console.log('Todo: ', todo.todo)
        console.log('Todo Status: ', todo.active)

        const newToDo = new FormData()
        newToDo.append('todo', todo.todo)
        newToDo.append('active', todo.active)



        fetch(`https://react-hooks-study-b2fcb-default-rtdb.firebaseio.com/todos/${todo.id}.json`, {
            method: 'PUT',
          })
          .then(response => response.json())


    }

    const filteredToDosHandler = useCallback((loadedTodos) => {
        setTodos(loadedTodos)
    }, [])

    return(
        <>
            <ToDoForm onAddTodo={addTodoHandler} />
            <FilterTodo onLoadToDo={filteredToDosHandler} />
            <ToDoList todos={todos} deactivateToDo={deactivateToDoHandler} />
        </>
    )
}

export default ToDo