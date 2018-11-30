import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Index from './components/layout/index'
import Event from './components/layout/eventPage'

import './App.css'

import { Provider } from './context'

export default class App extends Component {
  render () {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/events/event/:id' component={Event} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
