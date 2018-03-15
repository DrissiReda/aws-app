// @flow
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { closeDrawer, openDrawer } from './actions'
import Reboot from 'material-ui/Reboot'
import AppBar from './AppBar/index'
import Drawer from './Drawer/index'
import Home from '../scenes/Home/index'
import About from '../scenes/About/index'
import Topics from '../scenes/Topics/index'

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

const App = ({isDrawerOpen, openDrawer, closeDrawer}: Props) => (<Fragment>
  <Reboot />
  <AppBar openDrawer={openDrawer} />
  <Drawer isOpen={isDrawerOpen} close={closeDrawer} />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/topics' component={Topics} />
  </Switch>
</Fragment>)

export default connect(mapStateToProps, mapDispatchToProps)(App)
