import React from 'react';

function PlanetDetails({ details }) {
  return (
    <div className="mt-4">
      <h3>Name:</h3>
      <p>{details.name}</p>
      <h4>Climate:</h4>
      <p>{details.climate}</p>
      <h5>Terrain:</h5>
      <p>{details.terrain}</p>
    </div>
  );
}

export default PlanetDetails;
