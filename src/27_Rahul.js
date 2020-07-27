// import React, { Component } from 'react'

// export default class Rahul extends Component {
//     state ={
//         gunshots: 0
//     }

//     handleGunshorts =() =>{
//         this.setState({gunshots: this.state.gunshots + 1})
//     }
//     render() {
//         return (
//             <div>
//                 <h3 onMouseOver={this.handleGunshorts}>Rahul Gunshots: {this.state.gunshots}</h3>
//             </div>
//         )
//     }
// }


// ---------------Using HOC

// import React, { Component } from 'react'
// import Army from './29_withArm'

// class Rahul extends Component {
   
//     render() {
//         return (
//             <div>
//                 <h3 onMouseOver={this.props.hochandleGunshots}>Rahul {this.props.hocgunname} Gunshots: {this.props.hocgunshots}</h3>
//             </div>
//         )
//     }
// }

// export default Army(Rahul)

import React, { Component } from 'react'
import Army from './29_withArm'

class Rahul extends Component {
   
    render() {
        return (
            <div>
                <h2>Camp: {this.props.camp}</h2>
                <h3 onMouseOver={this.props.hochandleGunshots}>Rahul {this.props.hocgunname} Gunshots: {this.props.hocgunshots}</h3>
            </div>
        )
    }
}
// 
export default Army(Rahul, 10)