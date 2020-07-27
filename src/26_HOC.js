/*
// =========================Higher Order Component============================

A Higher order Component(HOC)is an advance techqnique in React for reusing componet logic.

HOCs are common in third-party libralies. 

a HOC is a function that takes a component and return a new component

syntax:

const EnhanchesComponent = higerOrderComponent(WrappedComponent)

*/

// import React, { Component } from 'react'
// import Rahul from './27_Rahul'
// import Sonam from './28_Sonam'
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 {/* ager component me hoc use kiya hai to ye props ban ker nahi jaega ..balki hoc me jaega. Aur HOC me spred operator use hoga*/}
                    
//                 <Rahul camp='120'/>
//                 <Sonam camp='140'/>  
//             </div>
//         )
//     }
// }



// ========================Example 2[without HOC]

// import React, { Component } from 'react'
// import ClickCounter from './27_ClickCounter'
// import HoverCounter from './28_HoverCounter'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ClickCounter />
//                 <HoverCounter />
//             </div>
//         )
//     }
// }


//--------with HOC

import React, { Component } from 'react'
import ClickCounter from './27_ClickCounter'
import HoverCounter from './28_HoverCounter'

export default class App extends Component {
    render() {
        return (
            <div>
                <ClickCounter />
                <HoverCounter />
            </div>
        )
    }
}

