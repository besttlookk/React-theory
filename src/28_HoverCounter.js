// without HOC
// import React, { Component } from 'react'

// export default class HoverCounter extends Component {

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
//     return <h2 onMouseOver={this.incrementCount}>Clicked {count} times</h2>
//     }
// }



// ===============with HOC

import React, { Component } from 'react'
import UpdateComponent from './29_withCounter'

class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props 

    return <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
    }
}


export default UpdateComponent(HoverCounter)


