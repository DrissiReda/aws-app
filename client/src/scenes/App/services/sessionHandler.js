// @flow
import axios from 'axios'

export function initSession (email: string, password: string, onSuccessCallback: Function, onErrorCallback: Function) {
  axios.post('/signin', {
    email: email,
    password: password
  }).then((response) => {
    onSuccessCallback(response)
  }).catch((error) => {
    onErrorCallback(error)
  })
}
