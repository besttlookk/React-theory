// we already seen fetching data using useEffect ..but in that we were using useState. 
// first we will see using useState

// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function DataFetching() {

//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState('')
//     const [post, setPost] = useState({})


//     // side effeccts
//     useEffect(()=> {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
//         .then(res => {
//             setLoading(false)
//             setPost(res.data)
//             setError('')
//         })
//         .catch(err => {
//             setLoading(false)
//             setPost({})
//             setError('Something went wrong')
//         })
//     }, [])

    
//     return (
//         <div>
//             {loading ? 'Loading' : post.title}
//             {error ? error: null}
//         </div>
//     )
// }

// export default DataFetching



// =======same with useReducer and useEffect=================

// import React, {useReducer, useEffect} from 'react'
// import axios from 'axios'

// const initialState = {
//     loading: true,
//     error: '',
//     post: {}

// }

// const reducer = (state, action) => {
//     switch(action.type){
//         case 'FETCH_SUCCESS':
//             return {
//                 loading: false,
//                 post: action.payload,
//                 error: ''
//             }
//         case 'FETCH_ERROR':
//             return {
//                 loading: false,
//                 post: {},
//                 error: 'Something went wrong'
//             }

//         default:
//             return state
//     }
// }



// function DataFetching() {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     useEffect(()=> {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
//         .then(res => {
//            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
//         })
//         .catch(err => {
//            dispatch({type: 'FETCH_ERROR'})
//         })
//     }, [])
//     return (
//         <div>
//               {state.loading ? 'Loading' : state.post.title}
//              {state.error ? state.error: null}
//         </div>
//     )
// }

// export default DataFetching



// =========================useState vs useReducer=========================

// Type of state:    number, string, boolen      :useState
// Type of state:    object or array             :useEffect


// Number of state transition:  one or two        : useState
//                           : too many           : useReducer


// related state transitions? : no  :    useState
//                             :yes :useReducer


// business logic:   no bussiness logic:  useState
//                 : complex bussiness logic : useReducer


// local vs global:  local   : useState
//               : global    : useReducer