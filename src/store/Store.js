import React from 'react'
import { appReducer, initialStateApp } from './reducers/app_reducer'

export const Context = React.createContext()

export const Store = (props) => {
  const [app, dispatch] = React.useReducer(
    appReducer,
    initialStateApp,
    undefined
  )
  return (
    <Context.Provider value={{ app, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}
