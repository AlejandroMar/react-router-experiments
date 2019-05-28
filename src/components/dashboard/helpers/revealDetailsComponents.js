import React from 'react';

import FilmDetails from '../FilmDetails';
import PeopleDetails from '../PeopleDetails';
import PlanetDetails from '../PlanetDetails';
import SpeciesDetails from '../SpeciesDetails';
import StarshipDetails from '../StarshipDetails';
import VehicleDetails from '../VehicleDetails';

const revealDetailsComponents = (function() {
  function films(details) {
    return <FilmDetails details={details} />;
  }
  function people(details) {
    return <PeopleDetails details={details} />;
  }
  function planets(details) {
    return <PlanetDetails details={details} />;
  }
  function species(details) {
    return <SpeciesDetails details={details} />;
  }
  function starships(details) {
    return <StarshipDetails details={details} />;
  }
  function vehicles(details) {
    return <VehicleDetails details={details} />;
  }
  return {
    films,
    people,
    planets,
    species,
    starships,
    vehicles,
  };
})();

export default revealDetailsComponents;
