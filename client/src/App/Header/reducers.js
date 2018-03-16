// @flow
import { CLOSE_DRAWER, OPEN_DRAWER } from './constants'

export const drawer = (state: Object = {isOpen: false}, action: Object) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}
