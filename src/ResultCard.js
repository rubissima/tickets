import React from 'react';
import moment from 'moment';

const ResultCard = ({event}) => {

    console.log(event);
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={event.images[0].url} alt={event.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event._embedded.venues[0].name}</p>
                <p>{moment(event.dates.start.dateTime).format("dddd, MMM DD, YYYY [at] h:mm a")}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard;