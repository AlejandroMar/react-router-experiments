import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Topic from './Topic';

const NavLinks = ({ match }) => {
  const links = [
    { name: 'Over view', url: '/overview' },
    { name: 'Archive', url: '/archive' },
    { name: 'Users', url: '/users' },
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
