import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import moment from 'moment';
import Loading from './components/Loading'

const EventDetail = () => {
  const params = useParams();
  const eventId = params.eventId;
  const [eventDetails, setEventDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Fetch data using event ID passed from ResultCard
    fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?&apikey=GBChOj9W932J4InIgxbN1SA53t2aV8Nu`)
    .then((response) => response.json())
    .then((data) => {
      setEventDetails(data);
      setIsLoading(false);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [eventId])

  return (
    <div>
      <Header />
      { isLoading &&
        <Loading />
      }
      { eventDetails &&
        <div>
          <div className="hero min-h-screen bg-base-200 align-top">
            <div className="hero-content flex-col desktop:flex-row-reverse w-full justify-between">
              <img src={eventDetails?.images[1]?.url} className="max-w-lg rounded-lg shadow-2xl" alt="{eventDetails.name}" />
              <div>
                <h1 className="text-5xl font-bold">{eventDetails?.name} at {eventDetails?._embedded?.venues[0]?.name}</h1>
                <p className="pt-4 font-bold">{moment(eventDetails?.dates?.start?.dateTime).format("dddd, MMM DD, YYYY [at] h:mm a")}</p>
                <p className="p-1">{eventDetails?._embedded?.venues[0]?.address?.line1}, {eventDetails?._embedded?.venues[0]?.city?.name}, {eventDetails?._embedded?.venues[0]?.state?.stateCode}</p>
                <p className="pt-1 pb-4"><a className="underline" href={eventDetails?._embedded?.venues[0]?.url}>{eventDetails?._embedded?.venues[0]?.name}</a></p>
                { eventDetails.priceRanges[0] && 
                  <p className="pt-1 pb-4">Price range: {(eventDetails?.priceRanges[0]?.min).toFixed(2)} - {(eventDetails?.priceRanges[0]?.max).toFixed(2)} {eventDetails?.priceRanges[0]?.currency}</p>
                }
                <a href={eventDetails?._embedded?.venues[0]?.url}>
                  <button className="btn btn-primary">Take my money!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default EventDetail;
