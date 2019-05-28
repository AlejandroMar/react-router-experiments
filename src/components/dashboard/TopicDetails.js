import React, { useState, useEffect } from 'react';
import FilmDetails from './FilmDetails';
import PeopleDetails from './PeopleDetails';
import PlanetDetails from './PlanetDetails';
import SpeciesDetails from './SpeciesDetails';

const revealComponents = (function() {
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
  return {
    films,
    people,
    planets,
    species,
  };
})();

function TopicDetails({ match, topicArr, error }) {
  const [details, setDetails] = useState({});

  const filterArray = topicArr => {
    const filteredDetails = topicArr.filter(topic => {
      if (topic.title) {
        return topic.episode_id === Number(match.params.details);
      }
      return topic.name === match.params.details;
    });
    if (filteredDetails.length > 0) {
      setDetails(filteredDetails[0]);
    }
  };

  useEffect(() => {
    filterArray(topicArr);
  });

  const toRender = (() => {
    if (
      match.params.topic in revealComponents &&
      Object.keys(details).length > 0
    ) {
      return revealComponents[match.params.topic](details);
    }
    return null;
  })();

  return (
    <div className="col-8">
      {error ? (
        <h5>Not found</h5>
      ) : (
        <div>{toRender || <h5>Loading...</h5>}</div>
      )}
    </div>
  );
}

export default TopicDetails;
