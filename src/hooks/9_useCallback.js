// --used for performace optimization

import React from 'react'
import ParentComponent from './components/paraentComponent'

function App() {
	return (
		<div className="App">
			<ParentComponent />
		</div>
	)
}

export default App


// a new function is created each time the parentComponnet re-renders. 
//when dealing with function we always have to consider reference euqlity. 
// event tho two function have exact same behaviour , it doesnot mean they are equal
// so the function before the re-render and after are different.
// and sinve function is a prop ...react.memo sees that props has changed and will not prevent the re-render




// useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed

//It is useful when 'passing  callbacks' to optimized 'child components' that rely on reference equality to prevent unneccessary renders