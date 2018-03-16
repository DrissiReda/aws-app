// @flow
import { CLOSE_DRAWER, CLOSE_USER_MENU, OPEN_DRAWER, OPEN_USER_MENU } from './constants'

export const openDrawer = (): Object => ({type: OPEN_DRAWER})

export const closeDrawer = (): Object => ({type: CLOSE_DRAWER})

export const openUserMenu = (): Object => ({type: OPEN_USER_MENU})

export const closeUserMenu = (): Object => ({type: CLOSE_USER_MENU})
