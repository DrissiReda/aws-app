// @flow
import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import CssBaseline from 'material-ui/CssBaseline'
import Header from './components/Header/index'
import SceneWrapper from './components/SceneWrapper/index'
import Home from './scenes/Home/index'
import Settings from './scenes/Settings/index'
import SignUp from './scenes/SignUp/index'
import Error from './scenes/404/index'

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

const SignUpPage = () => (<Fragment>
  <Helmet>
    <title>AWS – Sign up</title>
  </Helmet>
  <Header title='AWS – Sign up' />
  <SceneWrapper>
    <SignUp />
  </SceneWrapper>
</Fragment>)

const ErrorPage = () => (<Fragment>
  <Helmet>
    <title>Error 404 (not found)</title>
  </Helmet>
  <Header title='AWS – 404' />
  <SceneWrapper>
    <Error />
  </SceneWrapper>
</Fragment>)

export default () => (<Fragment>
  <CssBaseline />
  <Switch>
    <Route exact path='/' render={HomePage} />
    <Route exact path='/settings' render={SettingsPage} />
    <Route exact path='/signup' render={SignUpPage} />
    <Route exact path='/404' render={ErrorPage} />
    <Redirect to='/404' />
  </Switch>
</Fragment>)
