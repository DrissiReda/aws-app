// @flow
export const OPEN_SIGN_IN = 'OPEN_SIGN_IN'
export const CLOSE_SIGN_IN = 'CLOSE_SIGN_IN'
export const TOGGLE_SIGN_IN = 'TOGGLE_SIGN_IN'

export const dialog = (state: Object = {isOpen: false}, action: Object) => {
  switch (action.type) {
    case OPEN_SIGN_IN:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_SIGN_IN:
      return {
        ...state,
        isOpen: false
      }
    case TOGGLE_SIGN_IN:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}
