import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'
import aurajoki from '../../images/aurajoki.jpg'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

class Search extends Component {
  state = {
    eventTitle: '',
    eventDate: moment()
  }

  findEvent = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.turku.fi/linkedevents/v1/search/?type=event&q=${this.state.eventTitle}`
      )
      .then(res => {
        if (res.data.data.length !== 0) {
          dispatch({
          type: 'SEARCH_EVENTS',
          payload: res.data.data
        })
      } else if (res.data.data.length === 0) {
          dispatch({
          type: 'SEARCH_EVENTS',
          payload: res.data.data.length
        })
      }

      this.setState({ eventTitle: '', eventDate: '' });
      })
      .catch(err => console.log(err));
  }

  onTitleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDateChange = date => {
    this.setState({ eventDate: date})
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <img className="card-img" src={aurajoki} alt="aurajoki" height='400' />
              <div className="card-img-overlay">
                <h1 className="display-2 text-center mt-5 my-3 text-white">
                  Turku Events
                </h1>
                <form
                  className="form-inline justify-content-center mx-5 px-5" 
                  onSubmit={this.findEvent.bind(this, dispatch)}
                >
                    <DatePicker
                    className="form-control form-control-lg mr-3"
                    selected={this.state.eventDate}
                    onSelect={this.onDateChange}
                    dateFormat='YYYY-MM-DD'
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg flex-grow-1 mr-3"
                      placeholder="Hakusana"
                      name="eventTitle"
                      value={this.state.eventTitle}
                      onChange={this.onTitleChange}
                    />
                  <button
                    className="btn btn-danger btn-lg px-5"
                    type="submit"
                  >
                    Haku
                  </button>
                </form>
            </div>
              </div>
              
          )
        }}
      </Consumer>
    )
  }
}

export default Search