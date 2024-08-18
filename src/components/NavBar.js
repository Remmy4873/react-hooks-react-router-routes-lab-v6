import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Adjust path if necessary

function NavBar() {
  return (
    <nav className="navbar" data-testid="navbar">
      <NavLink 
        to="/" 
        exact="true" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink 
        to="/actors" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Actors
      </NavLink>
      <NavLink 
        to="/directors" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Directors
      </NavLink>
    </nav>
  );
}

export default NavBar;
