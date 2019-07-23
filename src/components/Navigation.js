import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <NavLink to="/" isActive={(match, location) => {
            return match.url === "/";
          }}>Home</NavLink>
        </div>
        <div>
          <NavLink to={`/about`}>About</NavLink>
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
