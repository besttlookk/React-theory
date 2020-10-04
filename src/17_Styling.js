/*
Inline stylesheet
External StyleSheet
CSS Module
CSS in Js


// -------------------Inline stylesheet
style is most often used in React application to add dynamically-computed styles at render time.

The style attribute accepts a JS object with camelCased properties rather than a CSS string. 
This is consistent with the DOM style JS property, is more effiecient, and prevents XSS security holes. 

CSS classes are generally better for performance than inline styles. 

styles are not autoprefixed. 
Vendor prefixes other than ms should begin with a capital letter . e.g Webkit

ex; const btnStyle ={
    color:'blue', 
    backgroundColor: 'orange'

}
<button style={btnStyle}>Button</button>

to change value: btnStyle.color = 'orange'

*/

// import React, { Component } from 'react'

// export default class App extends Component {

//     render() {
//         const btnStyle ={
//             color: 'blue',
//             backgroundColor: 'orange'
//         }
//         return (
//             <div>
//                 <button style={btnStyle}>Button</button>
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class App extends Component {

//     render() {
//       const txtc = {
//           color: 'blue'
//       }  
//       const txts = {
//           fontSize: '80px'
//       }  
//         return (
//             <div>
//                 {/* using spread operator */}
//                 {/* <h1 style={{...txtc, ...txts}}>Hello App</h1> */}
//                 <h1 style={{...txtc, ...{fontSize: '200px'}}}>Hello App</h1>
//             </div>
//         )
//     }
// }


//============with state

// import React, { Component } from 'react'

// export default class App extends Component {
//     state ={
//         change: false
//     }
//     clickHandle = () =>{
//         this.setState({change:true})
//     }
//     render() {
//         const btnStyle = {
//             color: 'blue',
//             backgroundColor: 'orange'
//         }
//         if(this.state.change){
//             btnStyle.backgroundColor = 'white'
//         }
//         return <button style={btnStyle} onClick={this.clickHandle}>Button</button>
//     }
// }


// =====================External Stylesheet====================
//use className not class

//pass a string as the className prop

// it is common for CSS classes to depend on the component props or state. 

//In producntion, all CSS files will be concatenated into single minifies .css file in the build output

// name conflict prob when dealing with multiple external stylesheet. 
 
// import React, { Component } from 'react'
// import './Styling.css'

// export default class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <h1 className='txtb'>Hello App</h1>
//             </React.Fragment>
//         )
//     }
// }

// =====================conditional CSS==========

// import React, { Component } from 'react'
// import './Styling.css'
// import User from './18_User'

// export default class App extends Component {
//     render() {
//         let style = false
//         return (
//             <React.Fragment>
//               <h1 className='txtb'>Hello App</h1>
//               <User rang={style ? 'txtb': 'txtg'} />
//             </React.Fragment>
//         )
//     }
// }


// ----------------
// import React, { Component } from 'react'
// import './Styling.css'

// export default class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//               <h1 className='txtb txts'>Hello App</h1>
//             </React.Fragment>
//         )
//     }
// }

// ====template litral

// import React, { Component } from 'react'
// import './Styling.css'

// export default class App extends Component {
//     render() {
//         let blue = false
//         let className = blue ? 'txtb' : 'txtg'
//         return (
//             <React.Fragment>
//               <h1 className= {`${className} txts`}>Hello App</h1>
//             </React.Fragment>
//         )
//     }
// }
