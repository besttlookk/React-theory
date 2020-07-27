/*
Props are arguments passed into React components.

Props are passed to components via HTML attributes.

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

The component receives the argument as a props object:

Props are also how you pass data from one component to another, as parameters.



When React sees an element representing a user- defined component, it passes JSX attribute to this component as a single object 

// We call this object ' props

function Student(props){
    return (
        <div>
        <h1> hello {props.name} </h1>
        <h2> your roll: {props.roll} </h2>
        </diV>

    )
}

ReactDOM.render(<student name='Rahul' roll='101' />, document.getElementById('root' ))
ReactDOM.render(<student name='Rahul' roll={100+1} />, document.getElementById('root' ))



// ----class

class Student extends React.Component{
    render(){
        return (
            <div>
            <h1> hello {this.props.name} </h1>
           <h2> your roll: {this.props.roll} </h2>
        </diV>

        )
    }
}
*/

// Whether we declare a component as a function or a class, it must never modify its own props.
// All React component muct act like pure function with respect to their props. 
//  Props are read-only.

/*
//pure function:
function sum(a, b){
   return a+b;
}

Impure Function
function withdwaw(account, amount){
    account.total = amount
}

*/

/* 
===========================Typechechecking with Prop Types===========

npm install prop-types

To run typechecking on the props for a component, we can assign the special propType property. 
Ex:
import PropTypes from 'prop-types';
Student.propTypes = {
     name: PropTypes.string
}

NOTE:
When an invalid  value is provided for a prop, a waning will be shown in the javascript console. 
for performance reasons, propTypes is only checked in development mode


PropTypes exports a range of validators that can be used to make sure the data we receive is valid

optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,

*/

/*
=============================Required==========
Student.propTypes = {
    name: PropTypes.string.isRequired;  // value is must in this case
}
*/

/*
// =====================Default Prop Values=============
we can define default values for our props by assingning to the special defaultProps property.

Student.defaultPropts ={
    name: 'Prabhash'
}

*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Student extends Component{
    render(){
        return (
            <div>
                <h1> hello {this.props.name} </h1>
                <h2> your roll: {this.props.roll} </h2>
            </div>

        );
    }
}

// propType is a special property while PropTypes is method define in 'prop-types'
Student.propTypes ={
    // name: PropTypes.string
    name: PropTypes.string.isRequired 
};

Student.defaultProps = {
    name: 'Prabhash'
}
export default Student;
