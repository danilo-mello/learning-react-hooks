import React, { useState, useEffect } from 'react'


const FilterTodo = (props) => {

  const {onLoadToDo} = props

  const [enteredFilter, setEnteredFilter] = useState("")


  useEffect(() => {


    fetch('https://react-hooks-study-b2fcb-default-rtdb.firebaseio.com/todos.json')
    .then(response => response.json())
    .then(responseData => {
        const loadedTodos = []
        for (const key in responseData){
            loadedTodos.push({
            id: key,
            todo: responseData[key].todo,
            active: responseData[key].active
        })
        }

        onLoadToDo(loadedTodos)

    })

  }, [enteredFilter, onLoadToDo])

  

  return (
    <div>
        <label>Filter by Active</label>
        <input type='checkbox' onChange={(e) => setEnteredFilter(e.target.value)} />
    </div>
  )
}

export default FilterTodo
