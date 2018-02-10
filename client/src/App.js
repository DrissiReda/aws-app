// @flow
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/index'
import Home from './scenes/Home/index'
import About from './scenes/About/index'
import Topics from './scenes/Topics/index'

const App = () => (<Router>
  <div>
    <Navbar />
    <hr />

    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/topics' component={Topics} />
  </div>
</Router>)

export default App
