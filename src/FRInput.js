import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input typr='text' />
//         </div>
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input typr='text' ref={ref}/>
        </div>
            )
}) 

export default FRInput
