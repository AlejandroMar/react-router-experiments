import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ loggedIn }) {
  return (
    <div className="container">
      <div className="row">
        <ul className="nav col-8">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        {loggedIn || (
          <Link to="/login" className="nav-link col-2">
            Login
          </Link>
        )}
        {loggedIn ? (
          <Link to="/logout" className="nav-link col-2">
            Logout
          </Link>
        ) : (
          <Link to="/register" className="nav-link col-2">
            Register
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
