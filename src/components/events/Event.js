import React from 'react'
import { Link } from 'react-router-dom'

const Event = props => {
  const { event } = props

  return (
    <div className='col-md-4'>
      <div className='card mb-4 shadow-sm'>
        <div className='card-body'>
          <h5>{event.name.fi}</h5>
          <Link
            to={`events/event/${event.id}`}
            className='btn btn-danger'
          >Näytä tapahtuma
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Event
