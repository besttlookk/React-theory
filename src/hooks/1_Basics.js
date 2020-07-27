/*
React allows us to use React features without having to write a class

// ====================Why use hooks=========================
Reason set 1:
    1. To use class we need to understand 'this' keywords in js. 
    2. Sometimes we have to bind event handlers in class components. 
    3. classes dont minify very well and make hot reloading very unreliable. 

Reason set 2: 
    1. There is no particular way to reuse stateful component logic. 
    2. HOC and render props pattern do address this prob but it makes the code harder to follow

Reason set 3:
    1. Create components for complex scenarios such as data fetching and subscribing to events. 
    2. Realted code is not organised in one place. 
        ex: data fetching: componentDidMount + componentDidUpdate
            event listeners: componentDidMount + componentWillUnmount

    3. because of stateful logic- connot break components into smalller ones


// ===================Rules of react=============================
"Only call Hooks at the Top level":
    dont call hooks inside loops, conditions or nested functions. 


"only call Hooks from React Function"
    call them from within React Functional component and not just any regular js function
    

*/