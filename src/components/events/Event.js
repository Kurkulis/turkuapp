import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/placeholder.jpg'
import moment from 'moment'

const Event = props => {
  const { event } = props
  let eventImage
  let eventDate = moment(event.start_time).format('llll')

  if (event.images.length !== 0) {
    eventImage = <img src={event.images[0].url} alt='event' width='300px' height='150px' />
  } else {
    eventImage = <img src={image} alt='placeholder' width='300px' height='150px' />
  }

  return (
    <div className='col-md-4'>
      <div className='card mb-4 shadow-sm'>
        <div className='card-body'>
          {eventImage}
          <h5>{event.name.fi}</h5>
          <p>{eventDate}</p>
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
