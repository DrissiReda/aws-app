// @flow
import {
  CLOSE_DRAWER,
  CLOSE_USER_MENU,
  OPEN_DRAWER,
  OPEN_USER_MENU,
  TOGGLE_DRAWER,
  TOGGLE_USER_MENU
} from './constants'

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
    case TOGGLE_DRAWER:
      return {
        ...state,
        isOpen: !state.isOpen
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
    case TOGGLE_USER_MENU:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}
