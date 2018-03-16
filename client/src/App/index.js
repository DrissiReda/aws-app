// @flow
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import CssBaseline from 'material-ui/CssBaseline'
import Header from './Header/index'
import Home from '../scenes/Home/index'
import About from '../scenes/About/index'
import Topics from '../scenes/Topics/index'

// Page title & headerTitle should probably be managed using Redux ?
const HomePage = () => (<Fragment>
  <Helmet>
    <title>AWS – Home</title>
  </Helmet>
  <Header title='AWS – Home' />
  <Home />
</Fragment>)

const AboutPage = () => (<Fragment>
  <Helmet>
    <title>AWS – About</title>
  </Helmet>
  <Header title='AWS – About' />
  <About />
</Fragment>)

const TopicsPage = (props) => (<Fragment>
  <Helmet>
    <title>AWS – Topics</title>
  </Helmet>
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
