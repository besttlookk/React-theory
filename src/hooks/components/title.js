  
import React from 'react'

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      useCallback Hook
    </h2>
  )
}


// React.memo is used so that this component is only rendered when its state or props changes
export default React.memo(Title)