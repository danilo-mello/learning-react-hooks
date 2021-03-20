import React, { useState, createContext } from 'react'

export const CountContext = createContext({
    count: 0,
    addone: () => {},
    removeone: () => {}
})

const CountContextProvider = (props) => {

    const [counter, setCounter] = useState(0)

    const adder = () => {
        console.log('Adding...')
        setCounter(counter + 1)
    }

    const remover = () => {
        setCounter(counter - 1)
    }

    return (
        <CountContext.Provider value={ { count: counter, addone: adder, removeone: remover } }>
            {props.children}
        </CountContext.Provider>
    )
}

export default CountContextProvider