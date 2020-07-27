import React, {useContext} from 'react'
import {CountContext} from '../7_useReducer_Global'

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
             <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
             <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
             <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
