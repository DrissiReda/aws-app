// @flow
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import CssBaseline from 'material-ui/CssBaseline'
import Header from './components/Header/index'
import Home from './components/Home/index'
import Settings from './components/Settings/index'

// Page title & headerTitle should probably be managed using Redux ?
const HomePage = () => (<Fragment>
  <Helmet>
    <title>AWS – Home</title>
  </Helmet>
  <Header title='AWS – Home' />
  <Home />
</Fragment>)

const SettingsPage = () => (<Fragment>
  <Helmet>
    <title>AWS – Settings</title>
  </Helmet>
  <Header title='AWS – Settings' />
  <Settings />
</Fragment>)

export default () => (<Fragment>
  <CssBaseline />
  <Switch>
    <Route exact path='/' render={HomePage} />
    <Route path='/settings' render={SettingsPage} />
  </Switch>
</Fragment>)
