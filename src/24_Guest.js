// import React, { Component } from 'react'


// import {MyContext} from './22_Context'


// //Consumner component
// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Guest component</h3>
//                 <MyContext.Consumer>
//                     {/* data passed as value in provider  as function*/}
//         {data => <h4>{data.name} {data.value}</h4>}
//                 </MyContext.Consumer>
//             </div>
//         )
//     }
// }


// ============Example 2[changing state]===============
// import React, { Component } from 'react'
// import {MyContext} from './22_Context'


// //Consumner component
// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Guest component</h3>
//                 <MyContext.Consumer>
//                     {/* destructriing */}
//                     {({data, handleClick}) => (
//             <div>
//             <h4>{data.name} {data.value}</h4>
//             <button onClick={handleClick}>Change Value</button>
//             </div>
//                     )}
//                 </MyContext.Consumer>
//             </div>
//         )
//     }
// }



// ===============EXAMPLE 3[external context]

// import React, { Component } from 'react'
// import {Consumer} from './25_Context_external'

// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Guest component</h3>
//                 <Consumer>
//                     {({data, handleClick}) => (
//             <div>
//             <h4>{data.name} {data.value}</h4>
//             <button onClick={handleClick}>Change Value</button>
//             </div>
//                     )}
//                 </Consumer>
//             </div>
//         )
//     }
// }


// ===============Context type==============

// import React, { Component } from 'react'
// import {MyContext} from './25_Context_external'

// export default class Guest extends Component {
//     static contextType = MyContext
//     render() {
//         //we can also use destructuring 
//         const {name, value} = this.context.data


//         this.componentDidMount =()=>{
//             console.log(this.context)

//         }
//         return (
//             <div>
//             <h3>Guest component</h3>
               
//             <h4>{this.context.data.name} {this.context.data.value}</h4>
//             <button onClick={this.context.handleClick}>Change Value</button>
            
//             </div>
//         )
//     }
// }