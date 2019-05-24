import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Topic from './Topic';

const Topics = ({ match }) => {
  const links = [
    { name: 'Over view', url: '/overview' },
    { name: 'Archive', url: '/archive' },
    { name: 'Social', url: '/social' },
    { name: 'Users', url: '/users' },
    { name: '404 Error', url: '/404Error' },
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
      <h2>Topics</h2>
      <ul className="nav flex-column">{navLinks}</ul>
    </div>
  );
};

export default withRouter(Topics);
