/* 
Handling events with react component is very similar to handling events on DOM elements. 
There are some syntactic differneces:
  1. React events are named usinhg camelCase, rather  than lowercase.
  2. With JSX we pass a function as the event handler, rather that a string. 

In HTML : <button onclick="handleClick()"> Click ME </button>

In React : 
    <button onClick={handleClick}>Click me </button>      // Function Component
    <button onClick={this.handleClick}>Click me </button>  // Class Component


We cannot return false to prevent default behavios in React. We must call "preventDefault" explicitly
In HTML: <a href="#" onclick='console.log("clicked"); return false'>Click me </a>

In React: function handleclick(e) {
    e.preventDefault();
    consoloe.log("Clicked");
}
<a href='#' onClick={handleClick}> Click Me </a>
*/

/* 
==================================React Event List=================================

CLIPBOARD EVENTS: onCopy  /  onCut  /  onPaste

COMPOSITION EVENTS: onCompositionEnd  /  onCompositionStart    /  onCompositionUpdate

KEYBOARD EVENTS: onKeyDown  /  onKeypress  / onKeyUp

FOCUS EVENTS: onFocus   /   onBlur

MOUSE EVENTS : onClick   /  onContextMenu  / onDoubleClick   /  onDrag   /  onDragEnd   /  onDragStart   /  onDragEnter  / onDragExit  / onDragLeave  / onDragOver

FORM EVENTS: onChange  / onInput  / onInvalid  /  onSubmit


*/
// ------------------------Event with Class component[bit though than function]Method 1[bind method in constructore ]-------------------------------
// beacuse binding occurs once in the constructor, it is better approch than binding in render method
// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll: this.props.roll
//         };
//         // this.handleClick = this.handleClick.bind(this)  // not used with arrow function
//     }
    //------------normal function
    // handleClick(){

    //     console.log('button Clicked', this)   // this not accessbale so we will make it arrow function or use bind method inside constructor
    // }

    //-------------Arrow function
//     handleClick = () => {

//         console.log('button Clicked', this)   // this not accessbale so we will make it arrow function

//     }
//     render(){
//         return(
//             <div>
//                 <h1>Event Class</h1>
//                 <h3> Hello, {this.state.name} your Roll: {this.state.roll}</h3>
//                 <button onClick={this.handleClick}>Click ME</button>
//             </div>
//         )
//     }
// }

// export default Student

//==========to bind eventHandler Method 2[using bind menthod in render method][not good in performance]
// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll: this.props.roll
//         };
//     }
//     // ------------normal function
//     handleClick(){

//         console.log('button Clicked', this)   
//         this.setState({
//             roll: this.state.roll + 1
//         })
//     }

 
//     render(){
//         return(
//             <div>
//                 <h1>Event Class</h1>
//                 <h3> Hello, {this.state.name} your Roll: {this.state.roll}</h3>
//                 <button onClick={this.handleClick.bind(this)}>Click ME</button>
//             </div>
//         )
//     }
// }

// export default Student


// ========Method 3:[calling function inside arrow function inside render method][permormance implication]

// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll: this.props.roll
//         };
//     }
//     // ------------normal function
//     handleClick(){

//         console.log('button Clicked', this)   
//         this.setState({
//             roll: this.state.roll + 1
//         })
//     }

 
//     render(){
//         return(
//             <div>
//                 <h1>Event Class</h1>
//                 <h3> Hello, {this.state.name} your Roll: {this.state.roll}</h3>
//                 <button onClick={()=> this.handleClick()}>Click ME</button>
//             </div>
//         )
//     }
// }

// export default Student

// ======Method 4: Using arrow function to define event handler
// import React, { Component } from 'react'

// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Rahul",
//             roll: this.props.roll
//         };
//     }


//     // -------------Arrow function
//     handleClick = () => {

//         console.log('button Clicked', this)   // this not accessbale so we will make it arrow function

