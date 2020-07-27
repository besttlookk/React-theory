// Context provides a way to pass data through the component tree withouty having to pass props down manually at every level. 

// import React, { Component } from 'react'
// import ComponentA from './components/componentA'

// export const UserContext = React.createContext()

// function App() {
//     return (
//         <div>
//             <UserContext.Provider value={'Prabhash'}>

//                 <ComponentA />
//             </UserContext.Provider>
//         </div>
//     )
// }

// export default App


// ======================Multiple Context=======================

import React, { Component } from 'react'
import ComponentA from './components/componentA'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
    return (
        <div>
            <UserContext.Provider value={'Prabhash'}>
                <ChannelContext.Provider value={'CodeEvolution'}>

                    <ComponentA />
                </ChannelContext.Provider>

            </UserContext.Provider>
        </div>
    )
}

export default App