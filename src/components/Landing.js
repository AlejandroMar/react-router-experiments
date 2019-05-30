import React from 'react';
import { Link } from 'react-router-dom';

function Landing({ loggedIn }) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Landing Page!</h1>

        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio!
        </p>

        <div className="row">
          {loggedIn || (
            <button type="button" className="btn-secondary nav-link mr-2">
              <Link to="/login" className="text-white">
                Login
              </Link>
            </button>
          )}
          {loggedIn ? (
            <button type="button" className="btn-secondary nav-link">
              <Link to="/logout" className="text-white">
                Logout
              </Link>
            </button>
          ) : (
            <button type="button" className="btn-secondary nav-link">
              <Link to="/register" className="text-white">
                Register
              </Link>
            </button>
          )}
        </div>

        <hr className="my-4" />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          adipisci earum pariatur cum voluptatum est tempore obcaecati iusto
          iure culpa.
        </p>
      </div>
    </div>
  );
}

export default Landing;
