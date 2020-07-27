// import React, { Component } from 'react'

// export default class User extends Component {
//     render() {
//         return <h2 className={this.props.rang}>Hello User</h2>
           
//     }
// }



import React, { Component } from 'react'
import Styles from './user.module.css'

export default class User extends Component {
    render() {
        return <h2 className={Styles.txt}>Hello User</h2>
           
    }
}