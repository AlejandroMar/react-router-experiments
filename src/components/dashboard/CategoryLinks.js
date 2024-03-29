import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavLinks = ({ match }) => {
  const links = [
    { name: 'Films', url: '/films' },
    { name: 'People', url: '/people' },
    { name: 'Planets', url: '/planets' },
    { name: 'Species', url: '/species' },
    { name: 'Starships', url: '/starships' },
    { name: 'Vehicles', url: '/vehicles' },
  ];

  const navLinks = links.map(link => (
    <li key={link.url} className="nav-item">
      <Link className="nav-link" to={`${match.url}${link.url}`}>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <div className="my-2">
      <h3 className="text-center text-light p-2">Categories</h3>
      <ul className="nav flex-column">{navLinks}</ul>
    </div>
  );
};

export default withRouter(NavLinks);
