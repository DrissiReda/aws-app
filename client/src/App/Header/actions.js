// @flow
import {
  CLOSE_DRAWER,
  CLOSE_USER_MENU,
  OPEN_DRAWER,
  OPEN_USER_MENU,
  TOGGLE_DRAWER,
  TOGGLE_USER_MENU
} from './constants'

export const toggleDrawer = (toggle: ?boolean): Object => {
  switch (toggle) {
    case true:
      return {type: OPEN_DRAWER}
    case false:
      return {type: CLOSE_DRAWER}
    default:
      return {type: TOGGLE_DRAWER}
  }
}

export const toggleUserMenu = (toggle: ?boolean): Object => {
  switch (toggle) {
    case true:
      return {type: OPEN_USER_MENU}
    case false:
      return {type: CLOSE_USER_MENU}
    default:
      return {type: TOGGLE_USER_MENU}
  }
}
