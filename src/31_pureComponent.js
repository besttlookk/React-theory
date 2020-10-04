// rpce  = snnipets for pure component
import React, { PureComponent } from 'react'

// second way to create class component by extending to PureComponent
class PureComp extends PureComponent {
    render() {
        console.log('Pure Component')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
