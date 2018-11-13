import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_EVENTS':
      return {
        ...state,
        eventList: action.payload
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    eventList: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {
    axios
      .get(
        `https://api.turku.fi/linkedevents/v1/event/?start=today`
      )
      .then(res => {
        console.log(res)
        this.setState({ eventList: res.data.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
