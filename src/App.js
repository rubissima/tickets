import React, { useEffect, useState } from 'react';
import Header from './Header'
import SearchBar from './SearchBar';
import ResultGrid from './ResultGrid';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSeachQuery] = useState(undefined);
  const [slug, setSlug] = useState(undefined);
  const [resultsHeading, setResultsHeading] = useState('Or how about one of these?');

  useEffect(() => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${slug}&apikey=GBChOj9W932J4InIgxbN1SA53t2aV8Nu`)
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
  }, [slug])

  const handleSubmit = () => {
    setSlug(searchQuery);
    setResultsHeading(`Here's what we found for ${searchQuery}:`);
  }

  return (
    <div className="App p-8">
      <Header />
      <h2>Find something to do</h2>
      <SearchBar searchQuery={searchQuery} setSeachQuery={setSeachQuery}/>
      <button onClick={handleSubmit} className="btn">Search</button>
      <ResultGrid events={events} resultsHeading={resultsHeading} />
    </div>
  );
}

export default App;
