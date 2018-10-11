import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Event extends Component {
  constructor (props) {
    super(props)
    this.state = { name: '' }
  }

  componentDidMount () {
    axios
      .get(
        `https://api.turku.fi/linkedevents/v1/event/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({ name: res.data.name.fi })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <React.Fragment>
        <Link to='/' className='btn btn-danger btn-sm my-4'>
            Takaisin
        </Link>
        <h1>{this.state.name}</h1>
      </React.Fragment>
    )
  }
}
