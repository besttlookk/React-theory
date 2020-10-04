/* 
in class componet : updating the document to the current counter value

    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `You clicked ${this.state.count} times`
    }
    //same piece of code in different lifecycle method .
    // and code of same fucntion is writhen in differnt method



in class component: timer
        componentDidMount(){
            this.interval = setInterval(this.tick, 1000)
        }

        componentWillUnmount(){
            clearInterval(this.interval)
        }

        again code of same work wriiten in differnt fucntion

in class component: conbine the two side effects

        componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
        this.interval = setInterval(this.tick, 1000)

    }
    componentDidUpdate(){
        document.title = `You clicked ${this.state.count} times`
    }
    componentWillUnmount(){
            clearInterval(this.interval)
        }


// The Effect Hook lets us perform side effects in functional components

//It is close replacement for 'componentDidMount', 'componentDidUpdate' and 'componentWillUnmount

// three life-cycle method handle by the useEffect hook

*/


// ======================useEffect after render =====================================

//--How it would be written in class component
// import React, { Component } from 'react'

// export default class ClassCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }

//     componentDidMount(){
//         document.title = `You clicked ${this.state.count} times`
//     }
//     componentDidUpdate(prevProps, prevState){
//         document.title = `You clicked ${this.state.count} times`
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={()=> this.setState({count: this.state.count + 1})}>Click {this.state.count}</button>
//             </div>
//         )
//     }
// }


// lets replace the functioanily with functional event(replace componentDidMount and componentDidUpdate with useEffect)

// import React, {useState, useEffect} from 'react'

// function HookCounter() {

    
//     const [count, setCount] = useState(0)   

//     // useEffect recievs function as an parameter which gets executed after every render of the component
//     // useEffect runs after every render of the component
//     useEffect(()=> {
//         document.title = `You clicked ${count} times`


//     })
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>Count {count}</button>  
//         </div>
//     )
// }

// export default HookCounter


// ==============================Conditionally run effects ============================
// in last example we saw 'useEffect' runs after every render
// but it may cause performance issue
//lets first see the class component implementation


// import React, { Component } from 'react'

// export default class ClassCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0,
//              name: ''
//         }
//     }

//     componentDidMount(){
//         document.title = `You clicked ${this.state.count} times`
//     }
//     componentDidUpdate(prevProps, prevState){
//         if(prevState.count !== this.state.count){
//             console.log('Updating document title')  // without condition these code was updated even when button was not clicked. 

//             document.title = `You clicked ${this.state.count} times`
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.name} onChange={e => {
//                     this.setState({name: e.target.value})
//                 }}/>
//                 <button onClick={()=> this.setState({count: this.state.count + 1})}>Click {this.state.count}</button>
//             </div>
//         )
//     }
// }


// implement same this using functional component and useEffect hook

// import React, {useState, useEffect} from 'react'

// function HookCounter() {


    
//     const [count, setCount] = useState(0)   
//     const [name, setName] = useState('')

//     // how can we tell react to conditionally run useEffect only when the count value changes
//     // this is so common that react team that the react team decided to include it in useEffect
//     // for condtionally executing an effect we passin second parameter. this paramter is an array we need to specify either props or state we need to watch for
//     // only those props or state espesify in this array were change the effect would be executed
//     useEffect(()=> {
//         console.log('useEffect- updating document title')
//         document.title = `You clicked ${count} times`


//     }, [count])
//     return (
//         <div>
//             <input type="text" value={name} onChange={e => {
//                     setName({name: e.target.value})
//                 }}/>
//             <button onClick={() => setCount(count + 1)}>Count {count}</button>  
//         </div>
//     )
// }

// export default HookCounter


// ================================Run effects only once[mimic componentDidMount]=======================

// import React, { Component } from 'react'

// export default class classMouse extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              x: 0,
//              y: 0
//         }
//     }

//     logMousePosition = e => {
//         this.setState({x: e.clientX, y: e.clientY})
//     }

        // set up event lister once
//     // it ran only once as expected
//     componentDidMount(){
//         console.log('eventlinster mounted')
//         window.addEventListener('mouseover', this.logMousePosition)
//     }

        // componentWillUnmount(){
        //     window.removeEventListener('mouseover', this.logMousePosition)
        // }
    


//     render() {
//         return (
//             <div>
//                 x - {this.state.x} Y-{this.state.y}
//             </div>
//         )
//     } 
// }

// ----------same with useEffect

// import React, {useState, useEffect} from 'react'

// function HookMouse() {

//     const [x, setX] = useState(0)
//     const [y, setY] = useState(0)

//     const logMousePosition = e =>{
//         console.log('Mouse event')
//         setX(e.clientX)
//         setY(e.clientY)
//     }

//     // since useEffect runs after every render..even tho we want to add eventListenr once it is added after every render..which we dont want. 
//     //to acchive that we simple pass empty array as second argument
//     //we simple telling react that this use Effect doesnot depend on any props or state, so there si no reason for you to call this fun on re-render
//     // this way we mimiced componentDidMount
//     useEffect(()=>{
//         console.log('UseEffect called')
//         window.addEventListener('mouseover', logMousePosition)

//     }, [])
//     return (
//         <div>
//              x - {x} Y-{y}
//         </div>
//     )
// }

// export default HookMouse


// ==============================useEffect with cleanUp[mimic componentWillUnmount]


// import React, {useState, useEffect} from 'react'

// function HookMouse() {

//     const [x, setX] = useState(0)
//     const [y, setY] = useState(0)

//     const logMousePosition = e =>{
//         console.log('Mouse event')
//         setX(e.clientX)
//         setY(e.clientY)
//     }

//     //to mimic 'componentWillUnmount' functionaily , the function which is passed to the useEffect can return a function which will be executed 
//     //when the component is unmount
//     useEffect(()=>{
//         console.log('UseEffect called')
//         window.addEventListener('mouseover', logMousePosition)

//         return () => {
//             console.log('Component unmounting code');
//         window.removeEventListener('mouseover', logMousePosition)

//         }

//     }, [])
//     return (
//         <div>
//              x - {x} Y-{y}
//         </div>
//     )
// }

// function MouseContainer() {

//     const [display, setDisplay] = useState(true)
//     return (
//         <div>
//             <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
//             {/* when we unmount the <HookMouse> component we still has eventListner which gave error.... cant have eventLister for unmounted compnent */}
//             {/* with class component it was simple .. we had componentWillUnmount life cycle method */}
//             {display && <HookMouse />} 
//         </div>
//     )
// }

// export default MouseContainer


// ====================================useEffect with incorrect depedency =======================================

// import React, { Component } from 'react'

// export default class InterValClassCounter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }

//     componentDidMount(){
//         this.interval = setInterval(this.tick, 1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }

//     tick = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//             </div>
//         )
//     }
// }


// ---same with functional components and hooks

import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount]  = useState(0)

    const tick = () =>{
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count]) // even tho we have count as our dependency ..we missed to put it ..be careful when we put empty arry 
    // it can also be done using setCount...
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
