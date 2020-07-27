//What pureComponent is for class based component, memo isto functional component
import React from 'react'

function MemoComp({name}) {
    console.log('Rendering memoComp')
    return (
        <div>
            {name}
        </div>
    )
}


export default React.memo(MemoComp)  // higher order component