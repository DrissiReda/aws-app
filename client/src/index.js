// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker'
import App from './App/index'
import * as reducers from './App/reducers'
import './index.css'

const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

WebFont.load({
  google: {
    families: ['Roboto:300,400,500']
  }
})

// $FlowFixMe: document.getElementById('root') should never return null
ReactDOM.render((<Provider store={store}><Router><App /></Router></Provider>), document.getElementById('root'))
registerServiceWorker()
