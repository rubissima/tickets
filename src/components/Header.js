import React from 'react';
import logo from '../ticket-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <div className="flex gap-x-4 items-center">
                <div className="w-12">
                    <Link to={`/tickets/`}>
                        <img className="aspect-square" src={logo} alt="Ticket App Logo" />
                    </Link>
                </div>
                <h1 className="text-3xl font-bold p-4">
                Tickets Tickets Tickets
                </h1>
            </div>
            <div className="divider"></div> 
        </header>
    )
}

export default Header;
