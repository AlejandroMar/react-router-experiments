import React from 'react';

function SpeciesDetails({ details }) {
  return (
    <div className="mt-4">
      <h3>Name:</h3>
      <p>{details.name}</p>
      <h4>Language:</h4>
      <p>{details.language}</p>
      <h5>Classification:</h5>
      <p>{details.classification}</p>
    </div>
  );
}

export default SpeciesDetails;
