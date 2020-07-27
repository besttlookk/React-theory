// import React from 'react'
// import {UserContext} from '../5_useContext'

// function ComponentB() {
//     return (
//         <div>
//             <UserContext.Consumer>
//                 {
//                     user =>{
//                     return <div>User context value: {user}</div>
//                     }
//                 }
//             </UserContext.Consumer>
//         </div>
//     )
// }

// export default ComponentB


// ====================multiple context ==============================

// import React from 'react'
// import {UserContext, ChannelContext} from '../5_useContext'

// function ComponentB() {
//     return (
//         <div>
//             <UserContext.Consumer>
//                 {
//                     user =>{
//                     return (
                    
//                         <ChannelContext.Consumer>
//                             {
//                                 channel => {
//                                 return <div>User Context Value: {user}, Channel context value: {channel}</div>
//                                 }
//                             }
//                         </ChannelContext.Consumer>
//                     )   
//                     }
//                 }
//             </UserContext.Consumer>
//         </div>
//     )
// }

// export default ComponentB


//so much of nesting just for two value: solution: useContext
// first two steps of creating a context and providing the context remains the same. 

// import React, {useContext} from 'react'
// import {UserContext, ChannelContext} from '../5_useContext'


// function ComponentB() {

//     const user = useContext(UserContext)
//     const channel = useContext(ChannelContext)
//     return (
//         <div>
//            {user} - {channel}
//         </div>
//     )
// }

// export default ComponentB



// ==============for useReducer_global

import React from 'react'
import ComponentD from './componentD'

function ComponentB() {
    return (
        <div>
            <ComponentD />
        </div>
    )
}

export default ComponentB
