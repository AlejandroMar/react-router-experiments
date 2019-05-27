import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Topic from './Topic';

const NavLinks = ({ match }) => {
  /* "films": "https://swapi.co/api/films/",
    "people": "https://swapi.co/api/people/",
    "planets": "https://swapi.co/api/planets/",
    "species": "https://swapi.co/api/species/",
    "starships": "https://swapi.co/api/starships/",
    "vehicles": "https://swapi.co/api/vehicles/"
 */
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
