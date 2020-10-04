// we do not have pure component in function based component...React.memo is the replacemenr
//What pureComponent is for class based component, memo isto functional component
import React from 'react'

// destructuring the props value as name
function MemoComp({name}) {
    console.log('Rendering memoComp')
    return (
        <div>
            {name}
        </div>
    )
}


export default React.memo(MemoComp)  // React.memo is higher order component