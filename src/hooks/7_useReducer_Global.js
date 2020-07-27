import React, {useReducer} from 'react'
import ComponentA from './components/componentA'
import ComponentB from './components/componentB'
import ComponentC from './components/componentC'
import { ChannelContext } from './5_useContext'

//AIM: maintain a count state in this file and modify that state from componentA, compenent D and F. 

//Two main stpets: 1. create a counter in this file using useReducer  2. provide and consumes the counter Context in the required component

export const CountContext = React.createContext()
const initialState = 0

const reducer = (state, action) => {

    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state

    }
}

function App() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
            <CountContext.Provider value={{countState: count, countDispatch: dispatch}} >
        <div>
            Count - {count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
        </CountContext.Provider>
    )
}

export default App
