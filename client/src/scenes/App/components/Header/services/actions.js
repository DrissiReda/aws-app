// @flow
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

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
