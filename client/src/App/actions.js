// @flow
import { OPEN_DRAWER, CLOSE_DRAWER } from './constants'

export const openDrawer = (): Object => ({type: OPEN_DRAWER})

export const closeDrawer = (): Object => ({type: CLOSE_DRAWER})
