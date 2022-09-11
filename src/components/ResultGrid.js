import React from 'react';
import ResultCard from './ResultCard';

const ResultGrid = ({events, resultsHeading}) => {
    return (
        <div className="center">
            <h2 className="py-4 text-xl">{resultsHeading}</h2>
            <div className="grid grid-flow-row grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 justify-items-center">
                {events && events.map((event, index) => {
                    return (
                        <ResultCard event={event} key={event.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default ResultGrid;
