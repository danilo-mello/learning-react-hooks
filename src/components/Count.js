import React, { useContext } from 'react'

import { CountContext } from '../context/count-context'

const Count = () => {

    const countContext = useContext(CountContext)

    const add = () => {
        countContext.addone()
    }
    
    const remove = () => {
        countContext.removeone()
    }

    return (
        <div>
            <h1>Count: {countContext.count}</h1>
            <button onClick={add}>Add 1</button>
            <button onClick={remove}>Minus 1</button>
        </div>
    )
}

export default Count