//     }
//     render(){
//         return(
//             <div>
//                 <h1>Event Class</h1>
//                 <h3> Hello, {this.state.name} your Roll: {this.state.roll}</h3>
//                 <button onClick={this.handleClick}>Click ME</button>
//             </div>
//         )
//     }
// }

// export default Student


// ===============================Event handling with function component======================

// import React from "react";

// // siliarly arrow can also be used
// function Student(props){

//     function handleClick(){
//         console.log('Btn cicked')
//     }

//     return(
//         <div>
//             {/* <h1>Helo Rahul</h1> */}
//     <h1>Helo {props.name}</h1>
//             <button onClick={handleClick}>Click ME</button>
//         </div>
//     )
// }

// export default Student;

/*
// =====================Passing Argumants to event handlers==========================================

1. Arrow Function :
        <button onClick={(e) => this.handleClick(id, e)}> Delete </button>

2.Bind Method
        <button onClick={thhis.handleClick.bind(this, id)}> Delete </button>


NOTE: 
In both cases, the 'e' agrument represting the React event will be passsed as secomd argument after the ID(important)

With an arrow function we have to pass it explicitilt, but with bind any futher arguments are automatically forwarded

*/


// ----using arrow function
// import React, { Component } from 'react'

// class Student extends Component{

//     // state without Constructor or state property
//    state = {
//        name: 'Rahul',
//        id: 500
//    }
//    // Event handler with arroe function
//     handleClick = (id) => {

//         console.log(id); 

//     }

//     handleClickArg = () => {
//         return this.handleClick(this.state.id)
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Event Handling with argument </h1>
//                 <h3> Hello, {this.state.name}</h3>
//                 <button onClick={this.handleClickArg}>Delete</button>
//             </div>
//         )
//     }
// }

// export default Student


// ------------Event object with arrow function(evnet object should be last in argument/parameter list)
// import React, { Component } from 'react'

// class Student extends Component{

//     // state without Constructor or state property
//    state = {
//        name: 'Rahul',
//        id: 500
//    }
//    // Event handler with arroe function
//     handleClick = (id, e) => {

//         console.log(id); 
//         console.log(e); 
//         console.log(e.target); 

//     }

//     handleClickArg = (e) => {
//         return this.handleClick(this.state.id, e)
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Event Handling with argument </h1>
//                 <h3> Hello, {this.state.name}</h3>
//                 <button onClick={this.handleClickArg}>Delete</button>
//             </div>
//         )
//     }
// }

// export default Student


// ---------------Better approch-----------
// import React, { Component } from 'react'

// class Student extends Component{

//    
//    state = {
//        name: 'Rahul',
//        id: 500
//    }
//    // Event handler with arrow function
//     handleClick = (id, e) => {

//         console.log(id); 
//         console.log(e); 
//         console.log(e.target); 
//     };
//     render(){
//         return(
//             <div>
//                 <h1>Event Handling with argument </h1>
//                 <h3> Hello, {this.state.name}</h3>
//                 <button onClick={e => {
//                     return this.handleClick(this.state.id, e)
//                 }}>Delete</button>
//             </div>
//         )
//     }
// }

// export default Student


// --------------using Bind Method[method to bind event handler][with this method on every re-rendering new clickevent is build which degrade the performance]------------
// import React, { Component } from 'react'

// class Student extends Component{

//     // state without Constructor or state property
//    state = {
//        name: 'Rahul',
//        id: 500
//    }
//    // Event handler with arroe function
//     handleClick = (id, e) => {

//         // console.log(id); 
//         // console.log(e); 
//         // console.log(e.target); 
//         this.setState({
//             name: 'Amit',
//             id: 600
//         })
//     };
//     render(){
//         return(
//             <div>
//                 <h1>Event Handling with argument </h1>
//         <h3> Hello, {this.state.name} {this.state.id}</h3>
//                 <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button> 
//             </div>
//         )
//     }
// }

// export default Student