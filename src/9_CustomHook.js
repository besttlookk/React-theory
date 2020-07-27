//A custom hooks is basically a JS function whose name statrs with "use"
// a custom hook can also  call other hooks if required. 
// Why?  Share logic: alternate to HOCs and render props

import {useState} from 'react'

function useCustomCounter(){

    const [count, setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count + 1);
    }
    return {
        count,
        handleIncrement
    }
}

export default useCustomCounter