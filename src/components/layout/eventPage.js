import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import placeholder from '../../images/placeholder.jpg'

export default class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      image: ''
    }
  }

  componentDidMount () {
    axios
      .get(
        `https://api.turku.fi/linkedevents/v1/event/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({
          name: res.data.name.fi,
          startDate: res.data.start_time,
          endDate: res.data.end_time,
          description: res.data.description,
          image: res.data.images[0]
        })
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render () {
    let startDate = moment(this.state.startDate).format('llll')
    let endDate = moment(this.state.endDate).format('llll')
    let description = this.state.description ? this.state.description.fi : ''
    let image = this.state.image ? this.state.image.url : placeholder

    return (
      <React.Fragment>
        <img src={image} alt='header' className='img-fluid' />
        <div className='col-8'>
          <Link to='/' className='btn btn-danger mb-4 mt-5'>
            Etusivulle
          </Link>
          <h1 className='text-danger mb-3'>{this.state.name}</h1>
          <p className='text-danger mb-3'>{startDate} <strong>-</strong> {endDate}</p>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>

      </React.Fragment>
    )
  }
}
