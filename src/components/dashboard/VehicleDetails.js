import React from 'react';

function SpeciesDetails({ details }) {
  return (
    <div className="mt-4">
      <h3>Name:</h3>
      <p>{details.name}</p>
      <h4>Model:</h4>
      <p>{details.model}</p>
      <h5>Manufacturer:</h5>
      <p>{details.manufacturer}</p>
    </div>
  );
}

export default SpeciesDetails;
