import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    color: 'blue',
}

const NavBar = () =>
  <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
      >Home</NavLink>
    <NavLink
      to="/cats"
      exact
      style={link}
    >Cats</NavLink>
    <NavLink
      to="/cats/new"
      exact
      style={link}
    >Add Cat Sighting</NavLink>
    <NavLink
      to="/locations"
      exact
      style={link}
    >Locations</NavLink>
  </div>

export default NavBar;
