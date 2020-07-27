// ---9f statement
import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                 <h1>Hello {this.props.name}</h1>
                <button type="button" onClick={this.props.clickData}>Logout</button>
            </React.Fragment>
        )
    }
}

//
// import React, { Component } from 'react'

// export default class User extends Component {
//     render() {
//         return <h3>Prime Member</h3>
          
//     }
// }
