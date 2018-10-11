import React, { Component } from 'react'
import { Consumer } from '../../context'
import Event from '../events/Event'

class Events extends Component {
  render () {
    return (
      <Consumer>
        {value => {
          const { eventList } = value

          if (eventList === undefined || eventList.length === 0) {
            return <h1>Waiting for the really slow API...</h1>
          } else {
            return (
              <React.Fragment>
                <h3 className='text-center mb-4'>Events</h3>
                <div className='row'>
                  {eventList.map(item => (
                    <Event key={item.id} event={item.name} />
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
