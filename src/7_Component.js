/* 
// =============================Phase of COMPONENT===========================
1. Mounting: Mounting is the process of creating an element and inserting it in a DOM

2. Updatiing: Updating is the process of changing 'state' or 'porps' of component and update changes to node already in the DOM

3. Error Handling: These are used when there is error during rendiering, in lifecycle method or in the constructor of any child component.

4. Unmounting:  process of revoing components from the DOM


*/

/*
//=================================Lifecycle methods=============================

Each component has several "lifecycle method" that we can override to run code at particular times in the process
*/

/*
// =======================================1. Mounting============================================

Following in-build-methods are called in the 'following order' when an instance of a component is being created and insserted into the DOM:
1. Contructor()
2. static getDerivedStateFromProps()   // rarely used
3. render()
4. componentDidMount

The render() method is required and will always be called, the others are optional and will be called if you define them.

// ------Constructor()-
The Contructor for a 'react component' is called 'before' it is mounted. 
When implementing the constructor for a React.Component sublass, we should call "super(props)"" before any other statement.
Otherwise, "this.props" will be undefined in the constructor, which can lead to bugs.

The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

The constructor function is where you initiate the component's properties.

In React, component properties should be kept in an object called state.

Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attributes.

The constructor method is called, by React, every time you make a component:

React constructor are 'only' used for two purposes:
    a. Initializing local state by assigning an object to "this.state". // now a days state is initialized without constructor. 
            Ex: this.state = {name: "Rahul"}

    b. Binding event handler methods to an instance. 
            this.handleClick = yhis.handleClick.bind(this);


If we dont initialize state or we dont bind methods, you dont need to implement a constructor for our react Component. 



//------static getDerievedStateFromProps()
This is invoked right before calling the render method, oth on the initial mount and on subsequest updates.

It should return an object to update the state, or null to update nothing.(Important)

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and returns an object with changes to the state.

This method exists for rare use case where the state depends on changes in props over time. 

This method doesnt have access to the component instance

syntax: 
    static getDerivedStateFromProps(props, state){}

//-------componentDidMount()

componentDidMount() is involved immediately after a component is mounted[and all its children components](inserted into the tree), after the render() method has taken place.

//This method is executed once in a lifecycle of a component and after the first render. 

// Initialization that requires DOM nodes sholud go here(interaction with the DOM)

// This is where AJAX request and DOM or state updates should occur. 
This method is also used for integration with other JS frameworks and any function with delayed execution sucj as setTimeout or serInterval.

The API calls should be made in componentDIdMount method always. 

Syntax:
compoundDidMount(){

}
*/



// import React, { Component } from 'react'
// import Student from './Student'

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         console.log('APP- Constrcutor Called');
//         console.log('inside constructor', props);
//         this.state = {
//             roll: 101
//         }
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log("App - Get derived state from props");
//         console.log(props, state)
//         return null 
//     }

//     componentDidMount(){
//         // get data from server and set the data state
//         console.log('App- componenetdid mounted')
//     }
//     render(){
//         console.log("APP -Rendered")
//         return (
//             <div>
//                 <Student name='Rahul' />
//             </div>
//         )
//     }

}

/*
// ======================================2. Updating=======================================
It is a proccess of changinbg state or props of componnet and update changes to nodes already in the DOM.

A component is updated whenever there is a change in the component's state or props.

An update can be caused by changes to props or state. 
These methods are called in the following order when a component is being re-rendered:(5 in-built method)
    a. static getDerivedStateFromProps()
    b. shouldComponentUpdate()
    c. render()  // important
    d. getSnapshotBeforeUpdate()
    e. componentDidUpdate()  // importand
The render() method is required and will always be called, the others are optional and will be called if you define them.

//-----shouldComponentUpdate()
Use shouldComponentUpdate() to let React know if component's output is not afftected by the current change in state or props, 

It means should React re-render or it can skip rendering?

It is invoked before rendering when new props or state are being received. 
This method return 'true' by default. 

render() will not invoked if shouldComponentupdate returns false.

syntax:
    shouldComponentUpdte(nextProps, nextState{})


//-----getSnapchotbeforeUpdate()
This method is called before the virtual DOM is about to make change to the DOM(before DOM is updated). 
which allows our components to capture the current values or some info from the DOM(eg. scroll position) before it is potentially changed.

Anyvalue returned by this lifecycle will be be passed as the thirt parameter to 'compundDidUpdate()'

syntax:
    getSnapshotBeforeUpdate(prevProps, preState){}


//----componentDidUpdate()
it is invoked immediately after updating occurs. This method is not called for the initial render. 

This method is used to trigger the third party libarries  used to make sure thesse libraries also update and reload themselves. 

compoundDidUpdate() will not be involked if shouldCompundUpdate() returns false. 

syntax: 
    componenetDidUpdate(prevProps, prevState, snapshot){}

If your component implement the getSnapshotBeforeUpdate() lifecycle(which is rare), the value it retrun will be passed as a third 'snapshot' parameter to componentDitUpdate().
otherwise this parameter will be undefined
*/



// import React, { Component } from 'react'
// import Marks from './Marks'


// export default class Student extends Component {

//     constructor(){
//         super();
//         this.state ={
//             roll: 105
//         }
//     }

//     clickHandle = ()=> {
//         console.log('Button clicked');
//         this.setState(
//             // {roll: 500}
//             {roll: this.state.roll + 2 }
//         )
//     }
//     render() {
//         console.log('Student rendered')
//         return (
//             <div>
//                 <Marks roll={this.state.roll} />
//                 <button onClick={this.clickHandle}>Change</button>
//             </div>
//         )
//     }
// }

/*
// ----------------------UNMOUNting-------------------

It is a process of removing components from the DOm.

This method is called when a componet is being removed from the DOM. 
    componentWillUnmount()

compoundWillUnmount() is invoked immediately before a component is unmount and destroyed. 

performs any necessary cleanup in this method, such as invalidating timers, canceling netwrok request , or cleaning up ant subscription that were created in. 

This is executed jyust before the component gets remived from the Dom. 

Syntax: 
    componentWillUnmount()

*/

// import React, { Component } from 'react'

// export default class Student extends Component {
//     componentDidMount(){
//         console.log('Student Mounted')
//     }
//     render() {
//         console.log('Student Rendered')
//         return (
//             <div>
//                 Hello Student Component
//             </div>
//         )
//     }
// }
