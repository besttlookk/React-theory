/*
//=======================Conditional Rendering====================================
Conditional rendering in React works the same way conditions work in Javascript.

Use Js operator like if or the conditional(ternary) operator to cretae element representing the current satte, and let React update the UI to match them

if and if-else statements dont work inside JSX. 
This is beacuse JSX is just syntatic sugar for function calls amd object construction. 

<div id={if(condition){'msg'}}>Hello </div>    // suppose we write if condition like this. babel will change it like below

React.createElemet('div',{id:if(condition){'msg'}},'Hello')  // & this is not a valid js syntax

//----4 Approch for Conditional rendering
// 1. if/else
// 2. Element Variable
// 3. Ternary Conditional operator
// 4. Short Circit operator

*/
//--------------------if/else statement outside JSX[element varibale method]--------------------

// import React, { Component } from 'react'
// import Guest from './11_Guests'
// import User from './12_Users'

// export default class Conditional extends Component {

//     state = {
//         isRegistered: false
//     }

//     clickLogin = () =>{
//         this.setState({isRegistered: true})
//     }
//     clickLogout = () =>{
//         this.setState({isRegistered: false})
//     }
//     render() {
//         // const isRegistered = this.props.consumer
//         const isRegistered = this.state.isRegistered
//         let consumer 

//        if(isRegistered){
//             consumer = <User name="Rahul" clickData={this.clickLogout} />
//         }
//         else {
//             consumer = <Guest clickData={this.clickLogin}/>
            
//         }
//     return <div>{consumer}</div>
//     }
// }

/*
// --------------inline if with logical && operator[short circuit operator][something and nothing situation]

We may embed any expression in JSX by wrapping them in curly braces.
This includes the js logical && operator. 

True && Expression : Expreesion
false && Expression : false

true && expression1 && expression2 = expression2(rightmost )


Ex: purchase && <Payment />
*/

// import React, { Component } from 'react';
// import User from './12_Users'

// export default class Conditional extends Component {
//     render() {
//         const primeMember = this.props.primeMember
//         return (
//             <React.Fragment>
//                 <h1>Welcome User</h1>
//                 {primeMember && <User />}
//             </React.Fragment>
//         )
//     }
// }

// ================Inline if-else with conditional operator[ternorny operator]====================
//syntax: condition ? Exression_1: Expreesion_2

// import React, { Component } from 'react'
// import Guest from './11_Guests'
// import User from './12_Users'

// export default class Conditional extends Component {

//     state = {
//         isRegistered: false
//     }

//     clickLogin = () =>{
//         this.setState({isRegistered: true})
//     }
//     clickLogout = () =>{
//         this.setState({isRegistered: false})
//     }
//     render() {
//         // const isRegistered = this.props.consumer
//         const isRegistered = this.state.isRegistered
//         return (
//             <div>
//                 {isRegistered ? (<User name="Rahul" clickData={this.clickLogout} />) : (<Guest clickData={this.clickLogin}/>)}
//             </div>
//         )
//     }
// }

// ======================IIFE===============================
//In React, we use curly braces to wrap an IIFE, put all the logic we want inside it(if/else, switch, ternarry operators etc) and return whatever we want to render


// import React, { Component } from 'react'
// import Guest from './11_Guests'
// import User from './12_Users'

// export default class Conditional extends Component {

//     state = {
//         isRegistered: false
//     }

//     clickLogin = () =>{
//         this.setState({isRegistered: true})
//     }
//     clickLogout = () =>{
//         this.setState({isRegistered: false})
//     }
//     render() {
//         // const isRegistered = this.props.consumer
//         const isRegistered = this.state.isRegistered
//         return (
//             <div>
//             {
//             /*  IIFE stats from here */
//             (() => {
//                 if(isRegistered){
//                     return <User name="Rahul" clickData={this.clickLogout} />
//                 }else{
//                     return <Guest clickData={this.clickLogin}/>
//                 }
//             })()
            
                
//             }
//             </div>
//         )
//     }
// }