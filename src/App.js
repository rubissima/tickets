import React, { useEffect, useState } from 'react';
import Header from './Header'
import SearchBar from './SearchBar';
import ResultGrid from './ResultGrid';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=GBChOj9W932J4InIgxbN1SA53t2aV8Nu')
    .then((response) => response.json())
    .then((data) => {
       //console.log({data});
       const eventsArr = data?._embedded?.events;
       //console.log({eventsArr});
       setEvents(eventsArr);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [])

  return (
    <div className="App p-8">
      <Header />
      <SearchBar />
      <button className="btn">Search</button>
      <ResultGrid events={events} />
    </div>
  );
}

export default App;
