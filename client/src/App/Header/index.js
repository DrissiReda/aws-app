// @flow
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleDrawer } from './actions'
import AppBar from './AppBar/index'
import Drawer from './Drawer/index'

const mapStateToProps = state => ({
  isDrawerOpen: state.header.drawer.isOpen
})

const mapDispatchToProps = dispatch => ({
  toggleDrawer: (toggle: ?boolean) => dispatch(toggleDrawer(toggle))
})

type Props = {
  title: string,
  isDrawerOpen: boolean,
  toggleDrawer: Function
}

export default connect(mapStateToProps, mapDispatchToProps)(
  (props: Props) => (<Fragment>
    <AppBar toggleDrawer={props.toggleDrawer} title={props.title} />
    <Drawer open={props.isDrawerOpen} handleClose={() => props.toggleDrawer(false)} />
  </Fragment>)
)
