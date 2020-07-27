/*
HTMl form elements work a little bit differently from other DOM elements in React, because form element naturally keep some internal state.

In HTML, form elements such as <input>, <textarea> and <select> typically maintain their own state and update it based on user input. 
In react, mutable state is typically kept in the state property of component, and only updated with setState()


1. Controlled Component
2. Uncontrolled Component


//-------------------Controlled Component[2 sTEP: STATE + onChange]----------------------

Form has the default HTML form behavior of browseing to a new page when the user submits the form. 
If we want this behaviour in React, it just works. 

But in most cases, it's convenient to have a JS function that handles the submissiom of the form and has access to the data tha the user entered into the form. 
The statndard way to achieve this is with technoque called 'Controlled componenets'

In a controlled component, form data is handled by React component

---when use controlled component:
We need to write an event handler for every way our data can change and pipe all of the input state through a react componenet



//------------Uncontrolled Component-------------------------------
In a controlled component, form data is handled by a React component. The alternative is controlled component, where form data is handled by the DOM itself

To write an uncontrolled component, instead of writing an event handler for every state update, we can use "ref" to get form values from the DOM. 


//--when use uncontolled component:
We do not need to write an event hanler for every way our data change and pipe all of the input state through a React component. 

Converting a pre-existing code base to React, or integrating a React application with a non-React library
*/

// const { render } = require("@testing-library/react");


// import React, { Component } from 'react'

// export default class App extends Component {

//     state ={
//         value: ""
//     }

//      handleChange = (e) =>{
//         console.log('On change')
//         // console.log(e)
//         console.log(e.target.value)
//         this.setState({value: e.target.value})
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <h2>Controlled By React</h2>
//                     {/* <input type='text' value='Prabhash'/> */}
//                     {/* <input type='text' defaultValue='Prabhash' />  */}
//                     <input type='text' value={this.state.value} onChange={this.handleChange} />
//                 </form>
//             </div>
//         )
//     }
// }


// ====textarea


// import React, { Component } from 'react'

// export default class App extends Component {

//     state ={
//         value: "Enter Here!!!!!!!!!"
//     }

//      handleChange = (e) =>{
//         this.setState({value: e.target.value.substr(0,30)})
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                    <textarea value={this.state.value} onChange={this.handleChange}/>
//                 </form>
//             </div>
//         )
//     }
// }



// =======multiple input 



// import React, { Component } from 'react'

// export default class App extends Component {

//     state ={
//         name: "Prabhash",
//         password:"helloworld"
//     }

//      handleName = (e) =>{
//         this.setState({name: e.target.value})
//     }
//      handlePassword = (e) =>{
//         this.setState({password: e.target.value})
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <label>Name: <input type='text' value ={this.state.name} onChange={this.handleName}/></label><br /><br />
//                     <label>Password: <input type='text' value={this.state.password} onChange={this.handlePassword}/></label><br />
//                 </form>
//             </div>
//         )
//     }
// }


// ===========Same onChange handler for multiple input using "name"
// import React, { Component } from 'react'

// export default class App extends Component {
        //name of the state is same as name of the input
//     state ={
//         name: "",
//         password:""
//     }

//      handleChange = (e) =>{

//         // console.log(e.target.name)
//         // this.setState({[e.target.name]: e.target.value})

//         const value = e.target.name === 'password' ? e.target.value.toUpperCase().substr(0,10) : e.target.value

//         this.setState({[e.target.name]: value})
//     }
  
//     render() {
//         return (
//             <div>
//                 <form>
//                     <label>Name: <input type='text' name='name' value ={this.state.name} onChange={this.handleChange}/></label><br /><br />
//                     <label>Password: <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/></label><br />
//                 </form>
//             </div>
//         )
//     }
// }


// ================Handling  form[onSubmit]========================

// import React, { Component } from 'react'

// export default class App extends Component {

//     state ={
//         name: "",
//         password:""
//     }

//      handleChange = (e) =>{

//          const value = e.target.name === 'password' ? e.target.value.toUpperCase().substr(0,10) : e.target.value
//          this.setState({[e.target.name]: value})
//     }

