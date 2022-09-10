import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const params = useParams();
  const eventId = params.eventId;
  const [eventDetails, setEventDetails] = useState(undefined);

  useEffect(() => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=GBChOj9W932J4InIgxbN1SA53t2aV8Nu`)
    .then((response) => response.json())
    .then((data) => {
       setEventDetails(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [eventId])
  console.log({eventDetails});

  return (
    <div>
      { eventDetails &&
        <div>
          <p>{eventDetails.name}</p>
        </div>
      }
    </div>
  )
}

export default EventDetail;
