
import React, { Component } from 'react'
import PureComp from './31_pureComponent'
import RegComp from './32_regularComponent'
import MemoComp from './33_MemoComponent'

export default class App extends Component {

    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Prabhash"
        }
    }
    
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({
    //             name: "Prabhash"
    //         })
    //     },2000)
    // }
    render() {
        console.log('**************Parent Component****************************')
        return (
            <div>
                Parent Component
                {/* <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/> */}

                < MemoComp name={this.state.name} />
            </div>
        )
    }
}


/*
// ==================Regular component VS Pure Component=================================
A regular component does not implement "shouldComponentUpdate" method. It always return true by default 

//A pure compnent on the other hand implemenets "shouldComponentUpdate' with a "shallow" props and state comparision(===). 

// a (SC) b returns true if a and b reference the same object. 

// a (SC) b returns true if a and b have samne value and are of the same type

//A pure component implements shouldComponentUpdate with a shallow prop and state comparision. 
// re-render only if there is differnce after shallow comparison


*/