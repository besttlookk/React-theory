// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function DataFetching() {

//     const [posts, setPosts] = useState([])

//     useEffect(()=> {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => setPosts(res.data))
//         .catch(err => console.log(err))
//     }, [])
//     return (
//         <div>
//             <ul>
//                 {
//                     posts.map(post => <li key={post.id}>{post.title}</li>)
//                 }
//             </ul>
//         </div>
//     )
// }

// export default DataFetching



// ================================Individual post

// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function DataFetching() {

//     const [post, setPost] = useState({})
//     const [id, setId] = useState(1)

//     useEffect(()=> {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(res => setPost(res.data))
//         .catch(err => console.log(err))
//     }, [id])
//     return (
//         <div>
//             <input type="text" value={id} onChange={e => setId(e.target.value)}/>
//     <h3>{post.id} {post.title}</h3>
//         </div>
//     )
// }

// export default DataFetching


// --trigger the event on button click

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.log(err))
    }, [idFromButtonClick])

    
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleClick}>Fetch post</button>
    <h3>{post.id} {post.title}</h3>
        </div>
    )
}

export default DataFetching