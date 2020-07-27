/* 

context provides a way to pass data through the component tree without having to pass props down manually at every level

In a typical react application, data is passed top-down(parent to child) via props, but this can be cumbersume for certain types of props that are required by many components within an application. 

STEPS:
    1. Passing the initial state to React.createContext. This Function then returns an object with a Provider and a Consumer.

    2. Using the Provider component at the top of the tree and making it accept a prop called value. This value can be anything! 

    3. Using the consumer component anywhere below the Provider in the component tree to get a subset of the state. 

//----------1. Create Context
It creates a Context object

When React renders a component that sunscribe to this Context object it will read the current context value from the closest matching Provider above it in the tree. 

Syntax: 
const MyContext = React.createContext(defaultValue)

defaultValue: It is only used when a component does not have a matching Provider above it in the tree. 

EX: 
 const MyContext = react.createContext(false)
 const MyContext = react.createContext('white')
 const MyContext = react.createContext({user: 'Guest'})

//---------2. Context Provider
Every context object comes with a Provider React component that allows consuming component to subscribe to context changes. 

One Provider can be connected to many consumers> providers can be nested to override values deeper within the tree. 

Syntax: 
<MyContext.Provider Value={ saome value}>

A vlaue prop to ve passed to consuming components that are descendants of this Provider. 

Ex: <MyContext.Provider value ={this.state.name}>


//-----3. Context Consumer
A react component that subscribe to context changes. this lets you subscribe to context within a function component . 

It requiqes a function as a child. the function receives the current context value and returns a react node. 

The value argumentt passed to the functon will be equal to the value prop of the closet Provider for this context above in the tree. 

If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext()

<MyContext.Consumer>{value=> [render somethind based on the context value]}
</MyContext>Consumer>+
*/

// import React, { Component } from 'react'
// import User from './23_User'

// // creating Context
// export const MyContext = React.createContext(); // named export

// // Provider component
// export default class App extends Component {
//  //agerb data jyda hai to pura state hi send ker do
//     state={
//         name: "Rahul",
//         value: 10
//     };
   
//     render() {
//         return (
//             <MyContext.Provider value={this.state}>
//                 <User />
//             </MyContext.Provider>
//         )
//     }
// }

// ==========EXAMPLE 2[passing state and method]
// import React, { Component } from 'react'
// import User from './23_User'

// export const MyContext = React.createContext(); 

// // Provider component
// export default class App extends Component {
 
//     state={
//         name: "Rahul",
//         value: 10
//     };

//     handleClickContext = () => {

//         this.setState({value: this.state.value + 1})
//     }
   
//     render() {
//         const contextValue = {
//             data: this.state,
//             handleClick: this.handleClickContext
//         };
//         return (
//             <MyContext.Provider value={contextValue}>
//                 <User />
//             </MyContext.Provider>
//         )
//     }
// }



// ===============EXAPMLE 3[External context]

// import React, { Component } from 'react'
// import User from './23_User'
// import {Provider} from './25_Context_external'

// export default class App extends Component {
 
//     state={
//         name: "Rahul",
//         value: 10
//     };

//     handleClickContext = () => {

//         this.setState({value: this.state.value + 1})
//     }
   
//     render() {
//         const contextValue = {
//             data: this.state,
//             handleClick: this.handleClickContext
//         };
//         return (
//             <Provider value={contextValue}>
//                 <User />
//             </Provider>
//         )
//     }
// }

/*
// =========================CONTEXT TYPE==================================
The 'contextType property on a class' can be assigned a Conetxt object created by React.createContext(). 
This lets you consume the nearest current value of that Context type using this.context. 

static contextType = MyConetext

*/


// import React, { Component } from 'react'
// import User from './23_User'
// import {Provider} from './25_Context_external'

// export default class App extends Component {
 
//     state={
//         name: "Rahul",
//         value: 10
//     };

//     handleClickContext = () => {

//         this.setState({value: this.state.value + 1})
//     }
   
//     render() {
//         const contextValue = {
//             data: this.state,
//             handleClick: this.handleClickContext
//         };
//         return (
//             <Provider value={contextValue}>
//                 <User />
//             </Provider>
//         )
//     }
// }