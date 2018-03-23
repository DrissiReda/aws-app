// @flow
export const OPEN_SIGN_IN = 'OPEN_SIGN_IN'
export const CLOSE_SIGN_IN = 'CLOSE_SIGN_IN'
export const TOGGLE_SIGN_IN = 'TOGGLE_SIGN_IN'

export const toggleSignIn = (toggle: ?boolean): Object => {
  switch (toggle) {
    case true:
      return {type: OPEN_SIGN_IN}
    case false:
      return {type: CLOSE_SIGN_IN}
    default:
      return {type: TOGGLE_SIGN_IN}
  }
}
