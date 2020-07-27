// import React from 'react';

// function Student(){
//     return <h1>Hello worldd</h1>
// }

// const Student = () => {
//     return <h1> Hello Student</h1>
// };

// const Student = (props) => {
// return <h1> Hello {props.name}</h1>
// }


// export default Student;


// ====This student class is for "compinent.js"
import React, { Component } from 'react';
import Marks from './Marks'

export default class Student extends Component {
    render(){
        console.log('Student - Rendered [Child of app]')
        return(
            <div>
                <h1> Hello {this.props.name}</h1>
                <Marks />
            </div>
        )
    }
}