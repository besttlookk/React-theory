// ===========================get request==================================
// import React, { Component } from 'react'
// import axios from 'axios';


// export default class PostList extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             posts: [],
//             errorMsg: ''
//         }
//     }

//     componentDidMount(){
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(res => this.setState({posts: res.data}))
//             .catch(err => this.setState({errorMsg: 'Error retreving data'}))
//     }
//     render() {
//         const {posts, errorMsg} = this.state
//         return (
//             <div>
//                 List of Posts
//                 {
//                     posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null

//                 }{
//                     errorMsg? <div>{errorMsg}</div> : null
//                 }
//             </div>
//         )
//     }
// }




// =======================post

import React, { Component } from 'react'
import axios from 'axios';


export default class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})

    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
    }

    componentDidMount(){
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    render() {
        const {userId, title, body} = this.state
        return (
            <div>
               <form onSubmit= {this.submitHandler}>
                   <div>
                       <input type='text' name='userId' value={userId} onChange={this.changeHandler}/>
                   </div>
                   <div>
                       <input type='text' name='title' value={title}  onChange={this.changeHandler}/>
                   </div>
                   <div>
                       <input type='text' name='body' value={body} onChange={this.changeHandler}/>
                   </div>
                   <button type='submit'>Submit</button>
               </form>
            </div>
        )
    }
}
