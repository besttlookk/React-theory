/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- using babel to help writting modern javascript code -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>  
    <!-- <script src='babel.js'></script> -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <!-- <script  src="react.js"></script> -->
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <!-- <script  src="reactDOM.js"></script> -->
    <title>Document</title>
</head>
<body>
    <!-- Requiremnts -->
    <!-- 
        1. NPM :js package manager
        2. webpack: 
        3. Babel
     -->
     
     <div id="root"></div>
     <script type = 'text/babel'>
        // ------------------------Without using Requiremnts
        //  class App extends React.Component{
        //     //  render(){
        //     //      return (React.createElement('div', null, 'Hello World'));
        //     //  }
        //      render(){
        //          return (React.createElement('div', null, React.createElement('h1','null', 'Hello React')));
        //      }
        //  }
        //  ReactDOM.render(
        //      React.createElement(App, null), document.getElementById('root')
        //  )

        // --------------- with using requiremnets------------------
         class App extends React.Component{
            render(){
                 return (
                    <div>
                    <h1> Hello react </h1>
                 </div>
                 );
                 
             }
         }
         ReactDOM.render(<App/>, document.getElementById('root'));

     </script>
</body>
</html>
*/

/* 
------------------------How does React Work?
React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

React only changes what needs to be changed!

React finds out what changes have been made, and changes only what needs to be changed.





*/