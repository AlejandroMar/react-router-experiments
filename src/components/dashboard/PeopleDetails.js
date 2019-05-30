import React, { useState, useEffect } from 'react';

function PeopleDetails({ details }) {
  const [homeWorld, setHomeWorld] = useState({ home: '...Loading' });

  const fetchHomeWorld = async details => {
    if (details.homeworld) {
      const fetchWorld = await fetch(`${details.homeworld}`);
      const worldData = await fetchWorld.json();

      setHomeWorld({ home: worldData.name });
    }
  };

  useEffect(() => {
    fetchHomeWorld(details);
  });

  return (
    <div className="mt-4">
      <h3>Name:</h3>
      <p>{details.name}</p>
      <h4>Gender:</h4>
      <p>{details.gender}</p>
      <h5>Homeworld:</h5>
      <p>{homeWorld.home}</p>
    </div>
  );
}

export default PeopleDetails;
