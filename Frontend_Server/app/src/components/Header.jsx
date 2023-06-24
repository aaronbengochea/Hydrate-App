import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(){

    return(
        <div>
            <h1>Hydration Tracker</h1>
            <ul className="header">
            <li><NavLink to="/">Register</NavLink></li>
            <li><NavLink to="/Leaderboard">Leaderboard</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/log">Log</NavLink></li>
            <li><NavLink to="/settings">Testing Page</NavLink></li>
            <li><NavLink to="/state">State Hook</NavLink></li>
            <li><NavLink to="/reducer">Reducer Hook</NavLink></li>
            <li><NavLink to="/effect">Effect Hook</NavLink></li>
            </ul>
        </div>
    )
}

export {Header};