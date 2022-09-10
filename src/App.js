import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import ResultGrid from './components/ResultGrid';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSeachQuery] = useState("");
  const [slug, setSlug] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [resultsHeading, setResultsHeading] = useState('Or how about one of these?');
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${slug}&apikey=GBChOj9W932J4InIgxbN1SA53t2aV8Nu`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Check if data object exists and make array
       const eventsArr = data?._embedded?.events;
       const totalEvents = data?.page?.totalElements;
       console.log(totalEvents);
       totalEvents > 0 ? 
        setEvents(eventsArr)
      : setIsEmpty(true);

      setIsLoading(false);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [slug])
  console.log(isEmpty);
  // Pass input to keyword parameter
  const handleSubmit = () => {
    setSlug(searchQuery);
    setResultsHeading(`Here's what we found for ${searchQuery}:`);
  }

  return (
    <div className="App">
      <Header />
      <h2 className="text-xl">Find something to do</h2>
      <SearchBar searchQuery={searchQuery} setSeachQuery={setSeachQuery}/>
      <button onClick={handleSubmit} className="btn">Search</button>
      {isEmpty &&
        <div className="flex justify-center p-4">
          <p>Sorry, couldn't find any events that match your search. Try another search, maybe?</p>
        </div>
      }
      {isLoading &&
        <Loading />
      }
      {!isLoading && !isEmpty &&
        <ResultGrid events={events} resultsHeading={resultsHeading}/>
      }

    </div>
  );
}

export default App;
