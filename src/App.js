import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://app.ticketmaster.com/discovery/v1/events.json?_limit=10')
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setPosts(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