//     handleSubmit = e =>{
//         e.preventDefault()
//         console.log(e)
//         console.log(e.target)  //whole form
//         console.log(e.target[0]) 
//         console.log(e.target[0].value) 
//         console.log(e.target[0].name) 
//         console.log(e.target[1]) 
//     }




//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Name: <input type='text' name='name' value ={this.state.name} onChange={this.handleChange}/></label><br /><br />
//                     <label>Password: <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/></label><br /><br/>
//                     <input type='submit' value='Submit' />
//                 </form>
//             </div>
//         )
//     }
// }


/*

// =========================Refs[3 STEPS: 1.Create ref(inside constructor) 2.Attach this ref yto the element in the render method]
//Refs provide a way to access DOM nodes or React elements creates in the render method

//--When to use Refs:
// managing Focus, text-selection, or media playback
// trigeering inperative animations
// Integrating with third-party DOM libraries

//----Creating Refs:
//Refs are created using 'React.createRef()' and attached to React element via the 'ref' attribute.  

//Refs are commonly assigned to an instance property when a component is constructed so they can be referneced throughout the component.

//Create a ref to store the DOM element
//   this.myRef =React.createRef()

render(){
    // Attaching created ref to react element
    return <div ref={this.myRef} />
}

//------Accessing Refs
When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref

const node = this.myRef.current

React will assign the current proprty with the DOM element with the DOM element when the component mounts, and assign it back to null when it unmount. 

The value of the ref differs depending on the type of the node:
    When the ref attribute is used on an element, the ref created in the constructor with React.createRef() receives the underlying DOM elemnet as its current property. 
    
    When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as it current. 

    We may not use the ref attribute on function component beacuse they dont have instance


*/

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props){
//         super(props)
//         // creating ref
//         this.textInput = React.createRef();
//     }
//     componentDidMount =()=>{
//         // console.log(this.textInput)
//         // console.log((this.textInput.current))
//         this.textInput.current.focus()   // focus automatically on password
//     }

//     clickHandler = () => {
//         alert(this.textInput.current.value)
//     }
//     render() {
//         return (
//             <form>
//                 Name: <input type='text' />
//                 <br />
//                 <br />
//                 {/* attaching the created refs */}
//                 Password: <input type='text' ref={this.textInput} />
//                 <br />
//                 <br />
//                 Address: <input type="text" />
//                 <button onClick={this.clickHandler}>Submit</button>
//             </form>
//         );
//     }
// }


// ----onsubmit value change

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props){
//         super(props)
//         this.state ={
//             value: ""
//         }
//         // creating ref
//         this.textInput = React.createRef();
//     }
//     handleSubmit = e=>{
//         e.preventDefault();
//         console.log(this.textInput.current)
//         console.log(this.textInput.current.value)
//         this.setState({value:this.textInput.current.value})
//     }
  
//     render() {
//         return (
//             <React.Fragment>
//                 <h2>You typed: {this.state.value}</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     Input: <input type='text' ref ={this.textInput} />
//                     <input type='submit' value='Submit' />
//                 </form>
//             </React.Fragment>
//         );
//     }
// }

/*
//=====================Callback refs[old approch]

React also supports another way to set refs called 'callback refs', which gives more fine-grain control over when refs are set and unset .

Instead of passing a ref attribute cretaed by createref(), we pass a function. 
The function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere. 

*/

// import React, { Component } from 'react'
// import { element } from 'prop-types';

// export default class App extends Component {
//     constructor(){
//         super();
//         this.backRef = null;
//         this.setBackRef = element => {
//             this.backRef = element;
//         }
//     }

//     componentDidMount =()=>{
//             if(this.backRef){
//                 this.backRef.focus()
//             }
//             }
//     render() {
//         return (
//             <form>
//                 Name: <input type='text' /><br /><br />
//                 Password: <input type='text' ref={this.setBackRef} /><br /><br />
//                 Address: <input type='text' /><br /><br />
//             </form>
//         )
//     }
// }



//==========================Forwarding Refs===================================

import React, { Component } from 'react'
import FRInput from './FRInput';

class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
