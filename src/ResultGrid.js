import React from 'react';
import ResultCard from './ResultCard';

const ResultGrid = ({events}) => {
    console.log({events});
    return (
        <div className="center">
            <h2 className="py-4">Or how about one of these?</h2>
            <div className="flex flex-wrap justify-around">
                {events && events.map((event, index) => {
                    return (
                        <ResultCard event={event} />
                    )
                })}
            </div>
        </div>
    )
}

export default ResultGrid;
