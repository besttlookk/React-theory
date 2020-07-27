import React from 'react'

export const MyContext = React.createContext();// we can also pass default value incase there is no provider above it
export const Provider = MyContext.Provider;
export const Consumer = MyContext.Consumer;  //not necessary for contextType