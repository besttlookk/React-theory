     /*
//=================props vs states================================
1. props get passed to the component. 
    state is managed within the component. 

2. props analogy: Function parameter
 state snanlogy: variables declared in th function body

3.props are immutable
    state cab be changed

4. Access: function component: props
            class components: this.props 
    Access: fucntion component: useState Hook
            class component: this.state

==================States=================================
React components has a built-in state 'object'.

The 'state object' is where you store property values that 'belongs to the component'.

When the state object changes, the component re-renders.

The state object can contain as many properties as we like:

Refer to the state object anywhere in the component by using the 'this.state.propertyname' syntax:

To change a value in the state object, use the 'this.setState()' method.

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

Always use the setState() method to change the state object, it will ensure that the component knows its been updated and 'calls the render() method' (and all the other lifecycle methods).

State is similar to props, but it is private and fully controlled by the component. 
We can create state only in class component.


there are two ways to initialize state in React Component:-
1. Directly inside Class
2. Inside the constructor

// ---------------------------------Directly Inside class-----------------------

class Student extends Component {
    //States- here it is a 'class property'
    state = {
        name: "Rahul",
        prop1: this.props.prop1
    }

    render(){

    }
}
NOTE: the state property is refered as state.
This is a class instance property. 

*/

// import React, { Component } from 'react'

// class Student extends Component{
//     state = {
//         name: 'Rahul',
//         roll: this.props.roll // since props ki value ko modify nahi ker sakte..to is liye hamne ise state me le liya hai jo ki modify hota hai
//     }
//     render(){
//         return (
//         <h1> Hello {this.state.name} Your Roll number is {this.state.roll}</h1>
//         )
//     }
// }

// export default Student



// -----------------------------------------Inside the  Constrcutor------------------------------------
/*
class Student extends Component{
    constructor(props){
        // it is required to call the parent class constrcutor
        super(props)

        //states
        this.state = {
            name:"Rahul",
            prop1: this.props.prop1
        }
    }
    render(){

    }
}

When the component class is created, the constructor is the first method called, so its the right place to add state. 

The class instance has already been created in memory, so you can use this to set properties on it. 

When we write a constructor, make sure to call the parent class' constructor by super(props)

When you call super with props. react will make props available across the component through 'this.props'  
*/

// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name: 'Rahul',
//             roll: this.props.roll
//         }
//     }
  
//     render(){
//         return (
//         <h1> Hello {this.state.name} Your Roll number is {this.state.roll}</h1>
//         )
//     }
// }

// export default Student



/* 
// ==================================Update State===========================
1. setState() Method is used to update states. 
ex: this.sate = {
    name: "rahul"
}
this.setState({name: "Amit"})  // accept object(it also accept function when the state value depends on previous state value)


2. this.setState(function(prevstate, props){   
    return {

    }
})
// it accepts a function rather than an object
//It receives the previous state as the first argument. 
//The props at the time the update is applied as the second argument

*/

// ================First Syntaxt====
// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll: this.props.roll
//         };
//     }
   

//     handleClick = () => {
//         // this will only affect name and roll others value will not refesh when we click
//         this.setState(
//             {
//                 name:'Amit',
//                 roll: 501
//             }
//         )

//         console.log(this.state.name)  // it shows the state value before update bcoz setState runs async and that means this console ran beofre setstate
//         // but sometime we need some code to run after setState. for that setState accept a callback function as second argument 
//     }
//     render(){
//         return(
//             <div>
//                 <h1>State Update</h1>
//                 <h3> Hello, {this.state.name} your Roll: {this.state.roll}</h3>
//                 <button onClick={this.handleClick}>Click ME</button>
//             </div>
//         )
//     }
// }

// export default Student

//----when ever we need to run code after setState method , do not put it after serState code instead put that code inside the call back fucntion of setState Method
// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll: this.props.roll
//         };
//     }
   

//     handleClick = () => {
//         this.setState(
//             {
//                 name:'Amit',
//                 roll: 501
//             },
//             ()=>{
//                 console.log('Callback value', this.state.name)  // this will give updated value
//             }
//         )

//         console.log(this.state.name)  
//     }
//     render(){
//         return(
//             <div>
//                 <h1>State Update</h1>
//                 <h3> Hello, {this.state.name} your Roll: {this.state.roll}</h3>
//                 <button onClick={this.handleClick}>Click ME</button>
//             </div>
//         )
//     }
// }

// export default Student



//what if we have to update state based on previous state on single event
// import React, { Component } from 'react'

// export default class Student extends Component {
//     constructor(){
//         super()
//         this.state= {
//             count: 0
//         }
//     }

//     increment =()=>{

//         this.setState({
//             count : this.state.count + 1
//         },()=>{
//             console.log(this.state.count, 'callback function')
//         })
//         console.log(this.state.count)
//     }

//     // value is changes to 1 instead of 5. bcoz react may group multiple 'setState' calls into a single update for better performance. 
//     //so updated value didnot carry over between differnr calls
//     // SOLUTION: we pass function instead of object as argument in setState Method. SYNTAX 2
//     incrementFive = () => {   
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button type='button' onClick={this.incrementFive}>Increment</button>
//             </div>
//         )
//     }
// }




// ============Second Syntax========
// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll: this.props.roll
//         };
//     }
   

//     handleClick = () => {

//         // arrow function can also be used
//         this.setState(function(state, props){
//             console.log(state)
//             // console.log(state.name)
//             // console.log(state.roll)
//             console.log(props)
//             console.log(props.roll)

//         }
          
//         )
//     }
//     render(){
//         return(
//             <div>
//                 <h1>State Update</h1>
//                 <h3> Hello, {this.state.name} your Roll: {this.state.roll}</h3>
//                 <button onClick={this.handleClick}>Click ME</button>
//             </div>
//         )
//     }
// }

// export default Student

import React, { Component } from 'react'

export default class Student extends Component {
    constructor(){
        super()
        this.state= {
            count: 0
        }
    }

    increment =()=>{

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

 
    incrementFive = () => {   
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button type='button' onClick={this.incrementFive}>Increment</button>
            </div>
        )
    }
}

