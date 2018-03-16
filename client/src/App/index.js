// @flow
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import CssBaseline from 'material-ui/CssBaseline'
import Header from './Header/index'
import Home from '../scenes/Home/index'
import About from '../scenes/About/index'
import Topics from '../scenes/Topics/index'

const HomePage = () => (<Fragment>
  <Header title='AWS – Home' />
  <Home />
</Fragment>)

const AboutPage = () => (<Fragment>
  <Header title='AWS – About' />
  <About />
</Fragment>)

const TopicsPage = (props) => (<Fragment>
  <Header title='AWS – Topics' />
  <Topics {...props} />
</Fragment>)

export default () => (<Fragment>
  <CssBaseline />
  <Switch>
    <Route exact path='/' render={HomePage} />
    <Route path='/about' render={AboutPage} />
    <Route path='/topics' render={TopicsPage} />
  </Switch>
</Fragment>)
