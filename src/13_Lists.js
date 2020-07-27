/*
=============================LISTS===============================
We can build collections of elements and include them in JSX usingcurly braces {}

const arr = [10, 20, 30, 40]

state = {
    users: [

        {id:100, name: "rahul", password: "abcd"},
        {id:101, name: "Prabhash", password: "abcd123"},
        {id:102, name: "Ranjeet", password: "abcd334445"}
    ],

    isLoggedIn: false
}

// ===================Iteration using map() method==============

syntax: map(callback(currentValue, index, array), thisArg)


*/


// import React, { Component } from 'react'

// export default class App extends Component {
//     render() {
//         const arr = [10, 20, 30, 40]
//         const newArry = arr.map(num =>{  // forEach func can't be used here..bcoz forEach fucnt always return undefined. 
//         return <li>{num*2}</li>   // JSX ke ander JS ka code likhne ke liye {} use kerte
//         })

//         return (
//             <ul>
//                 {newArry}
//             </ul>
//         )
//     }
// }

// ----embeding map function in JSX

// import React, { Component } from 'react'

// export default class App extends Component {
//     render() {
//         const arr = [10, 20, 30, 40]
     

//         return (
//             <ul>
//                 {arr.map(num =>{
//                     return <li>{num}</li>;
//                 })}
//             </ul>
//         )
//     }
// }


// ------States with map

// import React, { Component } from 'react'

// export default class App extends Component {

//     state = {
//         users: [
    
//             {id:100, name: "rahul", password: "abcd"},
//             {id:101, name: "Prabhash", password: "abcd123"},
//             {id:102, name: "Ranjeet", password: "abcd334445"}
//         ],
    
//         isLoggedIn: false
//     }
//     render() {
//         const newUsers = this.state.users;
//         return (

//             <div>
//                 {newUsers.map(user=>{
//                     return <h1>ID<span>{user.id}</span>, Name:{user.name}</h1>
//                 })}
                
//             </div>
//         )
//     }
// }


/* 
// ==========================Keys=========================
A 'Key' is a special string attribute we need to include when creating lists of elements. 

Keys help React identify which items have changed, are added, or removed. 

Keys should be given to the element inside the array to give the elemenets a stable identity. 

The best way to pick a key is to use a string that uniquely identifies a list item among its sibling. 

Most often we would use IDs from our data as keys. 

Keys used within arrays should be unique among their siblings. however they dont need to be globally unique. 
We can use the same keys when we produce two different arrays. 

Keys serve as a hind to react but they dont get passed to our components 

If we need the same value is our component, pass it explicitly as a prop with a different name


A good rule of thumb is that element inside the map() call need keys. 

Key should be specific inside the array


*/

import React, { Component } from 'react'

export default class App extends Component {

    state = {
        users: [
    
            {id:100, name: "rahul", password: "abcd"},
            {id:101, name: "Prabhash", password: "abcd123"},
            {id:102, name: "Ranjeet", password: "abcd334445"}
        ],
    
        isLoggedIn: false
    }
    render() {
        const newUsers = this.state.users;
        return (

            <div>
                {newUsers.map(user=>{
                    return <h1 key={user.id}>ID{user.id}, Name:{user.name}</h1>
                })}
                
            </div>
        )
    }
}


/*

==============Index as key========================
when  all three condition is met:
    1. The items in our list do not have a unique id. 
    2. The list is a static list and without change. 
    3. The list will never be reordered or filtered
 */