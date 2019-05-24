import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Topic from './Topic';

const NavLinks = ({ match }) => {
  const links = [
    { name: 'Over view', url: '/overview' },
    { name: 'Archive', url: '/archive' },
    { name: 'Users', url: '/users' },
  ];

  const navLinks = links.map(link => (
    <li key={link.url} className="nav-item">
      <NavLink
        className="navLink nav-link"
        activeClassName="activeNavLink"
        to={`${match.url}${link.url}`}
        exact
      >
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <h2>Links</h2>
      <ul className="nav flex-column">{navLinks}</ul>
    </div>
  );
};

export default withRouter(NavLinks);
