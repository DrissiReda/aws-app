// @flow
import { CLOSE_DRAWER, CLOSE_USER_MENU, OPEN_DRAWER, OPEN_USER_MENU } from './constants'

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

export const userMenu = (state: Object = {isOpen: false}, action: Object) => {
  switch (action.type) {
    case OPEN_USER_MENU:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_USER_MENU:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}
