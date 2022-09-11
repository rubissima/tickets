import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ResultCard = ({event}) => {
    const eventId = event.id;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img className="object-fill" src={event.images[0].url} alt={event.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event._embedded.venues[0].name}</p>
                <p>{moment(event.dates.start.dateTime).format("dddd, MMM DD, YYYY [at] h:mm a")}</p>
                <div className="card-actions justify-end">
                <Link
                    to={`/tickets/${eventId}`}
                >
                    <button className="btn btn-secondary">Check it out</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default ResultCard;
