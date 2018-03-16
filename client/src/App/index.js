// @flow
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import CssBaseline from 'material-ui/CssBaseline'
import Header from './Header/index'
import Home from '../scenes/Home/index'
import About from '../scenes/About/index'
import Topics from '../scenes/Topics/index'

export default () => (<Fragment>
  <CssBaseline />
  <Header />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/topics' component={Topics} />
  </Switch>
</Fragment>)
