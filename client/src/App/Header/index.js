// @flow
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleDrawer, toggleUserMenu } from './actions'
import AppBar from './AppBar/index'
import Drawer from './Drawer/index'
import UserMenu from './UserMenu/index'

const mapStateToProps = state => ({
  isDrawerOpen: state.header.drawer.isOpen,
  isUserMenuOpen: state.header.userMenu.isOpen
})

const mapDispatchToProps = dispatch => ({
  toggleDrawer: (toggle: ?boolean) => dispatch(toggleDrawer(toggle)),
  toggleUserMenu: (toggle: ?boolean) => dispatch(toggleUserMenu(toggle))
})

type Props = {
  title: string,
  isDrawerOpen: boolean,
  toggleDrawer: Function,
  isUserMenuOpen: boolean,
  toggleUserMenu: Function
}

export default connect(mapStateToProps, mapDispatchToProps)(
  (props: Props) => (<Fragment>
    <AppBar toggleDrawer={props.toggleDrawer} toggleUserMenu={props.toggleUserMenu} title={props.title} />
    <Drawer open={props.isDrawerOpen} handleClose={() => props.toggleDrawer(false)} />
    <UserMenu open={props.isUserMenuOpen} handleClose={() => props.toggleUserMenu(false)} />
  </Fragment>)
)
