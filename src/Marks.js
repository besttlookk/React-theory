// -----for mounting
// import React, { Component } from 'react'

// export default class Marks extends Component {
//     render() {
//         console.log('Marks-Rendered[child of student]')
//         return (
//             <div>
//                <h1> Marks Component</h1> 
//             </div>
//         )
//     }
// }


// -----for updating

// import React, { Component } from 'react'

// export default class Marks extends Component {
//     // state of student is first made attribute and here we are converting that into makrs state
//     // setState method is <student> ka state change ho raha ..jiske karan marks ka props change ho raha
//     constructor(props){
//         super(props);
//         this.state = {
//             mroll: this.props.roll
//         }
//         console.log('Marks-construtor')  // since props ek baar set hone ke baad constructor fir se run hota nahi. is liye marks ke state me old props ki hi value hai
//     }

//     //props ki value directly update nahi ker sakte uske liye ye method use kerna hoga..to change state value
//     static getDerivedStateFromProps(props, state){
//         console.log("Get derived state ");
//         console.log(props, 'props of marks')
//         console.log(state, 'state of marks')
//         if(props.roll !== state.mroll){  //state.mroll me props ki old value hai
//             return {mroll: props.roll}  // ek baar state ki value change hone ke baad null hi return hoga next click se
            
//         }
//         console.log('return null from getDerivedStateFromProps')
//         return null;
//     }

//     shouldComponentUpdate(nextProps, nextState){
//         if(this.state.mroll < 107){  //after 107  props and state will change but DOM will still SHOW 107/// virtual DOM tak aa raha per update nhi kiya ja raha
//             console.log("Mark-shouldComponent <107")
//             console.log(nextProps, " if-Next props")
//             console.log(nextState, "if-Next state")
//             return true;
//         }
//         console.log(nextProps, " Next props | shoulComponentUpdate: NO")
//         console.log(nextState, "Next state | shoulComponentUpdate: NO")
//         return false;
        
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){ //it is used together with componentDidupdate
//         console.log('Marks- GetSnapshotbeforeUpdate- runs before update');
//         console.log(prevProps, prevState)
//         return 45;
//     }

//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log('Marks- componentdidupdate-it runs after update')
//         console.log(prevProps, prevState, snapshot)

//     }
//     render() {
//         console.log("marks renderes")
//         return (
//             <div>
                
//                 <h1>{this.state.mroll}</h1>
//             </div>
//         )
//     }
// }


// -----for unmount

// import React, { Component } from 'react'

// export default class Marks extends Component {

//     componentDidMount(){
//         console.log('Marks mounted')
//     }

//     componentWillUnmount(){
//         console.log("Marks Unmount")
//     }

//     render() { 
//         console.log('Makrs rendered')
//         return (
//             <div>
//                 Hello marks Component
//             </div>
//         )
//     }
// }


