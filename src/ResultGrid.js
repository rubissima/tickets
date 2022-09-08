import React from 'react';
import ResultCard from './ResultCard';

const ResultGrid = ({events}) => {
    console.log({events});
    return (
        <div className="py-4">
            <h2>How about one of these?</h2>
            {events && events.map((event, index) => {
                return (
                    <ResultCard event={event} />
                )
            })}
        </div>
    )
}

export default ResultGrid;
