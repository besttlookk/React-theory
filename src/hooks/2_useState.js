// Three Step process to implement counter:
// 1. Create class based component
// 2. create state variable and initialize it to zero. 
// 3. method to set the state value

// ============Class based counter=======================
import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const {count} = this.state
        return (
            <div>
                <button onClick={this.incrementCounter}>{count} Times</button>
            </div>
        )
    }
}


// =========================same counter with the help of hooks =====

// import React, {useState} from 'react'

// function HookCounter() {

//     //useState is a function so we simply call it.
//     // useState accepts a argument which represnt the initial value of state property
//     // and it returs the current value of state property and  a method capable of updating the state property
//     const [count, setCount] = useState(0)   // step 2 and 3 at once
//     return (
//         <div>
//             {/* since we are passing argument we convert the function into arrow function */}
//             <button onClick={() => setCount(count + 1)}>Count {count}</button>  
//         </div>
//     )
// }

// export default HookCounter



// =============================useState with previous state========================

// import React, {useState}from 'react'

// function HookCounter() {

//     const initialCount = 0
//     const [count, setCount] = useState(initialCount)
//     return (
//         <div>
//             Count: {count}
//             <button onClick= {()=> setCount(initialCount)}>Reset</button>
//             <button onClick = {()=> setCount(count + 1)}>Increment</button>
//             <button onClick = {()=> setCount(count - 1)}>Decrement</button>
//         </div>
//     )
// }

// export default HookCounter


// NOTE: Both method up above is not the right way to change count value...lets see why

// import React, {useState}from 'react'

// function HookCounter() {

//     const initialCount = 0
//     const [count, setCount] = useState(initialCount)

//     // const incrementFive = () => {  // count is still increment by only one 
//     //     for(let i = 0; i< 5; i++){
//     //         setCount(count + 1)
//     //     }
//     // }

//     // to correct this we pass function in setCount wchich accept prevCount

//     const incrementFive = () => {  // count is still increment by only one 
//         for(let i = 0; i< 5; i++){
//             setCount(prevCount => prevCount + 1)
//         }
//     }
//     return (
//         <div>
//             Count: {count}
//             <button onClick= {()=> setCount(initialCount)}>Reset</button>
//             <button onClick = {()=> setCount(prevCount => prevCount + 1)}>Increment</button>
//             <button onClick = {()=> setCount(prevCount => prevCount - 1)}>Decrement</button>
//             <button onClick= {incrementFive}>Increment 5</button>
//         </div>
//     )
// }

// export default HookCounter

// so anytime we need to update state value based on  the previous state value, always go with the safer option of passing function that will set the new state value. 
// lets change for others function also


// =================================useState with object =================================

// import React, {useState} from 'react'

// function HookCounter() {

//     const [name, setName] = useState({firstName: '', lastName: ''})
//     return (
//         <form>
//             <input type="text" value={name.firstName} onChange = {e => setName({firstName: e.target.value})}/>
//             <input type="text" value={name.lastName} onChange = {e => setName({lastName: e.target.value})}/>
//             <h2>Your first name is: {name.firstName} </h2>
//             <h2>Your last name is: {name.lastName} </h2>
//             {/* to visualize the error: when we type firstname, lastname get removed from state and vice-versa */}
//             {/* reason for that is 'useState doesnt automatically merge & update the state object value like 'setState' . We have to do it manually */}
//             <h2>{JSON.stringify(name)}</h2>  
//         </form>
//     )
// }

// export default HookCounter


// maually joinning the state value: use the spread operator to handle the manual merge
// import React, {useState} from 'react'

// function HookCounter() {

//     const [name, setName] = useState({firstName: '', lastName: ''})
//     return (
//         <form>
//             {/* copy every  property in the name object and then just override the given property */}
//             <input type="text" value={name.firstName} onChange = {e => setName({ ...name, firstName: e.target.value})}/> 
//             <input type="text" value={name.lastName} onChange = {e => setName({...name, lastName: e.target.value})}/>
//             <h2>Your first name is: {name.firstName} </h2>
//             <h2>Your last name is: {name.lastName} </h2>
//             <h2>{JSON.stringify(name)}</h2>  
        
//         </form>
//     )
// }

// export default HookCounter



// ==============================useState with array(array of object) =================================
//  import React, {useState} from 'react'
 
//  function HookCounter() {

//     const [items, setItems]  = useState([])

//     const addItem = () => {
//         // first spreading items array and then adding..that eay we not removing previous value
//         setItems([...items, {
//             id: items.length,
//             value: Math.floor(Math.random() * 10) + 1
//         }])
//     }
//      return (
//          <div>
//              <button onClick={addItem}>Add a number</button>
//              <ul>
//                  {
//                      items.map(item => <li key={item.id}>{item.value}</li>)
//                  }
//              </ul>
//          </div>
//      )
//  }
 
//  export default HookCounter
 


//  ==============================SUMMARY===============================
/* 
The usestate hook lets us add state to functional components. 
In classes, the state is always an object. 
With the useState hook the state doesnot have to be an object. It can be number, array, object, boolean, sting

the useState hook returns an array with 2 elements

The first element is the current value of the state, and the second elemet is a state setter function

In case new state value depends on the previous state value, we can pass a function to the setter function
the setter function will recieve the previous state as argument. 

when dealing with objets or arrays, always make sure to spread our state variable and then call the setter function




*/