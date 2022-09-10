import React from 'react';
import logo from './ticket-logo.png';

const Header = () => {
    return (
        <header className="App-header">
            <div className="flex gap-x-4">
                <img className="h-12" src={logo} alt="Ticket App Logo" />
                <h1 className="text-3xl font-bold p-4">
                Event Finder
                </h1>
            </div>
            <div className="divider"></div> 
        </header>
    )
}

export default Header;
