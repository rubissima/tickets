import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  let params = useParams();

  const [eventId, setEventId] = useState('vvG1fZ95XCT70D');
  const [eventDetails, setEventDetails] = useState(undefined);

  useEffect(() => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=GBChOj9W932J4InIgxbN1SA53t2aV8Nu`)
    .then((response) => response.json())
    .then((data) => {
       //const eventsArr = data?._embedded?.events;
       setEventDetails(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [eventId])
  console.log({eventDetails});

  return (
    <div>
      <h1>{params.eventId}</h1>
      <p>{eventDetails.name}</p>
    </div>
  )
}

export default EventDetail;
