/*
Error boundries are React component that catch javascript errors anywhere in their child component tree, log those error, and display a fallback UI instead of the component tree that crashed. 

Error boundries catch errors during renderning, in lifecycle methods, and in constructors of the whole tree below thm. 

A class component becomes an error boundry if it defines either(or both) of the lifecycle methods "static getDerivedStateFromError()" or "componentDidCatch()"

Error boundries do not catch errors for:
    1. Event handlers
    2. Asynchronous Code. 
    3. server side rendering
    4. Error thrown in the error boundry itself (rather than its children)


//------------------------------static getDerivedStateFromError()
This lifecycle method is invoked after an error has been thrown by a decendant component. It receives the error that was thrown as a parameter and should return a value to update state. 

Use this to render a fallback UI after an error has been thrown.

syntax: static getDerivedStateFromError(error){}



//-------------------------componentDidCatch()
This lifecycle method is invoked after an error has been thrown by descendent component. 

Use this to log error info. 

syntax:
componentDidCatch(error, info) {}

error: the error that was thrown 

info: an object with a componentStack key containing informatopn about which component threw the error.  
*/


import React, { Component } from 'react'
import work from './work.jpg'
import work2 from './work2.jpg'
import Image from './15_Image'
import Error from './16_Error'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* ese ager ek me v error hua to kuch nahi show hoga */}
                <Error>
                <Image balike={work} /> <br />
                </Error>
                <Error>
                <Image balike={work2} /> <br />
                </Error>
                <Error>
                <Image balike='noImage' /> <br />  
                </Error>

                
              
            </div>
        )
    }
}





