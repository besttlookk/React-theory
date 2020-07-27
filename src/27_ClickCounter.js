//Without HOC

// import React, { Component } from 'react'

// export default class ClickCounter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }

//     incrementCount = () => {
//         this.setState(prevState => {
//             return {count: prevState.count + 1}
//         })
//     }
    
//     render() {
//         const {count} = this.state
//     return <button onClick={this.incrementCount}>Clicked {count} times</button>
//     }
// }



// --------with HOC

import React, { Component } from 'react'
import UpdateComponent from './29_withCounter'

class ClickCounter extends Component {

    
    render() {
        const {count, incrementCount} = this.props 
    return <button onClick={incrementCount}>  Clicked {count} times</button>
    }
}


export default UpdateComponent(ClickCounter)