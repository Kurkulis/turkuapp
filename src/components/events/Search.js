import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class Search extends Component {
  state = {
    eventTitle: '',
    eventDate: ''
  }

  findEvent = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.turku.fi/linkedevents/v1/search/?type=event&q=${this.state.eventTitle}`
      )
      .then(res => {
        // console.log(res.data.data);
        dispatch({
          type: 'SEARCH_EVENTS',
          payload: res.data.data
        });

        this.setState({ eventTitle: '', eventDate: '' });
      })
      .catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                Turku Events
              </h1>
              <form
                className="form-inline justify-content-center" 
                onSubmit={this.findEvent.bind(this, dispatch)}
              >
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Päivämäärä"
                    name="eventDate"
                    value={this.state.eventDate}
                    onChange={this.onChange}
                  />
                  <input
                    type="text"
                    className="form-control form-control-lg flex-grow-1"
                    placeholder="Hakusana"
                    name="eventTitle"
                    value={this.state.eventTitle}
                    onChange={this.onChange}
                  />
                <button
                  className="btn btn-danger btn-lg"
                  type="submit"
                >
                  Haku
                </button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search