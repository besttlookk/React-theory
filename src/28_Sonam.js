import React, { Component } from 'react'
import Army from './29_withArm'

 class Sonam  extends Component {
  
    render() {
        return (
            <div>
                <h2>Camp: {this.props.camp}</h2>

                <h3 onMouseOver={this.props.hochandleGunshots}>Sonam {this.props.hocgunname} Gunshots: {this.props.hocgunshots}</h3>
            </div>
        )
    }
}

export default Army(Sonam, 20)