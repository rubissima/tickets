import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import moment from 'moment';

const EventDetail = () => {
  const params = useParams();
  const eventId = params.eventId;
  const [eventDetails, setEventDetails] = useState(undefined);

  useEffect(() => {
    // Fetch data using event ID passed from ResultCard
    fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=GBChOj9W932J4InIgxbN1SA53t2aV8Nu`)
    .then((response) => response.json())
    .then((data) => {
       setEventDetails(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [eventId])

  return (
    <div>
      <Header />
      { eventDetails &&
        <div>
          <div className="hero min-h-screen bg-base-200 align-top">
            <div className="hero-content flex-col desktop:flex-row-reverse">
              <img src={eventDetails.images[1].url} className="max-w-lg rounded-lg shadow-2xl" alt="{eventDetails.name}" />
              <div>
                <h1 className="text-5xl font-bold">{eventDetails.name} at {eventDetails._embedded.venues[0].name}</h1>
                <p className="pt-4 font-bold">{moment(eventDetails.dates.start.dateTime).format("dddd, MMM DD, YYYY [at] h:mm a")}</p>
                <p className="pt-1 pb-4">{eventDetails._embedded.venues[0].address.line1}, {eventDetails._embedded.venues[0].city.name}, {eventDetails._embedded.venues[0].state.stateCode}</p>
                <a href={eventDetails._embedded.venues[0].url}>
                  <button className="btn btn-primary">Take my money!</button>
                </a>
                <div className="collapse">
                  <input type="checkbox" /> 
                  <div className="collapse-title">
                    Venue accessibility info
                  </div>
                  <div className="collapse-content">
                    {eventDetails._embedded.venues[0].ada.adaPhones ??
                      <p className="pb-2">{eventDetails._embedded.venues[0].ada.adaPhones}<br />{eventDetails._embedded.venues[0].ada.adaHours}</p>
                    }
                    <p>{eventDetails._embedded.venues[0].accessibleSeatingDetail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default EventDetail;
