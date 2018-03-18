// @flow
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import CssBaseline from 'material-ui/CssBaseline'
import Header from './components/Header/index'
import SceneWrapper from './components/SceneWrapper/index'
import Home from './scenes/Home/index'
import Settings from './scenes/Settings/index'

// Page title & headerTitle should probably be managed using Redux ?
const HomePage = () => (<Fragment>
  <Helmet>
    <title>AWS – Home</title>
  </Helmet>
  <Header title='AWS – Home' />
  <SceneWrapper>
    <Home />
  </SceneWrapper>
</Fragment>)

const SettingsPage = () => (<Fragment>
  <Helmet>
    <title>AWS – Settings</title>
  </Helmet>
  <Header title='AWS – Settings' />
  <SceneWrapper>
    <Settings />
  </SceneWrapper>
</Fragment>)

export default () => (<Fragment>
  <CssBaseline />
  <Switch>
    <Route exact path='/' render={HomePage} />
    <Route path='/settings' render={SettingsPage} />
  </Switch>
</Fragment>)
