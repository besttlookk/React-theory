import React, {Component, Fragment} from 'react';
import Student from './Student';

// USING JSX
// let el = <h1>Hello Worldd</h1>


//=================================== Class Based Component
// koi v 'class component' banana hai to ye jaruri hai ki wo 'component class' ko extend kare
// class App extends Component {
    // ---------------------------
    //The render() method is the only 'required' method in a class component. It examines 'this.props' and ' this.state' .
    // It returns one of the following types:
    // 1. React elemnts- These are created via JSX(Not Required). 
                        //  examole: <div /> and <App /> are element that instruct React to render a DOM node, or another user-define component, respectively.
    //2. Array and fragments- It is used to retun multiple elemnets for render.
    //3. Portals - It is used to render children into a different DOM subtree
    // 4. String and numbers- These are rendered as text nodes in the DOM
    // 5. Booleans or null : It renders nothing, (Mostly exits to support return test && <child/> pattern, where test is boolean) 

    // ------------------
    // render(){
        // USING JSX
        // return <h1>Hello World</h1>  //element ko component bana diya
        // return React.createElement("h1", null, "Hello World");  // cant return multiple element
        // ---------
        // return (
        //     <div>
        //         <h1>Hello</h1>
        //         <h2>World</h2>
        //     </div>
        // )  // it still rendering single element only..we added extra div for no reason 
        // ---------
        // return (
        //     <React.Fragment>  // only one attribute[i.e KEY] can be passed in react.fragment
        //         <h1>Hello</h1>
        //         <h2>World</h2>
        //     </React.Fragment>  // no extra div present here
        // ) 
        // -------now that we have imported "Fragment from react we can directly use fragment"
        // return (
        //     <Fragment>
        //         <h1>Hello</h1>
        //         <h2>World</h2>
        //     </Fragment>  // no extra div present here
        // ) 
        // ------------not supported in every browser
        // return (
        //     <>
        //         <h1>Hello</h1>
        //         <h2>World</h2>
        //     </>  // no extra div present here
        // ) 
            
    

//     }
// }
// NOTE: The render() function should be pure, meaning that it does not modify component state,  it returns the same result each time it is invoked, and it does not directly interect with the browser. 

// ===================function bases app=================================================================
const App = () => {
    return (
        <div>
            <Student name='Prabhash' />
            <Student name= 'Raushan' />
            <Student name= 'Rahul' />
        </div>
    )
}

// export default el;
export default App;


// ==================================================React Element-==========================
// We can create a react element using React.crateElement() method but there is a easy way to create element via JSX.
// Using createElement() Method:  React.createElement('h1', null, 'Hello World');
// Using JSX: <h1> Hellow World </h1>

// =============================React.createElement(type, props, children)=================================
//It create a React Element with the given arguments
// type: Type of the html element or component
// props: THe properties object. Exapmle: {style:{color: "blue"}} or className or event handlers etc
// children: anything we need to pass between the dom element.


// ============================ReactDOM.render(element, DOMnode)================================
//It takes a react element and render in to a DOM node


// ============================React Fragment==================================================
//Fragment is used to group children without adding extra nodes to the DOM
// Syntax: <React.Fragment> </React.Fragment>
//Ex: <React.Fragment> <h1> Hello </h1> <h2> World </h2> </ReactFragment>
//Syntax 2: <> </>
//Ex: <> <h1> Hello </h1> <h2> World </h2> </>
//Syntax 3: <React<>Fragment Key = {id}> <React.Fragment>
//Ex: <React.Fragment key={item.id}> <h1>{item.title} </h1> <p> {item.description} </p> </react.Fragment>


// ==========================Components======================================================
//Componenst are the building blocks of any React app.
//Components let you splice the UI into independent, reusable pieces, and think about each piece in isolation
//Componenst are like  'javascript' functions.  They accept arbitary inputs(called 'props') and returns React elements describing what should apper on the screen
//React treats components starting with lowercase letters as DOM tags. for exapmle, <div> represnets an HTML div tag, but <App/> represnets a component requires App to be in scope


// =========================Function Components==================================================
//It is a JavaScript function which accepts a 'sinle props ' object argument with data and return a React Element. 
//syntax: function func_name(){ return React Element;}
//Example: function Student(){ return <h1> Hello World <h1>}
//syntax 2: const Student = () =>{return React Element }
//sysntax 3: function func_name(props){return <h1> Hello {props.name} </h1>}

// ===========================Class Component====================================
//A class component requires us to extent from 'React.Component'. The class must implement a render() method function which returns a React componnet to be rendered, 
//similar to a return value of a functional component. In  a class-baes component, props are accessible via 'this.props'
//syntax: class class_name extends Component {render() {return React Element}}


// ====================Rendering a component===================================
// reactDOM.render(<Student />, document.getElementById('root))
// reactDOM.render(<Student name='Rahul'/>, document.getElementById('root))
// When react sees an element representing a user-defined componet, it passes JSX attributes to this component as a single object. we call this object 'props'


// ==================Composing Components========================================
//Components can refre to other compnents in their output. This lets us use the same component abstraction for any level of detail


// ===================Functional Vs Class Component================================
// Use functional component if you are writing a presentational component which doesn't have its own state or neends to access a lifecycle hook 
// You cannot use setState() in your component beacuse Functional Components are plain Javascript functions.

// Use class components if we need state or need to access lifecycle hook beacuse all lifecycle hooks are coming from the React.Component which we extend from in class componentt