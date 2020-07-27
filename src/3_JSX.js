/*
JSX Stands for JavaScript XML. It is a syntax extension to JavaScript. 
JSX is a prepocessor step that adds XML syntax to JavaScript. 
JSX produces React 'element'. It is possible  to create element without JSX but JSX makes React a lot more elegant. 

It is recommended to use JSX with react to describe what UI should look like. 

JSX is easier to read and write. Babel transfor these expression into a actualjavascript code. 
 
It also allows react to show more useful and warning message

// -------------JS Expression in JSX
we can put any valid Javascript expression inside the curly braces in JSX. you can pass any js expression as children, by enclosing it within {};

syntax: {expression}
ex: const el = <h1>{10+20}</h1>
ex: const el = <h1>hello {name}</h1>
ex: const el = <h1>hello {show()}</h1>
ex: const el = <h1>hello {user.firstname}</h1>

*/

/*


import React from 'react';

//Simple String(element)
// const el = <h1>Hello World</h1>

// Math expression
// const el = <h1>Value: {30 + 40  }</h1>

//variable
// const name = "Rahul"
// const el = <h1>Name: {name}</h1>


// Function
// function show(name){
//     return name;
// }
// const el = <h1>Name: {show('Raushan')}</h1>

// Object
// let user ={
//     username: "Rahul"
// };
// const el = <h1>Name: {user.username}</h1>

// export default el;



// -----------Specifying Attribute with JSX---

/*
We may use quote to specify literals as attributes. 
syntax: 
const el = <h1 attribute='value'> </h1>
ex:
const el =<h1 className='bg'>Hello</h1>
const el =<label htmlFor = 'name'>Name</label>

We may use curly bracket to embed a js expression in an attribute. 
const el = <h1 className ={ac.tab}>Hello</h1>

ReactDOM.render(<App name='Rahul' />, document.getElementById('root));

NOTE:
Since JSX is closer to JS than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names

Dont put quotes around curly braces when embedding a js expresson in an attribute. we should either use quote(for single value ) or curly braces(for expression), but not both in the same attribute

*/


// ==========JSX Represnets Objects:
// babel complies JSX down to react.createElement() claas


/*===================Children in JSX==========================

In JSX expression that contains both an opening tab and a closing tab, the content between those tags is assed as a special prop: 'props.children';

ex:<Student> I am child </student>

props.children   // I am child
*/

// import React, {Component} from 'react';

// functional Component
// const Student = props => {

//     return <h1>Hello Rahul. {props.children}</h1>
// };




class Student extends Component {
    render() {
    return <h1>Hello Rahul {this.props.children}</h1>
    }
}

export default Student