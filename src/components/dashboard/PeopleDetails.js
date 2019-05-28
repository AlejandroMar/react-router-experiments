import React from 'react';

function PeopleDetails({ details }) {
  return (
    <div className="mt-4">
      <h3>Name:</h3>
      <p>{details.name}</p>
      <h4>Gender:</h4>
      <p>{details.gender}</p>
      <h5>Homeworld:</h5>
      <p>{details.homeworld}</p>
    </div>
  );
}

export default PeopleDetails;
