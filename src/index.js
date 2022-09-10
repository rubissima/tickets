import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import EventDetail from './EventDetail'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <PageRouter />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/tickets" element={<App />} />
      <Route path="/tickets/:eventId" element={<EventDetail />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
