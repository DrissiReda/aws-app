// @flow
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { closeDrawer, openDrawer } from './actions'
import AppBar from './AppBar/index'
import Drawer from './Drawer/index'

const mapStateToProps = state => ({isDrawerOpen: state.drawer.isOpen})

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer())
})

type Props = {
  isDrawerOpen: boolean,
  openDrawer: Function,
  closeDrawer: Function
}

export default connect(mapStateToProps, mapDispatchToProps)(
  (props: Props) => (<Fragment>
    <AppBar openDrawer={props.openDrawer} title='TITLE' />
    <Drawer isOpen={props.isDrawerOpen} close={props.closeDrawer} />
  </Fragment>)
)
