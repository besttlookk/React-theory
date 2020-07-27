// Create HOC

import React from 'react'

const UpdateComponent = (OriginalComponent) => {

    //create new component
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }
        render(){
            return <OriginalComponent count={this.state.count} incrementCount ={this.incrementCount}/>
        }
    }

    return NewComponent
}

export default UpdateComponent

// naming convension: UpdateComponent => withCounter[on the basis of file name or added functionality]
//                    OriginalComponent => WrappedComponent
                    // NewComponent => withCounter


// When wqe create HOC do remember to pass down rest of the props using spread operator