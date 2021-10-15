import * as ACTION_TYPES from '../actions/action_types'

export const initialStateApp = {
    workout: {
      rounds : 8,
      worktime : 40,
      resttime : 20,
    },
}

export const handleActions = {
  [ACTION_TYPES.SET_WORKOUT]: (store, action) => {
    return {
      ...store,
      ...store.app, workout:  action.payload ,
    }
  },  
}

export const appReducer = (store, action) =>
  Boolean(handleActions[action.type])
    ? handleActions[action.type](store, action)
    : store
