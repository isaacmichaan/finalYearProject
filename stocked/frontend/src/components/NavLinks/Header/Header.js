import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';


const Header = () => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>STOCKED</NavLink>
        </li>
        <li>
            <NavLink to="/stock">STOCK MARKET</NavLink>
        </li>
        <li>
            <NavLink to="/algorithm">ALGORITHM</NavLink>
        </li>
        <li>
            <NavLink to="/about">ABOUT</NavLink>
        </li>
    </ul>
};

export default Header;