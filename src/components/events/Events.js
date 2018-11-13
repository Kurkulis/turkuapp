import React, { Component } from 'react'
import { Consumer } from '../../context'
import Event from '../events/Event'

class Events extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          const { eventList } = value
          // console.log(value)

          if (eventList === undefined || eventList.length === 0) {
            return <h1>Odota...</h1>
          } else if (eventList === 0) {
            return <h1>Ei tuloksia, käytä toista hakutermiä</h1>
          } else {
            return (
              <React.Fragment>
                <h3 className='text-center mb-4'>Events</h3>
                <div className='row'>
                  {eventList.map(item => (
                    <Event key={item.id} event={item} />
                  ))}
                </div>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Events
