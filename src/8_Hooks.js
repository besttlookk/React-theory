/* 
//=======================================HOOKS======================================
Hooks are function that lets us "hook into"  React state and lifecycle feature freom fucntion components.

Hooks allow us to use React without classes. It means we can use state and other React feature without writing a class. 

React provides a few built-in Hooks like useState, useEffect etc

Hooks are a new addition in React 16.8


-----When use hooks:
If we write a function component are realized we need to add some state to it

-----Ruels of Hooks:
1. Only call Hooks at the top level. We should not call Hooks inside loops, conditions or nested function. 
    Instead, always use Hooks at the top level of our Reacvt function. 

2. Only call Hooks from React functions: We should not call Hooks from regular JS function. 
    Instead call Hooks from React function component or call Hooks from cutom Hooks.  

3.React relies on the order in which Hooks are called. 

4. Hooks dont work inside classes.   

*/

/*
// =======================Declaring State[useState]==========================
useState(): useState is a Hook that allows us add React state to function components. 

we call it inside a function component to add some local state to it.. 

useState returns a pair - the current state value and a function that lets us update it.

React will preserve this state between re-renders. 

we can call this function from an event handler or somewhere else. 

We can call useState as many times as we want

Example: 
    import React, {useState} from 'react'

    const nameStateVariable = useState('Rahul)  //Declaring state variable  // nameSateVaribale will be array of 2 elements
    const [name, setName] = useState('Rahul) // destructuring array
*/

// ==========Accessing State
// in a function, we can use state varibale directly. 
//  ex: <h1> Your name is {name} </h1>


// =========Updating state====
// ex: setName('Raushan')   //setName is a varibale function we get during setting


// import React, {useState} from 'react'

// function App(){
//     const nameStateVaribale = useState('rahul');

//     const handleClick = () =>{
//         nameStateVaribale[1]('Prabhash')
//     }
//     return(
//         <React.Fragment>

//     <h1>{nameStateVaribale[0]}</h1>
//     <button type='button' onClick={handleClick}>Change</button>
//         </React.Fragment>
//     )
// }

// export default App


/*
// =======================Effect Hooks===============================

The Effect Hook lets you perform side effects in function components. 

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. 

//----------------useEffect()-------
useEffevt is a hook for encapsulating code that has 'side effects' if you are familar with React class lifecycle methods, you can think of useEffect Hook as 
componentDidmount, componentDidUpdate, and componentWillUnmount combined. 

Ex: 
    import React, {useState, useEffect} from 'react';

    useEffect(Function)
    useEffect(Function, Array)

The function passed to useEffect will run after the render in committed to the screen. 

Second argument to useEffect that is the array of values that the effect depends on. 

NOTE: You can call useEffect as many times as you want. 

example: 
    useEffect(() => {
        console.log('Hello useEffect')
    })

    useEffect(() => {
        console.log('Hello useEffect')

    }, [count])

//------What does useEffect do?
 By using this Hook, we tell React that your component needs to do something after render. 
React will remember the function we passed and call it later after performing the DOM updates. 
In this effect, we set document title, we could also perform data fetching or call some other imperative API


// ------Why is useEffect caaled isnide a component?
 Pacing useEffect inside the component lets us access the state varibale or any props right from the effect

//----Does useEffect run after every Render
YES! by default, it runs both after the first render and after every update.

*/

// import React, {useState, useEffect} from 'react'

// function App(){
//     const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(50);

//     const handleIncrement = () =>{
//         setCount(count +1 );
//     }

//     const handleDecrement = () => {
//         setCount1(count1 -1 );
//     }

//     //har update ke saath useEffect run ho raha ... jo performace ko week ker sakta hai
//     // useEffect(()=>{
//     //     console.log("use effect called")  // run after every increment or after every render
//     // });

//     // condition laga dete performance thik kerne ke liye
//     useEffect(()=>{
//         console.log("use effect called")  // run after every increment or after every render
//     }, [count]); // jab count me change hoga tab hi run hoga

//     return (
//         <React.Fragment>
//             <h1>Count Up: {count}</h1>
//             <button type="button" onClick={handleIncrement}>Increment</button>
//             <h1>Count Down: {count1}</h1>
//             <button type="button" onClick={handleDecrement}>Decrement</button>
//         </React.Fragment>
//     )
// }

// export default App


/*
// ================================CUSTOM HOOK===================================
A custom Hook is a javascript function, when we want to share login between two javascript, we extract it to a third fucntion. 

Building our own Hooks lets us extract component logic into reusable functions. 

We can write custom hooks that cover a wide range of use cases like form handling, animation, declative subscription, timers and many more. 

//------------Creating Custom hook
A custom Hook is a Js function whose name starts with "use" and may call other Hooks

Ex: function useSomething(){
    return 
}


//---------Using Custom Hook
 const data = useSomething();
*/

import React from 'react'
import useCustomCounter from './CustomHook'

function App() {
    const data = useCustomCounter();

    return (
        <React.Fragment>
            <h1>Count Up: {data.count}</h1>
            <button type='button' onClick={data.handleIncrement}>Increment</button>
        </React.Fragment>
    )
}

export default App