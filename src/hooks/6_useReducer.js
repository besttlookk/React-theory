// ==========================useReducer====================================
/*
useReducer is a hook that is used for state managemenet

It is alterbative to useState

whats the difference?  useState is built using useReducer. so useReducer is more primitive

when to use 'useReducer' and whe  to use 'useState'



// Hooks so far:
    useState -> state
    useEffect -> side effects
    useContext -> context API
    useReducers -> reducers


Array.prototype.reduce(): the reduce() method executes a reducer function(that we provide) on each element of the array, resulting in a single value. 

reduce method takes 2 parameters: first paramter is the reducer function and second paramter is the initial value that reducer can make use of

reducer function itself takes two parameter and return the additon of those values


// ============reduce vs useReducer====================
1. reduce is in javascript  while useReducer is in React
2. syntax: array.reduce(reducer, initialValue)    ||   useReducer(reducer, initialState)
3. singleValue = reducer(accumulator, itemValue)   || newState = reducer(currentState, action)
4. reduce method returns a single value.          || useReducer returns a pair of values,[newState, dispatch]
*/


// ====================useReducer(simple state and action) =========================================

// import React, {useReducer} from 'react'

// const initialState = 0

// // reducer function accepts the current state and returns the new state.
// // but to this transition to happen we need something..and that something is 'action' parameter
// //action can be think as the instruction to the reducer function
// // based on what action specifies the reducer function perform the nececcary state transition. 
// const reducer = (state, action) => {

//     switch(action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state

//     }
// }

// function Counter() {
//     // for third and final step we need to get hold of a value to be displayed in the jsx and we also need a way to call the reducer function with the appropriate action
//     //that happens to be very simple bcoz that exactly what useReducer returns
//     // this dispatch method allows us to ecexute the code corresponding to a particular action
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <div>Count - {count}</div>
//             <button onClick={()=> dispatch('increment')}>Increment</button>
//             <button onClick={()=> dispatch('decrement')}>Decrement</button>
//             <button onClick={()=> dispatch('reset')}>Reset</button>
//         </div>
//     )
// }


// export default Counter



// =======================useReducer(complex state & action)

// import React, {useReducer} from 'react'

// const initialState = {
//     firstCounter: 0
// }


// const reducer = (state, action) => {

//     switch(action.type) {
//         case 'increment':
//             return { firstCounter: state.firstCounter + 1}
//         case 'decrement':
//             return { firstCounter: state.firstCounter - 1}
//         case 'reset':
//             return initialState
//         default:
//             return state

//     }
// }

// function Counter() {
//   
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <div>Count - {count.firstCounter}</div>
//             <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
//             <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
//             <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
//         </div>
//     )
// }


// export default Counter


// what if we need to increment count more then one.. in such as action beging an object is helpful rather than just a string . .

//---------action as an object
// import React, {useReducer} from 'react'

// const initialState = {
//     firstCounter: 0
// }

// const reducer = (state, action) => {

//     switch(action.type) {
//         case 'increment':
//             return { firstCounter: state.firstCounter + action.value}
//         case 'decrement':
//             return { firstCounter: state.firstCounter - action.value}
//         case 'reset':
//             return initialState
//         default:
//             return state

//     }
// }

// function Counter() {
    
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <div>Count - {count.firstCounter}</div>
//             <button onClick={()=> dispatch({type: 'increment', value: 1})}>Increment</button>
//             <button onClick={()=> dispatch({type: 'decrement', value: 1})}>Decrement</button>
//             <button onClick={()=> dispatch({type: 'increment', value: 5})}>Increment five</button>
//             <button onClick={()=> dispatch({type: 'decrement', value: 5})}>Decrement five</button>
//             <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
//         </div>
//     )
// }


// export default Counter



// --------state as an object: what if we nned two counter

// import React, {useReducer} from 'react'

// const initialState = {
//     firstCounter: 0,
//     secondCounter: 10
// }

 
// const reducer = (state, action) => {

//     switch(action.type) {
//         // we have two properties in the state object but we ar changing one at a time. 
//         // to get the expected value we have to merge the state property using spread operator
//         case 'increment':
//             return {...state, firstCounter: state.firstCounter + action.value}
//         case 'decrement':
//             return {...state, firstCounter: state.firstCounter - action.value}
//         case 'increment2':
//             return {...state, secondCounter: state.secondCounter + action.value}
//         case 'decrement2':
//             return {...state, secondCounter: state.secondCounter - action.value}
//         case 'reset':
//             return initialState
//         default:
//             return state

//     }
// }

// function Counter() {

//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <div>First Count - {count.firstCounter}</div>
//             <div>Second Count - {count.secondCounter}</div>
//             <button onClick={()=> dispatch({type: 'increment', value: 1})}>Increment</button>
//             <button onClick={()=> dispatch({type: 'decrement', value: 1})}>Decrement</button>
//             <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>

//             <div className="">
//             <button onClick={()=> dispatch({type: 'increment2', value: 1})}>Increment conter 2</button>
//             <button onClick={()=> dispatch({type: 'decrement2', value: 1})}>Decrement counter 2</button>
//             </div>
//         </div>
//     )
// }

// export default Counter


// =================Multiple useReducers
// simper way to do above tasK: to add another counter
// since we are havinf same switch command for both the counter this method is much easier

import React, {useReducer} from 'react'

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

function Counter() {
  
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
            <div>
            <div>Count - {countTwo}</div>
            <button onClick={()=> dispatchTwo('increment')}>Increment</button>
            <button onClick={()=> dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=> dispatchTwo('reset')}>Reset</button>
            
        </div>
        </div>
    )
}


export default Counter


// so far we have use 'useReducer' for local state management(i.e : the component level)
// but at somepoint we need to share state between the components: GOLOBAL state management

// we can achieve that by combaining useReducer and useContext....