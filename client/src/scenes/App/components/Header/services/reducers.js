// @flow
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

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
