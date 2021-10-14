import * as ACTION_TYPES from './action_types'
export const setWorkout = (workout) => {
  return { type: ACTION_TYPES.SET_WORKOUT, payload: workout }
}