// @flow
import { combineReducers } from 'redux'
import * as headerReducers from '../components/Header/services/reducers'
import * as signInReducers from '../components/SignIn/services/reducers'

export const header = combineReducers(headerReducers)
export const signIn = combineReducers(signInReducers)
