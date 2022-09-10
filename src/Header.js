import React from 'react';
import logo from './ticket-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <div className="flex gap-x-4">
                <Link to={`/tickets/`}>
                    <img className="h-12" src={logo} alt="Ticket App Logo" />
                </Link>
                <h1 className="text-3xl font-bold p-4">
                Tickets Tickets Tickets
                </h1>
            </div>
            <div className="divider"></div> 
        </header>
    )
}

export default Header;
