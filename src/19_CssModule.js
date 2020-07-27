/*
CSS module let us the same CSS class name in different files without worring about naming clashes. 

CSS files in which all the class names and animations are scoped locally by default

CSS Module allows the scoping of CSS by automatically creating a unique classname of the format [filename]\_[classname]\_\_[hash]

syntax: [name].module.css 

ex:
App.module.css

import style from './App.module.css'

<h1 className={style.txt}> Hello</h1>


//-----Import CSS Module and regular CSS
jai.module.css
veeru.css 

import styles from './jai.module.css'
import './veeru.css'

*/

// import React, { Component } from 'react'
// import User from './18_User'
// import Styles from './styling.module.css'


// export default class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <h1 className={Styles.txt}>Hello App</h1>
//                 <User />
//             </React.Fragment>
//         )
//     }
// }



import React, { Component } from 'react'
import User from './18_User'
import Styles from './styling.module.css'
import Styles1 from './user.module.css'


export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className={Styles.txt}>Hello App 1</h1>
                <h1 className={Styles1.txt}>Hello App 2</h1>
            </React.Fragment>
        )
    }
}